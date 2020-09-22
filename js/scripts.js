// var prevScrollpos = window.pageYOffset;
// window.addEventListener('scroll', () => function() {

//   var nav = document.querySelector('nav')
//   var currentScrollPos = window.pageYOffset;

//   if (prevScrollpos > currentScrollPos) {
//     nav.classList.remove('nav-hide');
//   } else {
//     nav.classList.add('nav-hide');
//   }
//   prevScrollpos = currentScrollPos;
// });
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav_list'),
  menuItem = document.querySelectorAll('.nav_item'),
  hamburger = document.querySelector('.nav_mobile_button');

  menu_func = () => {
    if (hamburger.classList.contains("nav_mobile_button_active") || menu.classList.contains("nav_list_active")){
      hamburger.classList.remove('nav_mobile_button_active');
      menu.classList.remove('nav_list_active');
      // document.body.classList.remove('frozen');
    } else {
      hamburger.classList.add('nav_mobile_button_active');
      menu.classList.add('nav_list_active');
      // document.body.classList.add('frozen');
    }
  } 

  hamburger.addEventListener('click', menu_func);
  menuItem.forEach(item => {item.addEventListener('click', menu_func)})
  
});


$(document).ready(function() {
  $('#navbar li a[href^="#"]').bind('click', function(e) {

      e.preventDefault(); // prevent hard jump, the default behavior

      var target = this.hash;

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, 'swing', function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });
  });
});


prevScrollTop = 0
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  var nav = $('#navbar');
  var nav_height = nav.height();

  if (prevScrollTop < scrollDistance){
    nav.addClass("nav-hide");
  } else if (prevScrollTop > scrollDistance){
    nav.removeClass("nav-hide");
  }
  prevScrollTop = scrollDistance
  // Assign active class to nav links while scolling
  $('section').each(function(i) {
      if ($(this).position().top-200 <= scrollDistance) {
          $('#navbar li a.active').removeClass('active');
          $('#navbar li a').eq(i).addClass('active');
      }
  });
}).scroll();