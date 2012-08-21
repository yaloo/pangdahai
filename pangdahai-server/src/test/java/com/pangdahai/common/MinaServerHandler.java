package com.pangdahai.common;

import org.apache.mina.core.service.IoHandlerAdapter;
import org.apache.mina.core.session.IoSession;

import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-21 下午5:52
 */
public class MinaServerHandler extends IoHandlerAdapter {

    public void exceptionCaught(IoSession session, Throwable cause) throws Exception {
        System.out.println("服务端发送异常..." + cause.getMessage());
    }

    public void messageReceived(IoSession session, Object message) throws Exception {
        String msg = message.toString();
        //如果是quit就关闭session退出
        if ("quit".equals(msg)) {
            session.close();
        }
        Date date = new Date();
        session.write(date.toString());
    }

    public void sessionCreated(IoSession session) throws Exception {
        System.out.println("服务端与客户端创建连接...");
    }


}
