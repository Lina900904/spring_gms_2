package com.gms.web.repository;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberDAO {
    public void insert(MemberDTO m) ;
    public List<?> selectList(Map<?, ?> p) ;
    public List<?> selectSome(Map<?, ?> p) ;
    public MemberDTO selectOne(MemberDTO m) ;
    public int count(Map<?, ?> p) ;
    public void update(Map<?, ?> p) ;
    public void delete(Map<?, ?> p) ;
    public boolean login(MemberDTO m) ;
}
