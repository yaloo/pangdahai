package com.pangdahai.dao;

import com.pangdahai.domain.Driver;

public interface DriverMapper {
    int deleteByPrimaryKey(Integer driverId);

    int insert(Driver record);

    int insertSelective(Driver record);

    Driver selectByPrimaryKey(Integer driverId);

    int updateByPrimaryKeySelective(Driver record);

    int updateByPrimaryKey(Driver record);
}