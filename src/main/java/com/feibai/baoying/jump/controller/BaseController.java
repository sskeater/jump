package com.feibai.baoying.jump.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.feibai.baoying.jump.support.ResponseCode;

public class BaseController {

    protected Map<String, Object> buildSimpleResponse(ResponseCode code) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", code.getCode());
        result.put("msg", code.getMessage());
        return result;
    }

    protected Map<String, Object> buildSimpleResponse(ResponseCode code, Object data) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", code.getCode());
        if (null != data) {
            result.put("data", data);
        }
        return result;
    }

    protected Map<String, Object> buildSimpleResponse(ResponseCode code, Object data, String msg) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", code.getCode());
        if (StringUtils.isNotBlank(msg)) {
            result.put("msg", msg);
        }
        if (null != data) {
            result.put("data", data);
        }
        return result;
    }

}
