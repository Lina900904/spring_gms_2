/**
 * 
 */
"use strict;" //에러가 나면 바로 보여줌
var router = (()=> { // 싱글쓰레드모드
	return {
		move : x => { //파라미터는 오직하나, 어려개일 경우 배열
		location.href = 
			x.context +'/'
			+ x.domain
			+ '.do?action='+x.action
			+ '&page='+x.page
	//	location.href = t+'/'+x+'.do?action='+y+'&page='+z;
	}};//
})();
//
var service= (()=>{
	return {
		nullChecker: x=>{
			var i =0;
			var j = {
					checker : true,
					text: '필수입력값이 없습니다'
			};
			for(i in x){									
				if(x[i] ===''){ 					
					j.checker= false;					
				}
			}
			return j;	
			},
			
			addClass : (dom,cName)=>{
				var arr= cName.split(" ");
				if(arr.indexOf(cName)== -1){
					dom.className += " " +cName;
				}
			}
			
	};
	})();
var common = (()=>{
	return{
		main : x => {
			alert('컨텍스트 패스 :'+ x);
			document.getElementById('moveToAdminMain')
			.addEventListener('click',function(){ 
				var isAdmin= confirm('관리자 입니까?');
				if(isAdmin){
					var password = prompt('관리자 비번을 입력하세요');
					if(password == ''){
							router.move({
								context : x,
								domain : 'admin',
								action : 'search',
								page : 'main'});
					}else{
						alert('비번을 잘못 입력했습니다');
						
					}
				}else{
					alert('관리자만 접근이 허용됩니다.');
				}
				
			});
			document.getElementById('moveLoginForm')
			.addEventListener('click',function(){  //콜백함수(연이어서 호출되는 함수)
				router.move({context : x,
					domain : 'member',
					action : 'move',
					page : 'login'}); //배열 json
				alert('클릭 이벤트 체크!');
				//new Common().move('${context}','member','move','user_login_form');	
				
					});
					
			 document.getElementById('moveJoinForm')
			.addEventListener('click',function(){  //콜백함수(연이어서 호출되는 함수)
				router.move({context :x,
					domain:'member',
					action:'move',
					page:'add'});
				
				alert('클릭 이벤트 체크!');
					});
				

				
			 
		
	}
	};
	})();

