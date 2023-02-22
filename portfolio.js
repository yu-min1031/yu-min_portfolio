const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    effect: "cube",
    loop: true,
    speed:1000,
    autoplay: {
        delay: 3000,
    },
   // breakpoints:{
        //640: {
          //  effect: "fade",
        //},
    //},
  
    // If we need pagination
   // pagination: {
     // el: ".swiper-pagination",
    //},
  
    // Navigation arrows
    //navigation: {
      //nextEl: ".swiper-button-next",
      //prevEl: ".swiper-button-prev",
    //},
  
    // And if we need scrollbar
    //scrollbar: {
      //el: ".swiper-scrollbar",
      //hide: true,
    //},
  });
  console.log(swiper.activeIndex);
  //swiper.on("slideChangeTransitionEnd", function(){
  //  console.log(`現在のスライドは${swiper.activeIndex + 1}枚目です`);
  //if (swiper.activeIndex === 2){
  //  document.querySelector("button").style.display = "block";
  //} else{
  //  document.querySelector("button").style.display = "none";
  //}
  //});
  //swiper.on("click", function (){
  //  src="ifportfolio.html";
  //});