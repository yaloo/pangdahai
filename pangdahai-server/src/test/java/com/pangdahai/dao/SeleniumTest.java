package com.pangdahai.dao;

import com.thoughtworks.selenium.Selenium;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverBackedSelenium;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.File;

/**
 * Author: gsj
 * DateTime: 12-7-25 下午3:24
 */
public class SeleniumTest {
//    @Before
//    public void setUp() throws Exception {
//        setUp("http://localhost:8080/", "*firefox3 E:\\Program Files\\Mozilla Firefox\\firefox.exe");
//    }

    @Test
    public void test登陆() throws Exception {
        File pathToFirefoxBinary = new File("E:\\Program Files\\Mozilla Firefox\\firefox.exe");
        FirefoxBinary firefoxbin = new FirefoxBinary(pathToFirefoxBinary);
        WebDriver driver = new FirefoxDriver(firefoxbin,null);//这里使用这个构造方法。
//        System.setProperty ("webdriver.firefox.bin","E:\\Program Files\\Mozilla Firefox\\firefox.exe");
//        WebDriver driver = new FirefoxDriver();
// A "base url", used by selenium to resolve relative URLs
        String baseUrl = "http://www.google.com";

// Create the Selenium implementation
        Selenium selenium = new WebDriverBackedSelenium(driver, baseUrl);
        selenium.open("/");
        selenium.click("css=#navLogin > a");
        selenium.waitForPageToLoad("30000");
        selenium.type("id=loginName", "hello1234");
        selenium.type("id=password", "hello1234");
        selenium.click("id=submitButton");
        selenium.waitForPageToLoad("30000");
    }
}
