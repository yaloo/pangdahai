package com.pangdahai.domain;

import java.util.Date;

public class Driver {
    private Integer driverId;

    private String driverName;

    private String mobile;

    private String identityCard;

    private String drivingCard;

    private String transCapacity;

    private String exam;

    private String sex;

    private Integer createUser;

    private Integer status;

    private Date gmtCreate;

    private Date gmtModified;

    public Integer getDriverId() {
        return driverId;
    }

    public void setDriverId(Integer driverId) {
        this.driverId = driverId;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName == null ? null : driverName.trim();
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard == null ? null : identityCard.trim();
    }

    public String getDrivingCard() {
        return drivingCard;
    }

    public void setDrivingCard(String drivingCard) {
        this.drivingCard = drivingCard == null ? null : drivingCard.trim();
    }

    public String getTransCapacity() {
        return transCapacity;
    }

    public void setTransCapacity(String transCapacity) {
        this.transCapacity = transCapacity == null ? null : transCapacity.trim();
    }

    public String getExam() {
        return exam;
    }

    public void setExam(String exam) {
        this.exam = exam == null ? null : exam.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public Integer getCreateUser() {
        return createUser;
    }

    public void setCreateUser(Integer createUser) {
        this.createUser = createUser;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }
}