package com.feibai.baoying.jump.service;

import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

import com.feibai.baoying.jump.dao.IAbstractMapper;
import com.feibai.baoying.jump.model.AbstractModel;

public abstract class AbstractService<K extends AbstractModel> {

    public abstract IAbstractMapper<K> getMapper();

    ReentrantLock lock = new ReentrantLock();

    public K saveOrUpdate(K k) {
        K old = getMapper().selectOne(k);
        try {
            lock.lock();
            if (null == old) {
                getMapper().insert(k);
            } else {
                k.setId(old.getId());
                getMapper().update(k);
            }
        } catch (Exception e) {
            throw e;
        } finally {
            lock.unlock();
        }
        return k;
    }

    public List<K> saveOrUpdate(List<K> kList) {
        for (K k : kList) {
            saveOrUpdate(k);
        }
        return kList;
    }

    public List<K> selectList(K k) {
        return getMapper().selectList(k);
    }

    public K selectOne(K k) {
        return getMapper().selectOne(k);
    }

    public int insert(K k) {
        return getMapper().insert(k);
    }

    public int count(K k) {
        return getMapper().count(k);
    }

    public int update(K k) {
        return getMapper().update(k);
    }

    public K selectById(K k) {
        return getMapper().selectById(k);
    }
}
