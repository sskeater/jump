package com.feibai.baoying.jump.service;

import java.util.List;

import com.feibai.baoying.jump.model.AbstractModel;

public interface IAbstractService<K extends AbstractModel> {

    public int insert(K k);

    public int count(K k);

    public int update(K k);

    public K selectOne(K k);

    public K selectById(K k);

    public K saveOrUpdate(K k);

    public List<K> saveOrUpdate(List<K> kList);

    public List<K> selectList(K k);

}
