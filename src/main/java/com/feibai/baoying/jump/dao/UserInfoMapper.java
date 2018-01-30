package com.feibai.baoying.jump.dao;

import org.springframework.stereotype.Repository;

import com.feibai.baoying.jump.model.UserInfo;

@Repository
public interface UserInfoMapper extends IAbstractMapper<UserInfo> {

    /**
     * 更新账户余额
     * 
     * @param user
     * @return
     */
    public int updateBalance(UserInfo user);

    /**
     * 获取一个机器人
     * 
     * @param k
     * @return
     */
    public UserInfo selectRobot(UserInfo k);

}
