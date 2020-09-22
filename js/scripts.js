var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
    document.querySelector('.nav_mobile_button').classList.remove('nav_mobile_button_active');
    document.querySelector('.nav_list').classList.remove('nav_list_active');
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav_list'),
  menuItem = document.querySelectorAll('.nav_item'),
  hamburger = document.querySelector('.nav_mobile_button');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('nav_mobile_button_active');
      menu.classList.toggle('nav_list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
        setTimeout(function() {
          hamburger.classList.toggle('nav_mobile_button_active');
          menu.classList.toggle('nav_list_active');
        }, 50)
      })
  })
})