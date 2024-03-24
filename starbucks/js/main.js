const searchEl = document.querySelector('.search');
const searchInputEL = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
  console.log('scroll');
    if(window.scrollY > 500) {
      // 배지 숨기기
     // badgeEl.style.display = 'none';
    //gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none'
    });
    }
      else{
        gsap.to(badgeEl,.6,{
          opacity: 1,
          display: 'block'
          
        });
      // badgeEl.style.display = 'block';
      // 배지 보이기
    }
      
    
},300));
// _.throttle(함수,시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  //gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity: 1
  });

});
// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자,
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
  });