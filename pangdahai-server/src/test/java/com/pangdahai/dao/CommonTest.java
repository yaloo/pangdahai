package com.pangdahai.dao;

import org.apache.commons.lang.time.DateFormatUtils;
import org.junit.Test;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;

import java.sql.*;
import java.util.Date;

/**
 * Author: gsj
 * DateTime: 12-8-9 下午4:59
 */
public class CommonTest {

    private final PathMatcher pathMater = new AntPathMatcher();
    private static final String DRIVER = "com.mysql.jdbc.Driver";
    private static final String URL = "jdbc:mysql://localhost:3306/pangdahai";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";

    @Test
    public void testDate() throws Exception {
        System.out.println(DateFormatUtils.format(new Date(), "yyyy年MM月dd日 HH时mm分ss秒"));
    }

    @Test
    public void testMatch() throws Exception {
        String path = "/*/*list*";
        String testPath = "/area/list.htm";
        System.out.println(pathMater.match(path, testPath));
        System.out.println(testPath.toLowerCase());
        System.out.println(pathMater.match(path, "/area/list.htm"));
        System.out.println(pathMater.match(path, testPath.toLowerCase()));
    }

    @Test
    public void testDbunit() throws Exception {
        Connection connection = null;
        try {
            Class.forName(DRIVER);
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);

            DatabaseMetaData metadata = connection.getMetaData();
            ResultSet resultSet = metadata.getColumns(null, null, "driver", null);
            while (resultSet.next()) {
                String name = resultSet.getString("COLUMN_NAME");
                String type = resultSet.getString("TYPE_NAME");
                int size = resultSet.getInt("COLUMN_SIZE");

                System.out.println("Column name: [" + name + "]; type: [" + type
                        + "]; size: [" + size + "]");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            connection.close();
        }
    }
}
