// 메인 배너 슬라이드
var MySwiper = new Swiper(".mySwiper", {
	slidesPerView: 1,// 화면에 이미지 1개씩
	loop: true,// 4->1로 자연스럽게 넘어갈 수 있게
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {// 자동 실행
		delay: 4000, // 4초 대기후 이동
	},
	observer: true,
	observeParents: true,
});

// product 슬라이드
var MySwiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		1280: {
			slidesPerView: 3,
		}
	},
	scrollbar: {
	el: ".swiper-scrollbar",
	clickable: true,
	},
	observer: true,
	observeParents: true,
});