const swiper = new Swiper(".mySwiper", {
	grabCursor: true,

	loop: true,

	speed: 900,

	effect: "creative",
	autoplay: {
		delay: 10000,
	},

	creativeEffect: {
		prev: {
			shadow: true,
			translate: [0, 0, -400],
		},

		next: {
			translate: ["100%", 0, 0],
		},
	},

	navigation: {
		prevEl: ".slider-prev",
		nextEl: ".slider-next",
	},
});
let headerTop = document.querySelector(".header-top");

const calcHeight = () => {
	document.body.style.paddingTop = headerTop.clientHeight + "px";
};

window.onresize = calcHeight;
window.onload = calcHeight;

// when scroll down hide navbar
let prevScroll = window.scrollY;

const toggleHeader = () => {
	let currentScroll = window.scrollY;
  if (currentScroll === 0) {
		headerTop.classList.remove("active");
  }
	else if (prevScroll > currentScroll) {
		headerTop.style.top = "0";
		headerTop.classList.add("active");
	} else {
		headerTop.style.top = `-${headerTop.clientHeight}px`;
	}

	prevScroll = currentScroll;
};

window.addEventListener("scroll", toggleHeader)
window.addEventListener("load", toggleHeader)


// // // slider
// let allSliderItems = document.querySelectorAll(".slider-items"),
// 	next = document.querySelector(".slider-next"),
// 	prev = document.querySelector(".slider-prev"),
// 	counter = 0;

// // next image when click on next button
// const nextSlider = function () {
// 	counter === allSliderItems.length - 1 ? (counter = 0) : counter++;
// 	allSliderItems.forEach((items) => items.classList.remove("active"));
// 	allSliderItems[counter].classList.add("active");
// };
// next.onclick = nextSlider;

// // previous image when click on previous button
// const prevSlider = function () {
// 	counter === 0 ? (counter = allSliderItems.length - 1) : counter--;
// 	allSliderItems.forEach((items) => items.classList.remove("active"));
// 	allSliderItems[counter].classList.add("active");
// };
// prev.onclick = prevSlider;
