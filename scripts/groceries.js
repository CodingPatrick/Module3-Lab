// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
		name: "Brocoli (🌿)",
		nut: true,
		lactose: true,
		organic: true,
		price: 2.65
	},
	{
		name: "Yogurt (🌿)",
		nut: true,
		lactose: false,
		organic: true,
		price: 8.94
	},
	{
		name: "Peanuts (🌿)",
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
		name: "Trail Mix",
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
		name: "Almond Granola (🌿)",
		nut: false,
		lactose: true,
		organic: true,
		price: 11.25
	},
	{
		name: "Chocolate Milk",
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
		name: "Frozen Pizza",
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

	for (let i = 0; i < prods.length; i += 1) {
		if ((restriction == "Nut") && (prods[i].nut == true)) {
			product_names.push(prods[i]);
		} 
		else if ((restriction == "Lactose") && (prods[i].lactose == true)) {
			product_names.push(prods[i]);
		} 
		else if ((restriction == "NutLactose") && (prods[i].lactose == true) && (prods[i].nut == true)) {
			product_names.push(prods[i]);
		} 
		else if (restriction == "None") {
			product_names.push(prods[i]);
		}
	}

	var Organic = document.getElementById("Organic");
	console.log(Organic.checked);

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

	if (Organic.checked) {
		return product_names.filter(product_names => product_names.organic)
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