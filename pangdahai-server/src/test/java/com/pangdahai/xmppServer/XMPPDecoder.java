package com.pangdahai.xmppServer;

import org.apache.mina.core.buffer.IoBuffer;
import org.apache.mina.core.session.IoSession;
import org.apache.mina.filter.codec.CumulativeProtocolDecoder;
import org.apache.mina.filter.codec.ProtocolDecoderOutput;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午11:17
 */
public class XMPPDecoder extends CumulativeProtocolDecoder {

    @Override
    protected boolean doDecode(IoSession session, IoBuffer in, ProtocolDecoderOutput out) throws Exception {
        // Get the XML light parser from the IoSession
        XMLLightweightParser parser = (XMLLightweightParser) session.getAttribute("XML-PARSER");
        // Parse as many stanzas as possible from the received data
        parser.read(in.buf());

        if (parser.areThereMsgs()) {
            for (String stanza : parser.getMsgs()) {
                out.write(stanza);
            }
        }
        return !in.hasRemaining();
    }
}
