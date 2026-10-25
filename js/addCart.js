const products = [
	{
		id: 1,
		title: "Sweeper and Dustpan",
		description:
			"A practical sweeper and dustpan set for everyday home cleaning.",
		image: "images/product_01.png",
		hoverImage: "images/product_011.png",
		price: 41.99,
		discount: 0,
	},
	{
		id: 2,
		title: "Dustpan & Brush",
		description:
			"A convenient dustpan and brush set for quick and easy cleaning.",
		image: "images/product_08.png",
		hoverImage: "images/product_088.png",
		price: 56.0,
		oldPrice: 60.0,
		discount: 7,
	},
	{
		id: 3,
		title: "Premium Cookware",
		description: "Premium cookware designed for everyday cooking.",
		image: "images/product_03.png",
		hoverImage: "images/product_033.png",
		price: 99.0,
		discount: 0,
	},
	{
		id: 4,
		title: "Laundry Basket",
		description: "A practical laundry basket for keeping clothes organized.",
		image: "images/product_02.png",
		hoverImage: "images/product_022.png",
		price: 70.0,
		oldPrice: 85.0,
		discount: 18,
	},
	{
		id: 5,
		title: "Nonstick Cooking Pot",
		description:
			"A nonstick cooking pot for convenient everyday meal preparation.",
		image: "images/product_04.png",
		hoverImage: null,
		price: 40.0,
		discount: 0,
	},
	{
		id: 6,
		title: "Grill Pan",
		description: "A versatile grill pan for preparing grilled meals at home.",
		image: "images/product_07.png",
		hoverImage: "images/product_077.png",
		price: 20.0,
		oldPrice: 28.0,
		discount: 29,
	},
	{
		id: 7,
		title: "Espresso Coffee Machine",
		description: "An espresso coffee machine for preparing coffee at home.",
		image: "images/product_06.png",
		price: 300.0,
		discount: 0,
	},
	{
		id: 8,
		title: "Matte Black Tea Kettle",
		description: "A matte black tea kettle with a modern, elegant appearance.",
		image: "images/product_09.png",
		hoverImage: "images/product_099.png",
		price: 80.0,
		oldPrice: 92.0,
		discount: 13,
	},
	{
		id: 9,
		title: "Wooden Stool",
		description: "A simple wooden stool suitable for everyday home use.",
		image: "images/product_010.png",
		hoverImage: "images/product_0110.png",
		price: 56.0,
		discount: 0,
	},
	{
		id: 10,
		title: "Portable Blender Bottle",
		description: "A portable blender bottle for convenient drink preparation.",
		image: "images/product_11.png",
		hoverImage: "images/product_1100.png",
		price: 46.0,
		oldPrice: 55.0,
		discount: 16,
	},
];

