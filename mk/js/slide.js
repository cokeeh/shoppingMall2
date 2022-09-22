function prev(){

   $('.slide li:last').prependTo('.slide');

   $('.slide').css('margin-left',-1902);   

   $('.slide').stop().animate({marginLeft:0},800);

  }



  function next(){

   $('.slide').stop().animate({marginLeft:-1902}, function(){

      $('.slide li:first').appendTo('.slide');

      $('.slide').css({marginLeft:0});

   });

  }



  function slide(){

   $('.slide').stop().animate({marginLeft:-1902}, function(){

      $('.slide li:first').appendTo('.slide');

      $('.slide').css({marginLeft:0});

   });

  }



  setInterval(slide, 3000);



  $(function(){
  	$(".prev").click(function(){
  		prev();
  	});

  });



  $(function(){
  	$(".next").click(function(){
  		next();
  	});

  });