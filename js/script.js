$(function(){

  $(".fadeIn").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });

  //ie対策ツイッター
  var userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
          $('.sns-btn').hide();
        }

  $('.sound_off').click(function(){
    document.getElementById("overSound1").muted = true;
    document.getElementById("overSound2").muted = true;
    document.getElementById("overSound3").muted = true;
    document.getElementById("overSound4").muted = true;
    $('.attention').fadeOut();
  });

  // $('.image1').addClass('sound1');
  $('.btn').click(function(){
    $('.hero_text').addClass('move');
  });

  $('.image1').mouseover(function(){
 
		document.getElementById("overSound1").currentTime = 0;
		document.getElementById("overSound1").play();
 
	  });

  	$('.image1').mouseleave(function(){
 
		document.getElementById("overSound1").currentTime = 0;
		document.getElementById("overSound1").pause();
 
	  });

  	$('.image2').mouseover(function(){
 
		document.getElementById("overSound2").currentTime = 0;
		document.getElementById("overSound2").play();
 
	  });

  	$('.image2').mouseleave(function(){
 
		document.getElementById("overSound2").currentTime = 0;
		document.getElementById("overSound2").pause();
 
	  });

  	$('.image3').mouseover(function(){
 
		document.getElementById("overSound3").currentTime = 0;
		document.getElementById("overSound3").play();
 
	  });

  	$('.image3').mouseleave(function(){
 
		document.getElementById("overSound3").currentTime = 0;
		document.getElementById("overSound3").pause();
 
	  });

  	$('.image4').mouseover(function(){
 
		document.getElementById("overSound4").currentTime = 0;
		document.getElementById("overSound4").play();
 
	  });

  	$('.image4').mouseleave(function(){
 
		document.getElementById("overSound4").currentTime = 0;
		document.getElementById("overSound4").pause();
 
	  });

   //scroll-btn 

  $('.top-btn').click(function() {
    $('html, body').animate({
      scrollTop:0
    }, 400);
  });

  $('.scroll-btn').click(function() {
    var id = $(this).attr('href');
    var position =$(id).offset().top -100;
    $('html, body').animate({
      scrollTop:position
    }, 300);
  });

  //modal

  $('.menu-btn').click(function(){
    $('.modal').animate({
      top: 0
  },600);
  });

  var wh = $(window).height(); 

  $('.close').click(function(){
    $('.modal').animate({
      top: -2 * wh
  },600);
    $('.attention').fadeOut();
  });

  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

  

});