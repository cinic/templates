$(function(){
    $('html').removeClass('no-js').addClass('js');
	/*Promo Block control elements*/
	var nLnk = $('.three-promo-box .newbie').parent().attr('href');
	var pLnk = $('.three-promo-box .professional').parent().attr('href');
	var iLnk = $('.three-promo-box .investor').parent().attr('href');
	$('.three-promo-box div').unwrap();
	$('.three-promo-box .box-about nav').wrapInner('<a/>');
	$('.three-promo-box .newbie').addClass('expanded').siblings().addClass('narrowed');
	$('.three-promo-box .newbie .box-about nav a').attr('href', nLnk);
	$('.three-promo-box .professional .box-about nav a').attr('href', pLnk);
	$('.three-promo-box .investor .box-about nav a').attr('href', iLnk);
    $(".three-promo-box div").click(function(){
        $(this).removeClass('narrowed').addClass('expanded').siblings().removeClass("expanded").removeAttr('style').addClass("narrowed");
    });
	
	$('.three-promo-box .box-about p').wrapInner('<span class="c"/>').wrapInner('<span class="r"/>').wrapInner('<span class="l"/>');
	/*End of controls*/
	
	/* Add Adriver banner in .sub adv-240 */
	
	//var subBanner240 = 	new adriver("sub-adv-240", {sid: 134256, sz: "inside-page-240", pz: 0, bn: 1, bt:52});
	if(window.adriver) {
		new adriver("sub-adv-240", {sid: 134256, sz: "inside-page-240", pz: 0, bn: 1, bt:52});
	}
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
    var fForm = $("#feedback-wrap");
    if (fForm) {
		var wh = $(window).height();
        var ww = $(window).width();
        var bh = $("#feedback-wrap").height();
        var bw = $("#feedback-wrap").width();
        var lf = (ww - bw) / 2;
        var tp = (wh - bh) / 2;
        var name = navigator.platform;
        if (name.toLowerCase().match('mac') != null) {
            $('.fbackclose').css({'left' : '-10px'});
        };
 
        $('#feedback #form').load('/feedback/ #emailform');
	
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
    }
	
});