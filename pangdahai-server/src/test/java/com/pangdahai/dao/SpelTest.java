package com.pangdahai.dao;

import com.pangdahai.service.DriverService;
import com.pangdahai.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.unitils.UnitilsJUnit4TestClassRunner;
import org.unitils.spring.annotation.SpringApplicationContext;
import org.unitils.spring.annotation.SpringBeanByType;

/**
 * Author: gsj
 * DateTime: 12-8-15 下午5:00
 */
@RunWith(UnitilsJUnit4TestClassRunner.class)
@SpringApplicationContext("/spring-persistence.xml")
public class SpelTest {

    @SpringBeanByType
    private DriverService driverService;

    @SpringBeanByType
    private UserService userService;

    @Test
    public void test1() throws Exception {
        ExpressionParser parser = new SpelExpressionParser();
        System.out.println(userService.getName());
        System.out.println(driverService.getUserName());
        System.out.println(driverService.getUserName1());
        System.out.println(driverService.getUserName2());
        System.out.println(driverService.getUserName3());
//        userService.setName("fuck");
//        System.out.println(userService.getName());
//        System.out.println(driverService.getUserName());


    }
}
