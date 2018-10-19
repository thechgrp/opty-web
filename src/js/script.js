// Scroll.js

$(window).on('popstate',function(e){
	e.preventDefault();
	var target = window.location.href.split("#")[1];
	if(target != ""){
		$('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
			window.location.hash = target;
		});
	}
});

$(window).resize(function(){
	resizeVideo();
	showMenuBtn();
});

$(window).trigger("resize");

// open menu on mobile

function showMenuBtn(){
	if($(window).width()<1200){
		$(".open_menu").addClass("visible");
		$("header nav").addClass("hidden");
		$(".navigation_mobile").removeClass("opened");
	}else{
		$(".open_menu").removeClass("visible");
		$("header nav").removeClass("hidden");
		$(".navigation_mobile").removeClass("opened");
	}
}

$(".open_menu").click(function(){
	$(".navigation_mobile").addClass("opened");
});

$(".close_menu, header, section, .navigation_mobile .inner a").click(function(){
	$(".navigation_mobile").removeClass("opened");
});

// Enable AOS plugin (blocks animations)

if(typeof(AOS) !== 'undefined'){
	AOS.init({
		easing: 'ease-in-out-sine'
	});
}

// Resize video, saving aspect ratio

function resizeVideo(){
	var width, height, ratio;
	$(".video").each(function(){
		ratio = $(this).data("ratio");
		ratio = ratio.split("/");
		ratio = ratio[0]/ratio[1];
		width = $(this).width();
		height = width/ratio;
		$(this).height(height);
	});
}

resizeVideo();

// Opening tabs

function openTab(tab){
	if(tab.hasClass("opened")){
		$(".tab_text").animate({height:0},300);
		tab.removeClass("opened");
	}else{
		var nextTabHeight = tab.next().find("div").outerHeight(true);
		$(".tab_text").not(tab.next()).animate({height:0},300);
		tab.next().animate({height:nextTabHeight},300);
		$(".tab_opener").removeClass("opened");
		tab.addClass("opened");
	}
}

$(".tab_opener").click(function(){
	openTab($(this));
});

if($(".opening_tabs").length > 0){
	$(".tab_opener").each(function(){
		if($(this).hasClass("opened")){
			var nextTabHeight = $(this).next().find("div").outerHeight(true);
			$(this).next().css("height",nextTabHeight);
		}
	});
}

