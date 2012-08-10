package com.pangdahai.common;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
* Author: gsj
* DateTime: 12-8-8 上午10:55
*/

@Aspect
@Component
public class OperateLog {
    @Pointcut("execution(* com.pangdahai.service.*.*(..))")
    public void performance(){
    }

    @Around("performance()")
    public void saveOperateLog(ProceedingJoinPoint joinPoint) {
        try {
            joinPoint.proceed();
            Signature signature = joinPoint.getSignature();
            System.out.println(signature.getDeclaringType().getSimpleName());
            System.out.println(signature.getDeclaringTypeName());
            System.out.println(signature.getName());
        } catch (Throwable throwable) {
            System.out.println("nima");
        }
    }
}
