package com.feibai.baoying.jump.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.feibai.baoying.jump.exception.InvalidUserInfoException;

public final class Tools {

    static Logger logger = LoggerFactory.getLogger(Tools.class);

    public static String randomString() {
        return md5(String.valueOf(Math.random()));
    }

    public static String md5(String content) {
        try {
            MessageDigest digest = MessageDigest.getInstance("md5");
            byte[] bs = digest.digest(content.getBytes());
            String hexString = "";
            for (byte b : bs) {
                int temp = b & 255;
                if (temp < 16 && temp >= 0) {
                    hexString = hexString + "0" + Integer.toHexString(temp);
                } else {
                    hexString = hexString + Integer.toHexString(temp);
                }
            }
            return hexString.toUpperCase();
        } catch (NoSuchAlgorithmException e) {
            return "";
        }
    }

    /**
     * 从请求中获取用户ID，如果没有获取到，则抛出异常 {@code InvalidUserInfoException}
     * 
     * @param request
     * @return
     */
    public static int getUserIdFromRequest(HttpServletRequest request) {
        try {
            return Integer.valueOf(request.getHeader("token"));
        } catch (Exception e) {
            throw new InvalidUserInfoException();
        }
    }
}
