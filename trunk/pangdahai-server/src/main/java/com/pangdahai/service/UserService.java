package com.pangdahai.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Author: gsj
 * DateTime: 12-8-15 下午4:58
 */
@Service
public class UserService {

    @Value("pangdahai")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
