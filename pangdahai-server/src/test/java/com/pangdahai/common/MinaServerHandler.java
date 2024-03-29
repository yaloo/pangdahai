package com.pangdahai.common;

import com.pangdahai.xmppServer.XMLLightweightParser;
import org.apache.mina.core.service.IoHandlerAdapter;
import org.apache.mina.core.session.IoSession;

import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-21 下午5:52
 */
public class MinaServerHandler extends IoHandlerAdapter {

    static final String CHARSET = "UTF-8";
    static final String XML_PARSER = "XML-PARSER";
    protected static final String HANDLER = "HANDLER";
    protected static final String CONNECTION = "CONNECTION";

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
        // Create a new XML parser for the new connection. The parser will be used by the XMPPDecoder filter.
        final XMLLightweightParser parser = new XMLLightweightParser(CHARSET);
        session.setAttribute(XML_PARSER, parser);
        System.out.println("服务端与客户端创建连接...");
    }

    @Override
    public void sessionOpened(IoSession session) throws Exception {
        // Create a new XML parser for the new connection. The parser will be used by the XMPPDecoder filter.
        final XMLLightweightParser parser = new XMLLightweightParser(CHARSET);
        session.setAttribute(XML_PARSER, parser);
        System.out.println("session opened");
    }

    @Override
    public void messageSent(IoSession session, Object message) throws Exception {
        System.out.println("messageSent invoked:" + message);
    }
}
