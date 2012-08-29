package com.pangdahai.xmppServer;

import org.apache.mina.core.filterchain.IoFilterAdapter;
import org.apache.mina.core.session.IoSession;
import org.apache.mina.core.write.WriteRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-29 上午11:24
 */
public class StalledSessionsFilter extends IoFilterAdapter {

    private static final Logger Log = LoggerFactory.getLogger(StalledSessionsFilter.class);

    private static final int bytesCap = 5242880;

    @Override
    public void filterWrite(NextFilter nextFilter, IoSession session, WriteRequest writeRequest)
            throws Exception {
        // Get number of pending requests
        long pendingBytes = session.getScheduledWriteBytes();
        if (pendingBytes > bytesCap) {
            // Get last time we were able to send something to the connected client
            long writeTime = session.getLastWriteTime();
            int pendingRequests = session.getScheduledWriteMessages();
            Log.debug("About to kill session with pendingBytes: " + pendingBytes + " pendingWrites: " +
                    pendingRequests + " lastWrite: " + new Date(writeTime) + "session: " + session);
            // Close the session and throw an exception
            session.close();
            throw new IOException("Closing session that seems to be stalled. Preventing OOM");
        }
        // Call next filter (everything is fine)
        super.filterWrite(nextFilter, session, writeRequest);
    }
}
