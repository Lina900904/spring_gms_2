<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri= "http://java.sun.com/jsp/jstl/core"%>


 
<div id ="content-box">
<h1> 회원가입</h1>

<form id="join-Form" name ="join-Form">
ID <input type="text" name = "userid"/><br />
NAME <input type="text" name = "name" /><br />
PASSWORD <input type="text" name = "password" /><br />
주민등록번호 <input type="text" name = "ssn" /><br />
<br />
<!-- <input type="hidden" name = "action" value = "join" />
<input type="hidden" name = "page" value = "joinResult" /> -->
<!-- <input type="hidden" name = "gender" />
<input type="hidden" name = "age" /> -->

<br />
소속팀
<input type="radio" name = "teamid" value="none" checked="checked"/>없음
<input type="radio" name = "teamid" value="nolja" checked="checked"/>걍놀자
<input type="radio" name = "teamid" value="jieunHouse" checked="checked"/>지은이네
<input type="radio" name = "teamid" value="turtleKing" checked="checked"/>왕거북이
<input type="radio" name = "teamid" value="coddingZzang" checked="checked"/>코딩짱
<br />
프로젝트 역할
<select name="roll" id="roll">
<option value="leader">팀장</option>
<option value="front">프론트개발</option>
<option value="back">백단개발</option>
<option value="android">안드로이드 개발</option>
<option value="minfe">민폐</option>
</select><br />

수강과목
<input type="checkbox" name = "subject" value="java" checked="checked" />Java
<input type="checkbox" name = "subject" value="clang"  />C언어
<input type="checkbox" name = "subject" value="jsp"  />JSP
<input type="checkbox" name = "subject" value="PHP"  />PHP
<input type="checkbox" name = "subject" value="nodejs"  />Nodejs
<input type="checkbox" name = "subject" value="Linux"  />Linux
<input type="checkbox" name = "subject" value="html"  />HTML
<input type="checkbox" name = "subject" value="spring"  />SPRING

<br /><input id = "joinFormBtn" type="button" value = "전송" />

</form>
</div>








<!-- 	/* var userid=form.userid.value;
	var password=form.password.value;
	var ssn=form.ssn.value;
	member.setId(userid);
	member.setPassword(password);
	member.setSsn(ssn); */ -->
