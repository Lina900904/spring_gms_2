package com.gms.wb.service.Impl;

import java.util.*;

import com.gms.web.domain.MemberDTO;

public interface MemberService {
	public void add(MemberDTO p) ;
	public List<?> list(Map<?, ?>p) ;
	public List<?> serarch(Map<?, ?>p) ;
	public MemberDTO retrieve(Map<?, ?>p) ;
	public int count(Map<?, ?>p) ;
	public void modify(Map<?, ?>p) ;
	public void remove(Map<?, ?>p) ;
	public void login(Map<?, ?>p) ;

}
