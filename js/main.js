// $(function() {}); HTMLの読み込み完了後に実行する
// -> HTMLが全部読み込まれてからSwiperを作る
// -> JavaScriptは上から順に実行される。現在nain.jsはindex.htmlで<head>にある。ブラウザは、1. main.jsを読む　2. まだ<body>は未読　3. .swiper が存在しない　4. Swiper生成失敗になる。しかし、$(function() {});を使うと、1. HTML全部読む　2. bodyも完成　3. .swiper が存在　4. Swiper生成成功になる。
$(function(){

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $('.toggle_btn').on('click', function() {

    if ($('#header').hasClass('open')) {

      $('#header').removeClass('open');

    } else {

      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {

    $('#header').removeClass('open');
  });


  /*=================================================
  Swiper
  ===================================================*/
  const swiper = new Swiper(".swiper", {

    loop: true,

    speed: 1000,
    
    slidesPerView: 1,

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