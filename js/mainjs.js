
$.each($('.toggle-div'), function(index, val) {
	if(!$(this).hasClass('active')){
		$(this).toggle();
	}
});
// $.each($('.wow'), function(index, val) {
// 	$(this).addClass('animated');
// });
$('.toggle-link').click(function(){
	let _this = $(this);
	let _c = $(this).parents('.dropdown').find('.toggle-div');
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$(_c).slideToggle('400').delay(400).queue(function(next) {
			_this.removeClass('active');
            next();
        });
	}
});

$('.collapse-button').click(function(){
	let _this = $(this);
	let _c = $(this).attr('data-target');
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$(_c).slideToggle('400').delay(400).queue(function(next) {
			_this.removeClass('active');
            next();
        });
	}
});
var _navOpen = 1;
$('.button-open-menu').click(function(){
	if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$('.nav-menu').addClass('active').delay(400).queue(function(next) {
			// _this.removeClass('active');
			_navOpen = 0;
            next();
        });
	}
	else{
		if(_navOpen == 0){
			$(this).removeClass('active');
			$('.nav-menu').removeClass('active').delay(400).queue(function(next) {
				// _this.removeClass('active');
				_navOpen = 1;
	            next();
	        });
		}
	}
});
var _mvScroll = 0;
$('.mv').bind('mousewheel', function(e) {
	if(e.originalEvent.wheelDelta < 0 && _mvScroll == 0) 
	{
		_mvScroll = 1;
		$('html, body').animate({
	 		scrollTop: $('.news').offset().top - 100 }, 300, function(){_mvScroll = 0;});
}});

	
$(window).on('scroll', function(){
	$(".passing-bar").each(function(){
		var imgPos = $(this).offset().top;    
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight / 4){
			if(!$(this).hasClass('move')){
				// $(this).get(0).style.setProperty("--mycolor", _t);
				$(this).addClass('move');
			}
			
			// console.log($(this).css('--mycolor'));
			
		}
	});
});