let showProduct = document.querySelector(".show-product");
products.map((items) => {
	const { id, hoverImage, image, title, price, oldPrice, discount } = items;
	items.quantity = 1;
	let html = "";

	html = `
			<div class="col mb-3">
			<div class="product-inner position-relative overflow-hidden">
			<div class="position-relative overflow-hidden">
			<a href="">
			<img
			src=${image}
			alt="careem"
			class="img-fluid"
			loading="lazy"
			/>
			${
				hoverImage
					? `<img
						src=${hoverImage}
						alt="careem"
						class="img-fluid img-hover"
						loading="lazy"
					/>`
					: ""
			}
			
			</a>

			<ul class="cart-button">
			<li class="cart-btn cart-icons" onclick=addToCart(${id})>

			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="#fff">
									<g clip-path="url(#clip0_30_38)">
										<path d="M18.0233 5.02453C18.1983 5.02348 18.3708 5.06871 18.5231 5.15538C18.6754 5.24216 18.8026 5.36797 18.8914 5.51943C18.9801 5.67085 19.0276 5.84304 19.0291 6.01863C19.0307 6.19425 18.9863 6.36741 18.9003 6.52038L14.9416 13.5662C14.8551 13.7201 14.7293 13.8479 14.5776 13.9375C14.4257 14.0272 14.2527 14.0751 14.0764 14.0762L3.5688 14.138C3.32821 14.1394 3.09483 14.0537 2.91209 13.8967C2.72953 13.7397 2.60907 13.5221 2.57352 13.2835L1.53225 6.26701C1.51111 6.12495 1.52148 5.98008 1.561 5.84203C1.60061 5.70384 1.66867 5.57504 1.76192 5.46584C1.85516 5.35668 1.97123 5.26942 2.10124 5.20896C2.23121 5.14853 2.37248 5.11655 2.51573 5.1157L18.0233 5.02453ZM3.68083 7.11572L4.42418 12.1271L13.4846 12.0738L16.3115 7.04146L3.68083 7.11572Z"></path>
										<rect x="3" y="16" width="6" height="2" rx="1"></rect>
									</g>
									<path d="M2.51761 4.00871C3.34602 4.00384 4.01364 3.32833 4.00877 2.49992C4.0039 1.6715 3.32839 1.00389 2.49997 1.00876C1.67156 1.01363 1.00395 1.68914 1.00882 2.51755C1.01369 3.34597 1.6892 4.01358 2.51761 4.00871Z"></path>
									<defs>
										<clipPath id="clip0_30_38">
											<rect width="18" height="17.1785" fill="white" transform="translate(1 1.11182) rotate(-0.336853)"></rect>
										</clipPath>
									</defs>
								</svg>
			</li>

			<li class="cart-wisthlist">

			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="#fff" viewBox="0 0 20 20" xml:space="preserve" class="icon icon-heart">
									<path d="M14.001 4c.802 0 1.556.311 2.122.876.565.564.877 1.315.877 2.113s-.311 1.548-.87 2.105l-6.158 6.087L3.876 9.1A2.96 2.96 0 0 1 3 6.989c0-.798.312-1.548.878-2.112A2.98 2.98 0 0 1 6 4c.802 0 1.556.311 2.122.876.142.142.382.411.388.417l1.491 1.665 1.49-1.666c.006-.007.245-.275.387-.417A3 3 0 0 1 14.001 4m0-2a5 5 0 0 0-3.536 1.461c-.172.171-.465.499-.465.499s-.293-.328-.466-.5A5 5 0 0 0 6.001 2a5 5 0 0 0-3.536 1.461 4.98 4.98 0 0 0-.001 7.055L9.965 18l7.571-7.483a4.98 4.98 0 0 0 0-7.057A5 5 0 0 0 14.001 2"></path>
								</svg>
			</li>
			</ul>
			</div>
			<div class="product-desc text-center py-4">
			<a href=""><h3>${title}</h3></a>
			<div
			class="d-flex align-center justify-content-center mt-3"
			>
			<span class="price ${oldPrice ? `me-3` : ""}">£${price.toFixed(2)}</span>
			
			${oldPrice ? `<span class="discount">£${oldPrice.toFixed(2)}</span>` : ""}
			</div>
			</div>
			
			${discount ? `<span class="offer"><i class="zmdi zmdi-flash"></i> ${discount}%</span>` : ""}
			</div>
			</div>
	`;

	showProduct.innerHTML += html;
});

let cartInner = document.querySelector(".cart-inner");

let cartItems = JSON.parse(localStorage.getItem("product")) || [];
const renderCart = () => {
	let html = "";
	cartItems.map((items) => {
		const { id, image, title, quantity, price } = items;
		html += `
		<div class="cart-items d-flex">
		<a href="#">
		<img
		src="${image}"
		alt=""
		/>
		</a>
		<div class="cart-desc d-flex flex-column">
		<a href="">${title}</a>
		<span>
		<span class="quantity">${quantity}</span> x
		<span class="price">£${(quantity * price).toFixed(2)}</span>
		</span>
		</div>
		<span class="close" onclick=closeProduct(${id})>&times;</span>
		</div>
		`;
		cartInner.innerHTML = html;
	});
};

const addToCart = (id) => {
	let filterId = products.find((items) => items.id === id);
	let existingItem = cartItems.find((items) => items.id === filterId.id);
	existingItem ? (existingItem.quantity += 1) : cartItems.push(filterId);
	renderCart();
	localStorage.setItem("product", JSON.stringify(cartItems));
};

renderCart();



// const closeProduct = (id) => {
// 	const removeId = cartItems.filter(items=> items.id !== id);
// 	console.log(removeId);
	
// 	localStorage.setItem("product", JSON.stringify(removeId));
// 	let html = "";
// 	removeId.map((items) => {
// 		const { id, image, title, quantity, price } = items;
// 		html += `
// 		<div class="cart-items d-flex">
// 		<a href="#">
// 		<img
// 		src="${image}"
// 		alt=""
// 		/>
// 		</a>
// 		<div class="cart-desc d-flex flex-column">
// 		<a href="">${title}</a>
// 		<span>
// 		<span class="quantity">${quantity}</span> x
// 		<span class="price">£${(quantity * price).toFixed(2)}</span>
// 		</span>
// 		</div>
// 		<span class="close" onclick=closeProduct(${id})>&times;</span>
// 		</div>
// 		`;
// 	});
// 	cartInner.innerHTML = html;
	
// }