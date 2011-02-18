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
});