package com.pangdahai.dao;

import com.pangdahai.domain.Driver;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.unitils.UnitilsJUnit4TestClassRunner;
import org.unitils.dbunit.annotation.DataSet;
import org.unitils.spring.annotation.SpringApplicationContext;
import org.unitils.spring.annotation.SpringBeanByType;

import java.util.Date;

@RunWith(UnitilsJUnit4TestClassRunner.class)
@SpringApplicationContext("/spring-persistence.xml")
@DataSet
public class DriverMapperTest {

	@SpringBeanByType
	private DriverMapper driverMapper;

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
        Assert.assertEquals(1,driverMapper.insert(driver));
    }
}
