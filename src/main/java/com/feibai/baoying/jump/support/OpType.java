package com.feibai.baoying.jump.support;

public enum OpType {
    RECHARGE(true, "充值"),

    PRIZE(true, "奖励"),

    SYSTEM(true, "系统赠送"),

    COST(false, "花费");

    private boolean add;
    private String desc;

    private OpType(boolean add, String desc) {
        this.add = add;
        this.desc = desc;
    }

    public boolean isAdd() {
        return add;
    }

    public String getDesc() {
        return desc;
    }

}
