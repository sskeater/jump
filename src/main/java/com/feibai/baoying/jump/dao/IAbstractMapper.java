package com.feibai.baoying.jump.dao;

import java.util.List;

public interface IAbstractMapper<K> {

    public int insert(K k);

    public int update(K k);

    public K selectOne(K k);

    public K selectById(K k);

    public List<K> selectList(K k);

    public int count(K k);

}
