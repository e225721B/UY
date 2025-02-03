// スライドショー
$(function(){
  $('.mainimg').slick({
    infinite: true,       // スライドをループさせる
    dots: true,           // 下部にドットナビゲーションを表示
    arrows: false,         // 前後の矢印を表示
    autoplay: true,       // 自動再生
    autoplaySpeed: 3000,  // 自動再生の速度
    // 必要に応じてその他オプションを追加
  });
});

