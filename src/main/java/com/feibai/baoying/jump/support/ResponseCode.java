package com.feibai.baoying.jump.support;

public enum ResponseCode {
    SUCCESS(0, "success"),

    ERROR(1, "error"),

    PARAMETER(2, "参数类错误，如接口参数处理"),

    NETWORK(3, "网络异常"),

    BUSY(4, "系统繁忙，请稍后尝试"),

    USER(1000, "用户类错误，如操作，内容输入."),

    UserBalance(1001, "用户余额不足"),

    UserNotFound(1002, "没有找到对应的用户信息"),

    BUSINESS(2000, "业务类错误"),

    RoomExisted(2001, "存在未完成的房间"),

    RoomNotFoundByPWD(2002, "没有找到该房间"),

    RoomFinished(2003, "房间已关闭"),

    PLAY(3000, "玩法类错误"),

    ANSWERED(3001, "问题已经回答过"),

    UNLOCK(3002, "本关尚未解锁"),

    TIMEOUT(3003, "答题超时"),

    TRADE(4000, "交易类错误");

    private int code;
    private String message;

    private ResponseCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

}
