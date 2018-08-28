package com.gms.web.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.gms.web.domain.MemberDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.repository.MemberDAO;
import com.gms.web.service.MemberService;
@Service
public class MemberServiceImpl implements MemberService {
    @Autowired MemberDAO memberDAO;
    @Override
    public void add(MemberDTO m) {
    	if(m.getSsn().substring(7,8)=="1") {
    		m.setGender("남자");
		}else {
			m.setGender("여자");
		}
    	
     	SimpleDateFormat date = new SimpleDateFormat("yyyy");
     	String year=date.format(new Date());
		 int age = Integer.parseInt(year)- 1899- (Integer.parseInt(m.getSsn().substring(0,2)));
		 m.setAge(String.valueOf(age));
    	memberDAO.insert(m);
    	
    	
   
		};	

    @Override
    public List<?> list(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return memberDAO.selectList(p);
    }

    @Override
    public List<?> search(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return memberDAO.selectSome(p);
    }
  
  

    @Override
    public int count(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return memberDAO.count(p);
    }

    @Override
    public void modify(Map<?, ?> p) {
      memberDAO.update(p);
        
    }

    @Override
    public void remove(Map<?, ?> p) {
    	 memberDAO.delete(p);
        
    }

    @Override
    public boolean login(MemberDTO m) {
    	System.out.println("login 값  :"+m);
    	
        return   memberDAO.login(m) ;
    }
    
	@Override
	public MemberDTO retrieve(Map<?, ?> p) {
		
		return memberDAO.selectOne(p);
	}

}