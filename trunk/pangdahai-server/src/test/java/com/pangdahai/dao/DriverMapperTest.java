package com.pangdahai.dao;

import com.pangdahai.domain.Driver;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.unitils.UnitilsJUnit4TestClassRunner;
import org.unitils.dbunit.annotation.DataSet;
import org.unitils.spring.annotation.SpringApplicationContext;
import org.unitils.spring.annotation.SpringBeanByType;

import java.util.Date;

@RunWith(UnitilsJUnit4TestClassRunner.class)
@SpringApplicationContext("/spring-persistence.xml")
@DataSet(value = "PangdahaiDaoTest.xls")
public class DriverMapperTest {

	@SpringBeanByType
	private DriverMapper driverMapper;

    private final PathMatcher pathMater = new AntPathMatcher();

    @Test
    public void testInsert() throws Exception {
        Driver driver = new Driver();
        driver.setDriverName("fuck");
        driver.setDrivingCard("123");
        driver.setMobile("56465146");
        driver.setIdentityCard("3432");
        driver.setTransCapacity("245");
        driver.setSex("人妖");
        driver.setExam("靠");
        driver.setCreateUser(77);
        driver.setStatus(77);
        driver.setGmtCreate(new Date());
        driver.setGmtModified(new Date());
        Assert.assertEquals(1, driverMapper.insert(driver));
    }

    @Test
    public void testMatch() throws Exception {
        String path = "/*/*list*";
        String testPath = "/area/list.htm";
        System.out.println(pathMater.match(path,testPath));
        System.out.println(testPath.toLowerCase());
        System.out.println(pathMater.match(path,"/area/list.htm"));
        System.out.println(pathMater.match(path,testPath.toLowerCase()));
    }
}
