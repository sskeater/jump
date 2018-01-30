package com.feibai.baoying.jump.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.feibai.baoying.jump.support.UserType;

public class UserInfo extends AbstractModel {
    /** 账号 */
    private String account;
    /** 昵称 */
    private String nickName;
    /** 密码 */
    private String pwd;
    /** 余额 */
    private Integer balance;
    /** 登录token */
    private String token;
    /** 玩家类型 */
    private UserType userType;
    private Date createTime;

    /** 金币操作数量 */
    private int operateCount;

    public UserInfo() {
        super();
    }

    public UserInfo(String account) {
        super();
        this.account = account;
    }

    public UserInfo(String account, String pwd) {
        super();
        this.account = account;
        this.pwd = pwd;
    }

    @JsonIgnore
    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    @JsonIgnore
    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @JsonIgnore
    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    @JsonIgnore
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @JsonIgnore
    public int getOperateCount() {
        return operateCount;
    }

    public void setOperateCount(int operateCount) {
        this.operateCount = operateCount;
    }
}
