package com.gms.web.service;

import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

public interface MemberService {
	    public void add(MemberDTO m) ;
	    public List<?> list(Map<?, ?> p) ;
	    public List<?> search(Map<?, ?> p);
	    public MemberDTO retrieve(MemberDTO m);
	    public int count(Map<?, ?> p) ;
	    public void modify(Map<?, ?> p) ;
	    public void remove(Map<?, ?> p) ;
	    public boolean login(MemberDTO m);
}
