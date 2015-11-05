$(function(){
/**/
	var navas=$("#nav span a");
	for (var i=0;i<navas.length;i++){
		navas[i].addEventListener("click",navsclick);
	};
	function navsclick(){
		for (var i=0;i<navas.length;i++){
			if(this==navas[i]){
				navas[i].setAttribute("class","nav_present");
				$("#content"+i).css("display","block");
			}else{
				navas[i].setAttribute("class","");
				$("#content"+i).css("display","none");
			};
		};
	};
/**/
	var ct_divs=$("#ct0_0>div");
	var ct_help=$("#ct0_0 a").last();
	ct_help.mouseover(function(){
		ct_divs[0].style.display="none";
		ct_divs[1].style.display="block";
	});
	ct_help.mouseout(function(){
		ct_divs[0].style.display="block";
		ct_divs[1].style.display="none";
	});
/**/
	var sky=/^\s*$/;
	var tel=$("#tel");
	var tel_c=$("#tel+.container");
	var telv="";
	tel.focusin(function(){
		tel.css("backgroundColor","#FEFFE3");
		tel_c.html("<span class='focusin'>请输入您的手机号码</span><i class='focusin_i'></i>");
		return telv=false;
	}).focusout(function(){
		if(sky.test(tel.val())){
			tel.css("border","1px solid #fcc"); 
			tel_c.html("<span class='focusout'>请输入您的手机号码</span><i class='focusout_i'></i>");
		}else if(/^1[3-8]\d{9}$/.test(tel.val())){
			tel.css("backgroundColor","#fff");
			tel.css("border","1px solid #A9A9A9");                  
			tel_c.html("<span class='true'></span>");
			telv=true;
		}else {
			tel.css("border","1px solid #FF9A9A"); 
			tel_c.html("<span class='focusout'>您的手机号码格式不正确</span><i class='focusout_i'></i>");
		};
	});
/**/
	var pwd10=$("#password10");
	var pwd10_c=$("#password10+.container");
	var pwd10v="";
	var pwd10_val="";
	pwd10.focusin(function(){
		pwd10.css("banckgroundColor","#FEFFE3");
		pwd10_c.html("<span class='focusin'>密码需由6-16个字母、数字和符号组成，区分大小写；不能使用重复、连续的字母、数字或符号</span><i class='focusin_i'></i>");
		return pwd10v=false;
	}).focusout(function(){
		if(sky.test(pwd10.val())){
			pwd10.css("border","1px solid #fcc"); 
			pwd10_c.html("<span class='focusout'>您还没输入密码</span><i class='focusout_i'></i>");
		}else if(pwd10.val().length<6){
			pwd10.css("border","1px solid #FF9A9A"); 
			pwd10_c.html("<span class='focusout'>密码太短，最少为6位。</span><i class='focusout_i'></i>");
		}else if(/^([1-9a-zA-Z])(\1){2,}$/.test(pwd10.val())){
			console.log(pwd10.val());
			pwd10.css("border","1px solid #FF9A9A"); 
			pwd10_c.html("<span class='focusout'>为了您的账户安全，密码不能为重复数字和连续字母</span><i class='focusout_i'></i>");
		}else if(/^[0-9a-zA-Z]{6,16}$/.test(pwd10.val())){
			pwd10.css("backgroundColor","#fff");
			pwd10.css("border","1px solid #A9A9A9");
			pwd10_c.html("<span class='true'></span>");
			pwd10v=true;
		};
		return pwd10_val=pwd10.val();
	});
	//$("#gamount").bind('input propertychange',function(){grantnumchange();    });
/**/
})

