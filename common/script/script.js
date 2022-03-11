// 스크롤을 내리면 사라지는 메뉴 스크롤을 올리면 생기는 메뉴
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.top').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.top').removeClass('nav-up').addClass('nav-down');
        }
    };
    
    lastScrollTop = st;
};

// 풀페이지 드로우 메뉴
$('.icon_btn').click(function() {
  $(this).toggleClass('active');
  $('.fullscreen').toggleClass('open');
 });

// skill 슬라이드 배너
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// work 비디오 mouserover
const projectAll = document.querySelectorAll('.video_wrap');
for (let item of projectAll) {
      item.addEventListener('mouseover', e => {// 마우스를 올렸을 때
        e.currentTarget.querySelector('video').play();
      });
      item.addEventListener('mouseleave', e => {// 마우스를 벗어났을 때
        e.currentTarget.querySelector('video').pause();
      });
    }

// work 페이드인 아웃
  const targets = document.querySelectorAll(".fade-left");
  const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      const container = entry.target;
      if (entry.isIntersecting) {
        container.classList.add("fade-in");
      } else {
        container.classList.remove("fade-in");
      }
    });
  }, options);

  targets.forEach((target) => {
    observer.observe(target);
  });

  const targets2 = document.querySelectorAll(".fade-right");
  const options2 = { root: null, threshold: 0.1, rootMargin: "-0px" };
  const observer2 = new IntersectionObserver(function (entries2, observer2) {
    entries2.forEach((entry2) => {
      const container = entry2.target;
      if (entry2.isIntersecting) {
        container.classList.add("fade-out");
      } else {
        container.classList.remove("fade-out");
      }
    });
  }, options2);

  targets2.forEach((target2) => {
    observer2.observe(target2);
  });

// Banner 흐르는 텍스트
Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".banner1"), function(index,item) {
      const wrapper = $("<div />", { class:"banner1"});
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);
  
      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while(max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }
      
      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 9000
        },
        loop: true,
        easing: 'linear'
      });
    });
  })
});

Zepto(function($) {
  $(window).on('load', function() {
    $.each($(".banner3"), function(index,item) {
      const wrapper = $("<div />", { class:"banner3"});
      const roller = $(item);
      roller.append(wrapper);
      const span = roller.find('span').first();
      wrapper.append(span);
  
      const span_width = span.get(0).offsetWidth;
      const max_width = roller.width() + span_width;
      let inner_width = span_width;

      while(max_width > inner_width) {
        wrapper.append(span.clone());
        inner_width += span_width;
      }
      
      anime({
        targets: wrapper.get(0),
        translateX: {
          value: '-=' + span_width + 'px',
          duration: 9000
        },
        loop: true,
        easing: 'linear',
        direction: 'reverse'
      });
    });
  })
});

// 퍼블리싱가이드 모달창
const open = () => {
  document.querySelector('.guide_line').classList.remove('hidden');
};
const close = () => {
  document.querySelector('.guide_line').classList.add('hidden');
};
document.querySelector('.open_btn').addEventListener('click', open);
document.querySelector('.close_btn').addEventListener('click', close);
document.querySelector('.guide_line').addEventListener('click',close);

// 위로 아이콘
addEventListener('scroll', () => {
  // consolg.log('스크롤');
  if(document.querySelector('html').scrollTop > 120 ) {
    document.querySelector('.box').style.display = "block";
  } else {
    document.querySelector('.box').style.display = "none";
  }
});

document.querySelector('.box').addEventListener('click', (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    // left:0
    behavior:'smooth'
  });
});