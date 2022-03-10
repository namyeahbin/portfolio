// 모바일 탭 메뉴
const toggleMenu = document.querySelector('#toggle_menu');
const Gnb = document.querySelector('.gnb');

toggleMenu.addEventListener('click',	() => {
	Gnb.classList.toggle('on');
})

// ajax json 데이터 받기
$.ajax({
	url: "js/forencos.json", // 파일 위치(경로)
	// setting
	dataType: "json",// 테이터 형식: xml, json, html, script...
	// success: function(){} 파일을 잘 불러왔으면
	success: function(data) {
		console.log(data);
		if(data.length > 0) {
			for(let el in data) {
				let tags = data[el].tags;
				let desc = data[el].description;
				let colors = data[el].colors;
				let price = data[el].price;
				let url = data[el].url;
				console.log(tags);
				console.log(desc);
				console.log(colors);
				console.log(price);
				$('.pd_desc p').eq(el).append(`<img src=${url} class="pd${el}"> <div>${tags}</div> <div>${desc}</div>  <div>${colors}</div>`);
			}
		}
	}  
});