package com.pangdahai.web;

import com.google.common.collect.Lists;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Author: gsj
 * DateTime: 12-8-8 下午2:57
 */
public class OperateInterceptor extends HandlerInterceptorAdapter {
//public class OperateInterceptor implements HandlerInterceptor {

    private List<String> operateList = Lists.newArrayList();

    private final PathMatcher pathMater = new AntPathMatcher();

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        String servletPath = request.getServletPath();
        System.out.println(pathMater.match("/driver/add*",servletPath));
        if(handler instanceof HandlerMethod) {
            HandlerMethod method = (HandlerMethod)handler;
            String className = method.getBeanType().getSimpleName();
            String tableName = className.substring(0,className.indexOf("Controller"));
            System.out.println(tableName);
            System.out.println(method.getMethod().getName());
        }
    }

    public void setOperateList(List<String> operateList) {
        this.operateList = operateList;
    }
}
