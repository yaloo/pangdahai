package com.pangdahai.xmppServer;

import org.apache.mina.core.session.IoSession;
import org.apache.mina.filter.codec.ProtocolEncoderAdapter;
import org.apache.mina.filter.codec.ProtocolEncoderOutput;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午11:42
 */
public class XMPPEncoder extends ProtocolEncoderAdapter {

    public void encode(IoSession session, Object message, ProtocolEncoderOutput out)
            throws Exception {
        // Ignore. Do nothing. Content being sent is already a bytebuffer (of strings)
    }
}
