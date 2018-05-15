package cn.edu.lnpu.cnsweb.web.service;

import cn.edu.lnpu.cnsweb.web.model.User;

import java.sql.SQLException;

/**
 * @author wangning113
 * @since 2018/5/12
 */
public interface UserService {
    /**
     * 根据用户名和密码获得用户对象
     *
     * @param userName 用户名
     * @param password 密码
     * @return
     * @throws SQLException
     */
    public User getUserByNameAndPassword(String userName,String password) throws SQLException;
}