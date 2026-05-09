document.addEventListener('DOMContentLoaded', () => {

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  const header = document.getElementById('header');
  const toggleBtn = document.querySelector('.toggle_btn');
  const mask = document.getElementById('mask');

  // メニュー開閉
  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  // 背景クリックで閉じる
  mask.addEventListener('click', () => {
    header.classList.remove('open');
  });


  /*=================================================
  Swiper
  ===================================================*/
  const swiper = new Swiper(".swiper", {

    loop: true,

    speed: 1000,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

});