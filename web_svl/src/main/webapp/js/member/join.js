var memail = frm.memail;
var mname = frm.mname;
var mpass = frm.mpass;
var mpassCk = document.getElementById("mpassCk");
var mphone = frm.mphone;
var regp_mail = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])+@[0-9a-zA-Zㄱ-힣-_]+.[a-zA-Zㄱ-힣]{2,4}$/;

//본인인증 버튼 클릭시 팝업
function identify(){
	window.open("./ph_identify.html","","width=400 height=400");
}

function member_go(){
	if(memail.value==""){
		alert("이메일을 입력해주세요");
		memail.focus();

	}else if(regp_mail.test(memail.value)==false){
		alert("이메일을 정확히 입력해주세요");
		memail.focus();
		
	}else if(mpass.value==""){
		alert("비밀번호를 입력해주세요");
		mpass.focus();
		
	}else if(mpassCk.value==""){
		alert("비밀번호를 한번 더 입력해주세요");
		mpassCk.focus();
		
	}else if(mpass.value != mpassCk.value){
		alert("동일한 패스워드를 입력해주세요");
		mpassCk.value="";  //패스워드확인란 초기화
		mpassCk.focus();
		
	}else if(mphone.value==""){
		alert("휴대폰인증을 진행해야합니다");
		
	}else {
		alert("통과")
	}
}



		
	
