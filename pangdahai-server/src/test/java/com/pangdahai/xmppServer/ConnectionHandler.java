package com.pangdahai.xmppServer;

import org.apache.mina.core.service.IoHandlerAdapter;
import org.apache.mina.core.session.IoSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午11:19
 */
public class ConnectionHandler extends IoHandlerAdapter {

    private static final Logger Log = LoggerFactory.getLogger(ConnectionHandler.class);

    /**
     * The utf-8 charset for decoding and encoding Jabber packet streams.
     */
    static final String CHARSET = "UTF-8";
    static final String XML_PARSER = "XML-PARSER";
    protected static final String HANDLER = "HANDLER";
    protected static final String CONNECTION = "CONNECTION";

    protected String serverName;

    protected ConnectionHandler(String serverName) {
        this.serverName = serverName;
    }
    public void exceptionCaught(IoSession session, Throwable cause) throws Exception {
        System.out.println("服务端发送异常..." + cause.getMessage());
    }

    public void messageReceived(IoSession session, Object message) throws Exception {
        String msg = message.toString();
        //如果是quit就关闭session退出
        if ("quit".equals(msg)) {
            session.close();
        }
        int hashCode = Thread.currentThread().hashCode();
        Date date = new Date();
        session.write(date.toString());
        System.out.println(msg);
    }

    public void sessionCreated(IoSession session) throws Exception {
        System.out.println("服务端与客户端创建连接...");
    }

    @Override
    public void sessionOpened(IoSession session) throws Exception {
        System.out.println("session opened");
    }
}
