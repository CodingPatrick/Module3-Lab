// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 


// https://www.cssscript.com/multi-step-form-bootstrap-enchanter/

var products = [{
		name: "Brocoli (🌿)",
		nut: true,
		lactose: true,
		organic: true,
		price: 2.65
	},
	{
		name: "Yogurt (🌿🥛)",
		nut: true,
		lactose: false,
		organic: true,
		price: 8.94
	},
	{
		name: "Peanuts (🌿🥜)",
		nut: false,
		lactose: true,
		organic: true,
		price: 9.43
	},
	{
		name: "Bread",
		nut: true,
		lactose: true,
		organic: false,
		price: 3.55
	},
	{
		name: "Oranges (🌿)",
		nut: true,
		lactose: true,
		organic: true,
		price: 3.94
	},
	{
		name: "Trail Mix (🥜)",
		nut: false,
		lactose: true,
		organic: false,
		price: 8.92
	},
	{
		name: "Bananas (🌿)",
		nut: true,
		lactose: true,
		organic: true,
		price: 4.73
	},
	{
		name: "Almond Granola (🌿🥜)",
		nut: false,
		lactose: true,
		organic: true,
		price: 11.25
	},
	{
		name: "Chocolate Milk (🥛)",
		nut: true,
		lactose: false,
		organic: false,
		price: 6.74
	},
	{
		name: "Salmon",
		nut: true,
		lactose: true,
		organic: false,
		price: 10.95
	},
	{
		name: "Frozen Pizza (🥛)",
		nut: true,
		lactose: false,
		organic: false,
		price: 12.51
	},
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];

	var Organic = document.getElementById("Organic");
	console.log(Organic.checked);
	var Lactose = document.getElementById("Lactose");
	console.log(Lactose.checked);
	var Nut = document.getElementById("Nut");
	console.log(Nut.checked);
	var None = document.getElementById("No");
	console.log(None.checked);

	for (let i = 0; i < prods.length; i += 1) {
		product_names.push(prods[i]);
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	if (None.checked) {
		product_names = product_names.filter(product_names => product_names)
	}
	if (Organic.checked) {
		product_names = product_names.filter(product_names => product_names.organic)
	}
	if (Lactose.checked) {
		product_names = product_names.filter(product_names => product_names.lactose)
	}
	if (Nut.checked) {
		product_names = product_names.filter(product_names => product_names.nut)
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

// https://www.w3schools.com/js/js_popup.asp
function payUp() {

	var Delivery = document.getElementById("Delivery");
	console.log(Delivery.checked);

	var Pickup = document.getElementById("Pick-up");
	console.log(Pickup.checked);

	if (Delivery.checked) {
		alert("Thank you for shopping with us! Your order will be delivered as soon as possible.");
	} else if (Pickup.checked) {
		alert("Thank you for shopping with us! Your order will be ready for pickup soon.");
	} else {
		alert("Please select a way to receive your products.");
	}
}

// https://stackoverflow.com/questions/2881307/can-i-have-two-javascript-onclick-events-in-one-element
function changeW() {
	document.getElementById("welcome").className = "tablinks";
	document.getElementById("diet").className = "tablinks active"
	document.getElementById("products").className = "tablinks";
	document.getElementById("checkout").className = "tablinks";
}

function changeD() {
	document.getElementById("welcome").className = "tablinks";
	document.getElementById("diet").className = "tablinks"
	document.getElementById("products").className = "tablinks active";
	document.getElementById("checkout").className = "tablinks";
}

function changeP() {
	document.getElementById("welcome").className = "tablinks";
	document.getElementById("diet").className = "tablinks"
	document.getElementById("products").className = "tablinks";
	document.getElementById("checkout").className = "tablinks active";
}