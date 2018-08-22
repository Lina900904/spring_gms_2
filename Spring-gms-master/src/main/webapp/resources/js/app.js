/**
 * 
 */
"use strict;" //에러가 나면 바로 보여줌
var app=(()=>{
	return{
		init : x =>{
			   $("#loginBut").on('click', function() {
			    	alert('컨택스트'+x);
			    	
			    });
		}
	};
})();