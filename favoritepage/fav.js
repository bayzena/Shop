const obertkaDiv = document.createElement("div");
obertkaDiv.classList.add("obertka");
document.body.appendChild(obertkaDiv);

const yourFavoriteProd = document.createElement("h1");
yourFavoriteProd.innerHTML = "Your Favorite Products";
yourFavoriteProd.classList.add("text");
obertkaDiv.appendChild(yourFavoriteProd);


const obertkaDivForMAin = document.createElement("div");
obertkaDivForMAin.classList.add("obertkaContent");
document.body.appendChild(obertkaDivForMAin);


const main = document.createElement("main");
main.id = "main";
obertkaDivForMAin.appendChild(main);

const productsDiv = document.createElement("div");
productsDiv.classList.add("products");
main.appendChild(productsDiv);


async function favCards() {
    try {
        const data = await fetch('http://localhost:3000/products?key=true')
        const dataJson = await data.json()

        products(dataJson)
    } catch (error) {
        console.error(error)
    }
}

favCards()

function products(product) {
	for (let i = 0; i < product.length; i++) {
		create(
			product[i].name,
			product[i].price,
			product[i].image,
			product[i].data,
			product[i].id,
		);
	}
}

function create(name, price, image, data, btnId) {
	const productDiv = document.createElement("div");
	productDiv.classList.add("product");
	productsDiv.appendChild(productDiv);

	const divForProdImage = document.createElement("div");
	divForProdImage.id = "divForProdImage";
	productDiv.appendChild(divForProdImage);

	const prodImage = document.createElement("img");
	prodImage.setAttribute("src", `${image}`);
	prodImage.id = "prodImage";
	divForProdImage.appendChild(prodImage);

	const spanNull = document.createElement("span");
	divForProdImage.appendChild(spanNull);

	const nameProduct = document.createElement("h3");
	nameProduct.classList.add("nameProd");
	nameProduct.innerHTML = `${name}`;
	productDiv.appendChild(nameProduct);

	const priceProd = document.createElement("h2");
	priceProd.innerHTML = `${price}$`;
	priceProd.classList.add("price");
	productDiv.appendChild(priceProd);

	const dateCreate = document.createElement("h4");
	dateCreate.innerHTML = `${data}`;
	dateCreate.classList.add("data");
	productDiv.appendChild(dateCreate);

	const btnFav = document.createElement("button");
	btnFav.classList.add("btnCircle");
	spanNull.appendChild(btnFav);

	const iconFavorite = document.createElement("img");
	iconFavorite.id = "fav";
	iconFavorite.classList.add("iconTrashAndChange");
	iconFavorite.setAttribute(
		"src",
		"https://img.icons8.com/windows/256/hearts.png",
	);
	btnFav.appendChild(iconFavorite);

	btnFav.addEventListener("click", () => {
		console.log("test");
		getElemFavImg = document.querySelector("#fav");
		getElemFavImg.setAttribute(
			"href",
			"https://w7.pngwing.com/pngs/495/349/png-transparent-computer-icons-button-symbol-google-play-play-angle-service-triangle.png",
		);
	});
}
