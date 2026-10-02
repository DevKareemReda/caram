const swiper = new Swiper(".mySwiper", {
	grabCursor: true,

	loop: true,

	speed: 1200,

	effect: "cube",
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: false,
		disableOnInteraction: true,
	},
	pagination: {
		el: ".slider-dots",
		clickable: true,
		bulletClass: "dots",
		bulletActiveClass: "active",
	},
	navigation: {
		prevEl: ".slider-prev",
		nextEl: ".slider-next",
	},
});




let headerTop = document.querySelector(".header-top");

// when scroll down hide navbar
let prevScroll = window.scrollY;

const toggleHeader = () => {
	let currentScroll = window.scrollY;
	if (currentScroll === 0) {
		headerTop.classList.remove("active");
	} else if (prevScroll > currentScroll) {
		headerTop.style.top = "0";
		headerTop.classList.add("active");
	} else {
		headerTop.style.top = `-${headerTop.clientHeight}px`;
	}

	prevScroll = currentScroll;
};

window.addEventListener("scroll", toggleHeader);
window.addEventListener("load", toggleHeader);
