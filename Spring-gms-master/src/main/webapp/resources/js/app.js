/**
 * 
 */
"use strict;" // 에러가 나면 바로 보여줌

var app =app || {}; // 앱이 있으면 앱으로 대체해라
app = {
		init : x =>{
			alert('step1');
			app.session.context(x);
			app.onCreate();
		},
		onCreate : ()=>{
			alert('step3');
			app.setContentView();
		},
		setContentView : ()=>{
			alert('step4'+app.session.path('js')); //step4/web/resources/js
			
		}
};
app.session={
		context : x=>{
			alert('step2'+x);
			sessionStorage.setItem('context',x) // context에 x가 맵핑됨
			sessionStorage.setItem('js',x+'/resources/js')
			sessionStorage.setItem('css',x+'/resources/css')
			sessionStorage.setItem('img',x+'/resources/img')
		},
		path : x=>{
				return sessionStorage.getItem(x);
				
		}
};
		

