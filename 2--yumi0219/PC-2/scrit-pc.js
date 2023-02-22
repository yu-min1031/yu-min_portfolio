const mySwiper = new Swiper(".swiper", {
  effect: "fade",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
  },

  //ページネーション（スライダー下の丸いアイコン）を設定
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});
