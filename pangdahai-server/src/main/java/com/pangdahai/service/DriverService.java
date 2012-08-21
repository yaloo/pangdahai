package com.pangdahai.service;

import com.pangdahai.dao.DriverMapper;
import com.pangdahai.domain.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * @author gsj
 *         email:t06000020@hongtu56.com
 * @Description 描述一下这个文件
 * @Date 12-6-7上午10:50
 * @since 1.0.0
 */
@Service
public class DriverService {
    @Autowired
    private DriverMapper driverMapper;

    @Value("#{userService.name}")
    private String userName;

    @Value("#{systemProperties['application.home']}")
    private String userName1;

    @Value("#{systemProperties['java.version']}")
    private String userName2;

    @Value("#{systemEnvironment['HOME']}")
    private String userName3;

    public String getUserName1() {
        return userName1;
    }

    public String getUserName2() {
        return userName2;
    }

    public String getUserName3() {
        return userName3;
    }

    public String getUserName() {
        return userName;
    }

    public int insert(Driver record){
        return driverMapper.insert(record);
    }
}
