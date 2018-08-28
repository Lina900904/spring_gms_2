package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;
import com.gms.web.service.MemberService;
import com.gms.web.service.impl.MemberServiceImpl;

import jdk.nashorn.internal.ir.RuntimeNode.Request;
@Repository
public class MemberMapper implements MemberDAO {
    @Autowired SqlSessionFactory factory;//connect까지 리턴함
    private static final String ns = "com.gms.web.mapper.MemberMapper";
    @Override
    public void insert(MemberDTO m) {
    	System.out.println("DAO진입");
    	SqlSession sqlSession = factory.openSession();
    	sqlSession.insert(ns+".add",m);
    }

    @Override
    public List<?> selectList(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<?> selectSome(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public MemberDTO selectOne(Map<?, ?> p) {
        SqlSession sqlSession = factory.openSession();
        return sqlSession.selectOne(ns+".selectOne",p);
    }

    @Override
    public int count(Map<?, ?> p) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public void update(Map<?, ?> p) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void delete(Map<?, ?> p) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public boolean login(MemberDTO m) {
    	SqlSession sqlSession = factory.openSession();
    	System.out.println("m값"+m);
    
        return (sqlSession.selectOne(ns+".login",m)!=null);
    }
 

}