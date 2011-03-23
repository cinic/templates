document.documentElement.id = "js";
$(function(){
	/*Promo Block control elements*/
	var objHead = document.getElementsByTagName('head');
  	if (objHead[0])
  	{
    	var objCSS = objHead[0].appendChild(document.createElement('link'));
    	objCSS.id = 'three-promo-box-css';
    	objCSS.rel = 'stylesheet';
    	objCSS.href = '/assets/templates/broco/css/promo.blocks/three.promo.box.css';
  	}
	
	$("#promo div").addClass("promo-control");
	$("#promo .promo-control").click(function(){
		$(this).removeClass("narrowed").addClass("expanded").siblings().removeClass("expanded").addClass("narrowed");
	});
	
	$('.promo-control').children('section').children('p').wrapInner('<span class="c"/>').wrapInner('<span class="r"/>').wrapInner('<span class="l"/>');
	
	/* Add Adriver banner in .sub adv-240 */
	new adriver("sub-adv-240", {sid: 134256, sz: "inside-page-240", pz: 0, bn: 1, bt:52});
	
	/* Switcher for trading conditions */
	if (location.toString().match("/brokerage-services/")) {
		$("dl#tabs dt").click(function(){
			$("dl#tabs dt").siblings().removeClass("selected");
			var sClass = $(this).attr("class").replace("tab-bottom ","").replace("top-item ","");
			$("dl#tabs dt.tab-bottom."+sClass).addClass("selected");
			$("dl#tabs dt#"+sClass).next("dd").andSelf().addClass("selected");
		});
		
		if ((location.toString().match("#"))&&!(location.toString().match("comment"))) {
			var tabName = location.toString().replace(new RegExp ("^(http:\/\/)?([A-Za-z0-9\.\/\-])+([#]){1}"),"");
			if (location.toString().match(tabName)) {
				$("dl#tabs dt.top-item").siblings().removeClass("selected");
				$("dl#tabs dt.tab-bottom").removeClass("selected");
				$("dl#tabs dt#"+tabName+", dl#tabs dt."+tabName).next("dd").andSelf().addClass("selected");
			} 
		}
	}
	
	/* Feedback */
	wh = $(window).height();
	ww = $(window).width();
	bh = $("#feedback-wrap").height();
	bw = $("#feedback-wrap").width();
	lf = (ww - bw) / 2;
	tp = (wh - bh) / 2;
	ah = $("#feedback").height();
	atp = (wh - ah) / 2;
	
	$('#feedback #form').load('/feedback/ #emailform');
	$("#feedback").css({"top" : atp});
	
	$('#feedback a').click(function(){
	$("#feedback-wrap").css({
			"left" : lf,
			"top" : tp,
			"display" : "block"
		}).animate({opacity: 1}, 1500);
		return false;
	});
	$(".fbackclose").click(function(){
			$("#feedback-wrap").css({"display" : "none"}).animate({opacity:0}, 1000);
		});
	
});