
$.each($('.toggle-div'), function(index, val) {

	$(this).hasClass('active') ? console.log('asd') : $(this).toggle();
	console.log('asd');
});
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

