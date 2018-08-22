package com.gms.web.service;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberDAO {
	public void insert(MemberDTO p) ;
	public List<?> selectList(Map<?, ?>p) ;
	public List<?> selectSome(Map<?, ?>p) ;
	public MemberDTO selectOne(Map<?, ?>p) ;
	public int count(Map<?, ?>p) ;
	public void update(Map<?, ?>p) ;
	public void delete(Map<?, ?>p) ;
	public void login(Map<?, ?>p) ;

}
