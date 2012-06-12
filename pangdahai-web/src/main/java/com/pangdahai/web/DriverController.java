package com.pangdahai.web;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.pangdahai.domain.Driver;
import com.pangdahai.service.DriverService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

/**
 * @author gsj
 *         email:t06000020@hongtu56.com
 * @Description 描述一下这个文件
 * @Date 12-6-7上午10:52
 * @since 1.0.0
 */
@Controller
@RequestMapping("/driver")
public class DriverController {

    @Autowired
    private DriverService driverService;

    Log logger = LogFactory.getLog(DriverController.class);

    private static final ImmutableMap<String, String> sex = ImmutableMap.of("男", "男", "女", "女");
    private static final ImmutableList<String> exam = ImmutableList.of("1","2");

    @RequestMapping("/add")
    public String add(ModelMap modelMap,Driver driver) {
        modelMap.put("driver",driver);
        modelMap.put("sex",sex);
        return "add";
    }

    @RequestMapping("/save")
    public String save(ModelMap modelMap,Driver driver) {
        driver.setSex("人妖");
        driver.setExam("靠");
        driver.setCreateUser(77);
        driver.setStatus(77);
        driver.setGmtCreate(new Date());
        driver.setGmtModified(new Date());
        driverService.insert(driver);
        modelMap.put("driver",new Driver());
        return add(modelMap,driver);
    }
}
