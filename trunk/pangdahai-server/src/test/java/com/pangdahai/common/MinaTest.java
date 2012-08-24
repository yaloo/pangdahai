package com.pangdahai.common;

import org.apache.mina.core.service.IoAcceptor;
import org.apache.mina.core.session.IdleStatus;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.filter.codec.textline.TextLineCodecFactory;
import org.apache.mina.filter.executor.ExecutorFilter;
import org.apache.mina.filter.logging.LoggingFilter;
import org.apache.mina.transport.socket.nio.NioSocketAcceptor;

import java.net.InetSocketAddress;
import java.nio.charset.Charset;
import java.util.concurrent.Executors;

/**
 * Author: gsj
 * DateTime: 12-8-21 下午5:36
 */
public class MinaTest {

    private static final int PORT = 8088;

    /**
     * 启动后在cmd中运行telnet 1270.0.0.1 8088
     * @param args
     */
    public static void main(String args[]) {
        try {
            // 创建一个非阻塞的server端的Socket
            IoAcceptor acceptor = new NioSocketAcceptor();
            // 设置过滤器
            acceptor.getFilterChain().addLast("logger", new LoggingFilter());
            acceptor.getFilterChain().addLast("codec",
                    new ProtocolCodecFilter(new TextLineCodecFactory(Charset.forName("UTF-8"))));
            acceptor.getFilterChain().addLast("threadPool", new ExecutorFilter(Executors.newCachedThreadPool()));
            // 设置读取数据的缓冲区大小
            acceptor.getSessionConfig().setReadBufferSize(2048);
            // 读写通道10秒内无操作进入空闲状态
            acceptor.getSessionConfig().setIdleTime(IdleStatus.BOTH_IDLE, 10);
            // 绑定逻辑处理器
            acceptor.setHandler(new MinaServerHandler());
            // 绑定端口
            acceptor.bind(new InetSocketAddress(PORT));
            System.out.println("服务端启动成功... 端口号为：" + PORT);
        } catch (Exception e) {
            System.out.println("服务端启动异常...." + e.getMessage());
            e.printStackTrace();
        }
    }
}
