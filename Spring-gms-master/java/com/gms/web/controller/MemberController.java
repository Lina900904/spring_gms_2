package com.gms.web.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.MemberDTO;
import com.gms.web.repository.MemberDAO;
import com.gms.web.service.MemberService;



@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired MemberDTO member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute MemberDTO member, Model model) {
		memberService.add(member);
		System.out.println("member is "+ member);
		return "redirect:/move/auth/member/login";
	}
	
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void serarch() {}
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute MemberDTO member, Model model) {
		System.out.println("member값"+member);
		
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public void modify() {}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(@ModelAttribute MemberDTO member, Model model) {
		memberService.login(member);
		
		
		System.out.println("--------------");
		System.out.println(member);
		System.out.println("--------------");
		
		String login ="";
		if(member.getPassword()!=null) {
			login =  "login__success";
		}else {
			 login =  "redirect:/move/auth/member/login";
		}
		System.out.println("login값~~"+login);
		
		return login;
		//
	}
	@RequestMapping("/logout")
	public String logout() {
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
	
	
	
}
