package com.pangdahai.xmppServer;

import java.io.IOException;
import java.net.InetAddress;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午10:40
 */
public class SocketAcceptThread extends Thread {

    /**
     * Holds information about the port on which the server will listen for connections.
     */
    private ServerPort serverPort;

    private SocketAcceptingMode acceptingMode;

    public SocketAcceptThread(ConnectionManager connManager, ServerPort serverPort)
            throws IOException {
        super("Socket Listener at port " + serverPort.getPort());
        // Listen on a specific network interface if it has been set.
//        String interfaceName = JiveGlobals.getXMLProperty("network.interface");
        String interfaceName = "network.interface";
        InetAddress bindInterface = null;
        if (interfaceName != null) {
            if (interfaceName.trim().length() > 0) {
                bindInterface = InetAddress.getByName(interfaceName);
                // Create the new server port based on the new bind address
                serverPort = new ServerPort(serverPort.getPort(),
                        serverPort.getDomainNames().get(0), interfaceName, serverPort.isSecure(),
                        serverPort.getSecurityType(), serverPort.getType());
            }
        }
        this.serverPort = serverPort;
        // Set the blocking reading mode to use
//        acceptingMode = new BlockingAcceptingMode(connManager, serverPort, bindInterface);
    }

    /**
     * Retrieve the port this server socket is bound to.
     *
     * @return the port the socket is bound to.
     */
    public int getPort() {
        return serverPort.getPort();
    }

    /**
     * Returns information about the port on which the server is listening for connections.
     *
     * @return information about the port on which the server is listening for connections.
     */
    public ServerPort getServerPort() {
        return serverPort;
    }

    /**
     * Unblock the thread and force it to terminate.
     */
    public void shutdown() {
        acceptingMode.shutdown();
    }

    /**
     * About as simple as it gets.  The thread spins around an accept
     * call getting sockets and handing them to the SocketManager.
     */
    @Override
    public void run() {
        acceptingMode.run();
        // We stopped accepting new connections so close the listener
        shutdown();
    }
}