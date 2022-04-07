$(document).ready(function() {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
    if(scroll > 520) {
      $('.humberger').fadeIn(500);
      $('.site-logo').fadeIn(500);
    } else {
      $('.humberger').fadeOut(500);
      $('.site-logo').fadeOut(500);
    }
    let gallery_position = $('.gallery').offset().top - $(window).height();
    let access_position = $('.access').offset().top - $(window).height();
    let contact_pposition = $('.contact').offset().top - $(window).height();
    if(scroll > access_position) {
      if(scroll < contact_pposition) {
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    } else {
        $('.bg').hide();
      }
    if(window.innerWidth > 900) {
      if(scroll > gallery_position) {
        if(scroll < access_position) {
          $('.s-b-contents').css ({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        } else {
          $('.s-b-contents').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
        } else {
          $('.s-b-contents').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      }
  });
  $('a[href="#"]').click(function() {
    $("html, body").animate({scrollTop: 0}, 600, "swing");
    return false;
  });
  $('a[href^="."]').click(function() {
    let href = $(this).attr("href");
    let target = $(href == "." || href == "" ? 'html': href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 600, "swing");
    return false;
  });
  
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("show");
    }
  });
  $('.humberger').on('click', function() {
    humberger();
  });
  function humberger() {
    $('.humberger').toggleClass('open');
    if($('.humberger').hasClass('open')) {
      $('nav').addClass('active');
    } else {
      $('nav').removeClass('active');
    }
  }
  function mv_scale(scroll) {
    if(window.innerWidth > 900) {
      $('.background-flower img').css({
        'width': 100/3 + scroll/10 + '%'
      });
    } else {
      $('.background-flower img').css({
        'width': 100 - scroll/10 + '%'
      });
    }
  }

});