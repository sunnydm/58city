window.onload=function(){
	/*页头*/
	function m_over_div(){
		this.querySelector("div").style.display="block";
	};
	function m_out_div(){
		this.querySelector("div").style.display="none";
	};
	function m_overleave(ids) {
		for (var i = 0; i < ids.length; i++)
		{
			var dom = document.querySelector(ids[i]);
			dom.addEventListener("mouseover", m_over_div);
			dom.addEventListener("mouseleave", m_out_div);
		}
	};
	m_overleave(["#weather", "#header_center_r_see", "#header_center_r_zxx",".nav_shouji",".nav_bangbang"]);
	var header_center_r_xiala58=document.getElementById("header_center_r_xiala58");
	var hcrx_ul=header_center_r_xiala58.querySelector("ul");
	var hcrx_u=header_center_r_xiala58.querySelector("u");
	header_center_r_xiala58.addEventListener("mouseover",function(){
		hcrx_ul.style.display="block";
		hcrx_u.className="hover";
	});
	header_center_r_xiala58.addEventListener("mouseout",function(){
		hcrx_ul.style.display="none";
		hcrx_u.className="";
	});
	/*动态*/	
	window.onscroll = _onScroll;  
	function _onScroll(){       
		var header_bottom_scroll = document.getElementById("header_bottom_scroll");  
		var scrollTop = document.documentElement.scrollTop + document.body.scrollTop; 
		if(scrollTop>80){
			header_bottom_scroll.style.display="block";
		}else{
			header_bottom_scroll.style.display="none";
		};
	}; 
	/*下三*/
	var article_nav=document.querySelector(".article_nav");
	var article=document.getElementById("article");
	var art_spans=article_nav.querySelectorAll("span");
	var article_ctt=[];
	for (var i=0;i<art_spans.length;i++ ){
		art_spans[i].addEventListener("mouseover",m_art_span);
	};
	function m_art_span(){
		for(var i=0;i<art_spans.length;i++){
			if(art_spans[i]==this){
				art_spans[i].setAttribute("class","article_navnow");
				article_ctt[i]=article.querySelector(".article_ctt"+i);
				article_ctt[i].style.display="block";

			}else{
				art_spans[i].setAttribute("class","");
				article_ctt[i]=article.querySelector(".article_ctt"+i);
				article_ctt[i].style.display="none";
			}
		}
	};
	var erweima=document.getElementById("erweima");
	function turnoff(){
		 erweima.style.display="none";
	};
	erweima.querySelector("a").addEventListener("click",turnoff);
	
}	