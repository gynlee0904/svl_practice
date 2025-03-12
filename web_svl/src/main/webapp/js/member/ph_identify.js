var ob = frm_pop.agree; //frm_pop 안에서 name이 agree인 오브젝트
var ea = ob.length;  //name이 agree인 오브젝트 전체 개수

//인증정보제공 전체동의 클릭시 모든 체크박스 선택
function agree_all(v){
	for(var f=0; f<ea; f++){  //전체선택 클릭시 아래 체크박스 모두 선택되도록 작동 
		ob[f].checked = v ;  //같은 이름의 name값은 배열로 순차적으로 처리됨 
	}
}


//체크박스 하나라도 해제되었을 경우 전체동의칸의 체크를 해제 
function agr_ck(){
	var all = document.getElementById("all_agree");
	var count=0;
	for(var f=0; f<ea; f++){
		if(ob[f].checked == true){
			count++;
		}
	}
	if(ea==count){  //name이 agree인 오브젝트의 전체개수와 카운트 개수가 일치할경우 
		all.checked = true;
	}else{
		all.checked = false;
	}
}

var mname = frm_pop.mname;
var mphone = frm_pop.mphone;
var regi_no1 = document.getElementById("regi_no1");
var regi_no2 = frm_pop.regi_no2;
var idno_box = document.getElementById("idno_box");

var regp_no = /[0-9]/g;
var regp_str = /[a-zㄱ-힣]/gi;
var regp_phone = /^01\d{8,9}$/g;

//인증하기 버튼 클릭시 작동 
function idCk_go(gender){
	if(mname.value==""){
		alert("이름을 입력하세요");
		mname.focus();
	}else if(regp_no.test(mname.value)==true){
		alert("이름에 숫자는 입력할 수 없습니다");
		mname.focus();
	}else if(mphone.value==""){
		alert("휴대폰번호를 입력해주세요");
	}
//	else if(regp_phone.test(mphone.value)==false){
//		alert("휴대폰번호는 숫자만 입력해주세요");
//		mphone.focus();
//	}
	else if(regi_no1.value==""){
		alert("생년월일을 입력해주세요");
		regi_no2.focus();
	}
//	else if(regp_str.test(regi_no1)==true){
//		alert("숫자만 입력 가능합니다");
//		regi_no1.focus();
//	}
	else if(regi_no2==""){
		alert("주민번호 뒷 첫자리를 입력해주세요");
		regi_no2.focus();
	}
//	else if(regp_str.test(regi_no2)==true){
//		alert("숫자만 입력 가능합니다");
//		regi_no2.focus();
//	}
	else{
		//필수사항 모두 체크되었는지 확인 
		if(ob[0].checked == true 
			&& ob[1].checked == true 
			&& ob[2].checked == true
			&& ob[3].checked == true){
				if(gender==2||gender==4||gender==1||gender==3){
					idno_box.style.display = "block";  //보이게 함
					alert("인증번호"); 
				}else {
					alert("주민등록번호 뒷자리를 다시 확인하고 입력해주세요");
				}
		}else {
			alert("필수사항에 모두 체크해야합니다.");
		}
		
	}
}


//인증완료 버튼 클릭시 작동 
function idCk_cmp(name,telecom,telno,gender){
	window.opener.document.getElementById("uphone").innerHTML = telno;
	window.opener.document.getElementById("uname").innerHTML = name;
	if(gender == 2 || gender == 4){
		window.opener.document.getElementById("ugender").innerHTML = '여';
	}else if(gender == 1 || gender == 3){
		window.opener.document.getElementById("ugender").innerHTML = '남';
	}
	window.opener.document.getElementById("idCk_btn").disabled = true;
	window.opener.document.getElementById("id_msg").style.display = "block";
	
	window.opener.document.getElementById("name").value = name;
	window.opener.document.getElementById("tlc").value = telecom;
	window.opener.document.getElementById("phone").value = telno;
	window.opener.document.getElementById("gender").value = gender;
	self.close(); //데이터 보내고 바로 창 닫기 
}



