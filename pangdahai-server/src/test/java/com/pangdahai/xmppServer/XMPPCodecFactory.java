package com.pangdahai.xmppServer;

import org.apache.mina.core.session.IoSession;
import org.apache.mina.filter.codec.ProtocolCodecFactory;
import org.apache.mina.filter.codec.ProtocolDecoder;
import org.apache.mina.filter.codec.ProtocolEncoder;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午11:39
 */
public class XMPPCodecFactory implements ProtocolCodecFactory {

    private final XMPPEncoder encoder;
    private final XMPPDecoder decoder;

    public XMPPCodecFactory() {
        encoder = new XMPPEncoder();
        decoder = new XMPPDecoder();
    }

    @Override
    public ProtocolEncoder getEncoder(IoSession session) throws Exception {
        return encoder;
    }

    @Override
    public ProtocolDecoder getDecoder(IoSession session) throws Exception {
        return decoder;
    }
}