var admin = (()=>{
	return{

	main:x=>{

		service.addClass(document.getElementById('seachBox'),'width80pt center');
		service.addClass(document.getElementById('searchWord'),'width300px floatRight');
		service.addClass(document.getElementById('searchOption'),'floatRight ');
		service.addClass(document.getElementById('searchBtn'),'floatRight ');
		service.addClass(document.getElementById('content-boxTab'),'width90pt center marginTop30px');
		service.addClass(document.getElementById('contentBoxMeta'),'bgcolorisYellow ');

//
		
		for(var i of document.querySelectorAll('.username') ){ //Array타입 .은클래스
			i.style.color = 'blue';
			i.style.cursor = 'pointer';
			i.addEventListener('click',function(){
			location.href = x+'/member.do?action=retrieve&id='// get방식
			+this.getAttribute('id');//this는 for문에서만 사용~~
				
			});
		};
		//콜백함수 내부의 this와 즉시실행(이파이패턴)의 this는 다름
		//위 this는  x(최초의 객체)를 가르킴
 
		document.getElementById('searchBtn')
		.addEventListener('click', function(){
			var word = document.getElementById('searchWord');
			var option = document.getElementById('searchOption');
			
				location.href = (option.value === 'userid')?
						x+'/admin.do?action=retrieve&page=memberDetail&id='
							+ word.value
					:
						x+'/admin.do?action=search&page=main&option='+option.value+'&word='+word.value
							
					; 
		});  
	

		for(var i of document.querySelectorAll('.pageNumber') ){ 
			i.style.color = 'blue';
			i.style.cursor = 'pointer';
			i.addEventListener('click',function(){
			location.href = x+'/admin.do?action=search&page=main&pageNumber='
			+this.getAttribute('id');
				
			});
		};
		
		

	
		
		
		

	}
};})();
var member=(()=> { //클로져를 사용한 객체 (보안을 위해)
		var _id,_ssn,_password,_name, _roll,  _teamId, _age, _gender, _subject; // 중복된 정보인지 체크함
		var setId = (userid)=>{this._userid= userid;};
		var setSsn = (ssn)=>{this._ssn=ssn;};
		var setPassword = (password)=>{this._password=password;};
		var setName = (name)=>{this._name=name;};
		var setRoll = (roll)=>{this._roll=roll};	
		var setTeamId =  (teamid)=>{this._teamid=teamid;};	
		var setSubject = (subject)=>{this._subject=subject;};	
		var setGender = x=>{		
			if(x[2].substr(7, 1)==='1') {
				this._gender='남자';
			}else {
				this._gender='여자';
			}
			};	
			
		var setAge = x=>{
			var date = new Date().getFullYear()- 1899- (x[2].substr(0,2));
			this._age=date;
			};	
		
		var getId = ()=>{return this._id;};
		var getSsn=  ()=>{return this._ssn;};
		var getPassword=  ()=>{return this._password;};
		var getName=  ()=>{return this._name;};
		var getGender=  ()=>{return this._gender;};
		var getAge=  ()=>{return this._age;};
		var getRoll=  ()=>{return this._roll;};
		var getTeamId=  ()=>{return this._teamId;}
		var getSubject = ()=>{return this._subject;};
		
		return{ //오픈된 공간
			setId :setId,
			setSsn:setSsn,
			setPassword :setPassword,
			setName :setName,
			setRoll :setRoll,
			setTeamId :setTeamId,
			setGender :setGender,
			setAge :setAge,
			setSubject:setSubject,
			getId :getId, // getId(String값) :getId(위에서 선언된set값)
			getSsn : getSsn,
			getPassword :getPassword,
			getName :getName,
			getGender :getGender,
			getAge :getAge,
			getRoll :getRoll,
			getTeamId :getTeamId,
			getSubject:getSubject,
			join:x=>{
				member.setAge(x); //값은 없고 틀만 있음
				member.setGender(x);
			},
			main : x=>{
				if( document.getElementById('updateBtn') != null){
					document.getElementById('updateBtn').addEventListener(
							'click', function() {
								alert('수정버튼 클릭함');
								router.move({context : x,
									domain : 'member',
									action : 'move',
									page : 'modify'}); 
							});
				}else if(document.getElementById('deleteBtn') != null){
					document.getElementById('deleteBtn').addEventListener(
							'click', function() {
								alert('수정확인버튼 클릭함');
								router.move({context : x,
									domain : 'member',
									action : 'move',
									page : 'remove'}); 
							});	
					
				}else if(document.getElementById('joinFormBtn') != null){
					document.getElementById('joinFormBtn')
					.addEventListener('click', 
							function () {
						alert('조인버튼 클릭함');
						var form = document.getElementById('join-Form');

						var z= service.nullChecker(
								[form.userid.value,
									form.password.value,
									form.ssn.value,
									form.name.value]);

						if(z.checker){	
							form.action= x + "/member.do";
							form.method="post";		
						member.join([form.userid.value,
										form.password.value,
										form.ssn.value,
										form.name.value]);
						
						
							var json = [
								{name:'action',value:'add'},
								{name:'gender', value: member.getGender()},
								{name:'age',value: member.getAge()}	];
							var i =0;
							for(i in json){
								var node = document.createElement('input');	
								node.setAttribute('type','hidden');
								node.setAttribute('name',json[i].name);
								node.setAttribute('value',json[i].value);
								form.appendChild(node);
							}
							
							form.submit();
						}else{
							alert(x.text);

						}
					});
					}else if(document.getElementById('loginFormBtn')!=null){
						document.getElementById('loginFormBtn').addEventListener('click',
								function() {	
							var form = document.getElementById('login');
							var	z = service.nullChecker(
									[form.userid.value,form.password.value]);
									
									if(z.checker){		
									var node = document.createElement('input');
									node.innerHTML = '<input type="hidden" name="action" value="login" />';
									form.appendChild(node);
										form.action = x +"/member.do";
										form.method = "post";
										form.submit();
									}else{
										alert(z.text);
									}
								});	
						
					}else if(document.getElementById('updateFormBtn')){
						document.getElementById('updateFormBtn')
						.addEventListener(
								'click',
								function() {
									var node = document.createElement('input');
									node.innerHTML = '<input type="hidden" name = "action" value = "modify"/>';
									form.appendChild(node);

									alert('수정완료버튼 클릭함');

									form.action = x+"/member.do";
									form.method = "post";
									form.submit();

								});
					}
				
				
					
				}};
		})();