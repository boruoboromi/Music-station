"use strict";

(function(){
	var top = $('.index_top'),
	    $Body = $('body'),
	    music = $('#music')[0],
	    musicBtn = $('.musicBtn'),
	    run = $('.run'),
	    mask = $('#mask'),
	    signIn = $('#sign_in'),
	    signUp = $('#sign_up'),
	    close = $('.close'),
	    backTop = $('.backTop'),
	    musicBoxclose = $('.musicBoxclose'),
	    upload = $('#upload');
	    
	var pageH = $(window).height();
	
	/*---------------------banner---------------------*/
	top.height(pageH);
	$(window).resize(function(){
		pageH = $(window).height();
		top.height(pageH);
	});
	
	//scroll top
	$(window).scroll(function(){
		var h =$('.singBox').offset().top;
		if($(window).scrollTop()>h){
			backTop.show().removeClass('rotate');
		}else{
			backTop.show().addClass('rotate');
		}
	});
	backTop.click(function(){
		$('html,body').animate({
			scrollTop:'0px'
		},800)
	});
	
	//music
	musicBtn.click(function(){
		var active = musicBtn.hasClass('active');
		active?$(this).removeClass('active'):$(this).addClass('active');
		changeMusic(!active);
	});
	musicBoxclose.click(function(){
		$('.musicBox').addClass('slideOutDown');
	})
	
	
	//banner moving
	run.each(function(){
		var time = parseFloat($(this).attr('time'));
		$(this).css({
			'animation-delay': time +'s',
			'-moz-animation-delay': time +'s',
			'-webkit-animation-delay': time +'s',
			'-o-animation-delay': time +'s'
		});
	});
	
	//sign in
	signIn.click(function(){
		showSignIn();
	});
	close.click(function(){
		$('#mask,.tapBox').hide();
	});
	

	
	//sign up
	signUp.click(function(){
		showSignUp();
	});
	
	//music play
	$(document).on('click','.playBtn',function(){
		changeMusic(false)
		$('.musicBox').show().removeClass('slideOutDown').addClass('slideInUp');
	});
	
	//upload
	upload.click(function(){
		showUpload()
	})
	
	
	
	function changeMusic (act) {
		if(act){
		    musicBtn.find('i')[0].className = "fa fa-volume-up";
		    music.play();
	    }else{
		    musicBtn.find('i')[0].className = "fa fa-volume-off";
		    music.pause();
	    }
	}
	
	function showSignIn(){
		mask.show();
		$('.signInBox').show().addClass('bounceInDown');
	}
	
	function showSignUp(){
		mask.show();
		$('.signUpBox').show().addClass('bounceInDown');
	}
	
	function showUpload(){
		mask.show();
		$('.loadBox').show().addClass('bounceInDown');
	}
	
})(window);
