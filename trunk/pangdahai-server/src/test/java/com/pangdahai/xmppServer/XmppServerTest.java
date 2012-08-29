package com.pangdahai.xmppServer;

import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.transport.socket.SocketAcceptor;
import org.apache.mina.transport.socket.SocketSessionConfig;
import org.apache.mina.transport.socket.nio.NioSocketAcceptor;
import org.openqa.jetty.jetty.servlet.SessionManager;

import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午10:37
 */
public class XmppServerTest {

    private SocketAcceptor socketAcceptor;
    private SocketAcceptor sslSocketAcceptor;
    private SocketAcceptor componentAcceptor;
    private SocketAcceptThread serverSocketThread;
    private SocketAcceptor multiplexerSocketAcceptor;
    private ArrayList<ServerPort> ports;

    private SessionManager sessionManager;
    //    private PacketDeliverer deliverer;
//    private PacketRouter router;
//    private RoutingTable routingTable;
    private String serverName;
    private String localIPAddress = null;

    public static void main(String args[]) {
        new XmppServerTest().startListener();
        System.out.println("服务器已启动！");
    }

    private synchronized void createListeners() {
        // Create the port listener for clients
        startListener();
    }

    private synchronized void startListener() {
        // Setup port info
        try {
            localIPAddress = InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            if (localIPAddress == null) {
                localIPAddress = "Unknown";
            }
        }
        // Create the port listener for clients
        createClientListeners();
        startClientListeners(localIPAddress);
    }


    private void createClientListeners() {
        // Start clients plain socket unless it's been disabled.
        // Create SocketAcceptor with correct number of processors
        socketAcceptor = buildSocketAcceptor();
        // Customize Executor that will be used by processors to process incoming stanzas
//        ExecutorThreadModel threadModel = ExecutorThreadModel.getInstance("client");
//        int eventThreads = 16;
//        ThreadPoolExecutor eventExecutor = (ThreadPoolExecutor) threadModel.getExecutor();
//        eventExecutor.setCorePoolSize(eventThreads + 1);
//        eventExecutor.setMaximumPoolSize(eventThreads + 1);
//        eventExecutor.setKeepAliveTime(60, TimeUnit.SECONDS);

//        socketAcceptor.getSessionConfig().setThreadModel(threadModel);
        // Add the XMPP codec filter
        socketAcceptor.getFilterChain().addFirst("xmpp", new ProtocolCodecFilter(new XMPPCodecFactory()));
        // Kill sessions whose outgoing queues keep growing and fail to send traffic
        socketAcceptor.getFilterChain().addAfter("xmpp", "outCap", new StalledSessionsFilter());
    }

    private SocketAcceptor buildSocketAcceptor() {
        SocketAcceptor socketAcceptor;
        // Create SocketAcceptor with correct number of processors
        int ioThreads = Runtime.getRuntime().availableProcessors();
        // Set the executor that processors will use. Note that processors will use another executor
        // for processing events (i.e. incoming traffic)
        Executor ioExecutor = new ThreadPoolExecutor(
                ioThreads + 1, ioThreads + 1, 60, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>());
//        socketAcceptor = new NioSocketAcceptor(ioExecutor,ioThreads);
        socketAcceptor = new NioSocketAcceptor(ioThreads);
        // Set that it will be possible to bind a socket if there is a connection in the timeout state
        SocketSessionConfig socketSessionConfig = socketAcceptor.getSessionConfig();
        socketSessionConfig.setReuseAddress(true);
        // Set the listen backlog (queue) length. Default is 50.
        socketAcceptor.setBacklog(50);

        //socketSessionConfig.setKeepAlive();
        int receiveBuffer = -1;
        if (receiveBuffer > 0) {
            socketSessionConfig.setReceiveBufferSize(receiveBuffer);
        }
        int sendBuffer = -1;
        if (sendBuffer > 0) {
            socketSessionConfig.setSendBufferSize(sendBuffer);
        }
        int linger = -1;
        if (linger > 0) {
            socketSessionConfig.setSoLinger(linger);
        }
        socketSessionConfig.setTcpNoDelay(
                socketSessionConfig.isTcpNoDelay());
        return socketAcceptor;
    }

    private void startClientListeners(String localIPAddress) {
        // Start clients plain socket unless it's been disabled.
//        int port = getClientListenerPort();
        int port = 5222;
        try {
            // Listen on a specific network interface if it has been set.
           /* String interfaceName = JiveGlobals.getXMLProperty("network.interface");
            InetAddress bindInterface = null;
            if (interfaceName != null) {
                if (interfaceName.trim().length() > 0) {
                    bindInterface = InetAddress.getByName(interfaceName);
                }
            }*/
            // Start accepting connections
            InetAddress bindInterface = null;
            socketAcceptor.setHandler(new ConnectionHandler(serverName));
            socketAcceptor.bind(new InetSocketAddress(bindInterface, port));
            ports.add(new ServerPort(port, serverName, localIPAddress, false, null, ServerPort.Type.client));

            List<String> params = new ArrayList<String>();
            params.add(Integer.toString(port));
        } catch (Exception e) {
            System.err.println("Error starting XMPP listener on port " + port + ": " +
                    e.getMessage());
        }
    }
}
