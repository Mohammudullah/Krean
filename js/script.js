$(document).ready(function(){

  //preloader
  window.addEventListener('load',function(){
    $('.preloader').delay(500).fadeOut('fast');
  });

  //venobox initializing
  $('.venobox').venobox(); 

  //Slick slider initializing in References section
  
  $('.slider-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.next',
    nextArrow: '.prev',
    mobileFirst: true,
  });

  // form effect and validation 
  $('input, textarea').focus(function(){
    $(this).parents('.mb-3').addClass('isFocused').removeClass('empty');
    $(this).removeClass('mismatch');
  });
  $('input, textarea').blur(function(){
    var inputvalue = $(this).val();
    if(inputvalue == "") {
      $(this).parents('.mb-3').removeClass('isFocused').addClass('empty');
    }

  });

  //nav bar section and back to top 
  $('.bttop svg').click(function(){
    $('html,body').animate({scrollTop: 0},500);
  });

  $(window).scroll(function(){
    var scrollLink = $(this).scrollTop();
    if(scrollLink > 300){
      $('.bttop').addClass('bttop2');
      $('.bttop2').css({'animation' : 'bttopanimation 1s 1 linear', 'bottom' : '30px'});
      $('.navbar').addClass('navbarafterscroll');
    }

    else{
      $('.bttop2').css({'animation': 'bttopanimationtwo 1s 1 linear', 'bottom': '-60px'});
      $('.navbar').removeClass('navbarafterscroll');
    }

  });

  // smooth scroll and scroll spy
  var scrollwhich = $('.sscroll');
  $(scrollwhich).click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top-20},800);
  });
  $(window).scroll(function(){
    var sctop = $(this).scrollTop();
    scrollwhich.each(function(){
      var scoff = $(this.hash).offset().top-21;
      if(sctop >= scoff) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

});


  //form validation 
  var fullname = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('textarea');

  function formvalidation(){
    if(fullname.value == ""){
      return false;
    }
    else if(email.value == ""){
      return false;
    }
    else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value)){
      email.classList.add("mismatch");
      return false;
    }
    else if(message.value == ""){
      return false;
    }
  }