// const swiper = new Swiper(".mySwiper", {
// 	grabCursor: true,

// 	loop: true,

// 	speed: 1200,

// 	effect: "cards",
// 	autoplay: {
// 		delay: 5000,
// 		pauseOnMouseEnter: false,
// 		disableOnInteraction: true,
// 	},
// 	pagination: {
// 		el: ".slider-dots",
// 		clickable: true,
// 		bulletClass: "dots",
// 		bulletActiveClass: "active",
// 	},
// 	navigation: {
// 		prevEl: ".slider-prev",
// 		nextEl: ".slider-next",
// 	},
// });

      var swiper = new Swiper('.mySwiper', {
        grabCursor: true,
        effect: 'creative',
					autoplay: {
		delay: 15000,
		pauseOnMouseEnter: false,
		disableOnInteraction: true,
	},
	loop: true,

	speed: 1200,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },		pagination: {
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
document.querySelectorAll('.sec-products .wishlist').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');

    const icon = item.querySelector('i');
    icon.classList.toggle('zmdi-favorite');
    icon.classList.toggle('zmdi-favorite-outline');
  });
});
