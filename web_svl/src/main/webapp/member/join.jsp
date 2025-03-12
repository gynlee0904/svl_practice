<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link type="text/css" rel="stylesheet" href="../css/member/join.css?v=1">
<script src="../js/jquery.js"></script>
</head>
<body>
<form id="frm" method="post" action="./member_join.do">
	이메일 <input type="text" name="memail"> <br> 
	<span id="em_msg" style="display:none;">사용가능한 아이디입니다 </span> <br>
	
	휴대폰번호 <span id="uphone"></span>
	<input type="hidden" name="mtlc" id="tlc"> 
	<input type="hidden" name="mphone" id="phone"> 
	<input type="button" value="본인인증" id="idCk_btn" onclick="identify();"> <br> 
	<span id="id_msg" style="display:none;"> 인증 완료되었습니다 </span> <br>
	
	이름 <span id="uname"></span> <input type="hidden" name="mname" id="name"><br>
	성별 <span id="ugender"></span> <input type="hidden" name="mgender" id="gender"><br>
	비밀번호 <input type="password" name="mpass" > 최소 6자리이상, 특수문자 포함<br>
	비밀번호 확인 <input type="password" id="mpassCk"> <br>
	<span></span>

	이벤트 메일 수신 (선택)<label><input type="checkbox" name="event_mail" > 정보/이벤트 메일 수신에 동의합니다.</label> <br>
	이벤트 SMS 수신 (선택)<label><input type="checkbox" name="event_sms" > 정보/이벤트 SMS 수신에 동의합니다.</label>
	<br><br>
	<input type="button" value="회원가입" onclick="member_go();">
</form>
</body>
<script src="../js/member/join.js?v=1"></script>
</html>