package com.pangdahai.dao;

import org.apache.commons.lang.time.DateFormatUtils;
import org.junit.Test;

import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-9 下午4:59
 */
public class CommonTest {

    @Test
    public void testDate() throws Exception {
        System.out.println(DateFormatUtils.format(new Date(),"yyyy年MM月dd日 HH时mm分ss秒"));
    }
}
