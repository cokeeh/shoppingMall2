$(function(){
		$("#menu > li").mouseenter(function(){
			$(this).children(".sub").stop().slideDown(function(){
				$(".sub > li").mouseenter(function(){
					$(this).find(".mini_sub").stop().fadeIn();
				}).mouseleave(function(){
					$(".mini_sub").stop().hide();
				});

			});
		}).mouseleave(function(){
			$(".sub").stop().slideUp();
		});
	});