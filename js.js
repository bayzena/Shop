const url = "http://localhost:3000/products?_page=1&_limit=10";

const getUrl = (page) => {
	if (!page) return null;
	return `http://localhost:3000/products?_page=${page}&limit=20`;
};

const obertkaForDialogWindow = document.createElement("div");
obertkaForDialogWindow.classList.add("obertkaForDialog");
document.body.appendChild(obertkaForDialogWindow);

const dialog = document.createElement("div");
dialog.classList.add("dialog");
obertkaForDialogWindow.appendChild(dialog);

const CreateProdText = document.createElement("h1");
CreateProdText.classList.add("textCreateProd");
CreateProdText.innerHTML = "Create Product";
dialog.appendChild(CreateProdText);

const inputForImg = document.createElement("input");
inputForImg.id = "file";
// inputForImg.setAttribute("type", "file");
dialog.appendChild(inputForImg);

const imgProd = document.createElement("img");
imgProd.setAttribute("src", "");
imgProd.id = "image";
dialog.appendChild(imgProd);

///////////////////////////////////////////////// add img for inputImg in change product
// document.querySelector("#file").addEventListener("change", function () {
// 	imgProd.src = URL.createObjectURL(document.querySelector("#file").files[0]);
// 	imgProd.style.display = "flex";
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!!!!!!!!!!1

const inputForNameOfProd = document.createElement("input");
inputForNameOfProd.setAttribute("placeholder", "name");
inputForNameOfProd.id = "nameProd";
inputForNameOfProd.classList.add("input");
dialog.appendChild(inputForNameOfProd);

const inputForPrice = document.createElement("input");
inputForPrice.id = "price";
inputForPrice.setAttribute("placeholder", "price");
inputForPrice.classList.add("input");
dialog.appendChild(inputForPrice);

const finish = document.createElement("button");
finish.innerHTML = "finish";
finish.id = "finishBtn";
finish.classList.add("btn");
dialog.appendChild(finish);
//////////////////////////////////////////////////////////////////  DIALOG MODAL END

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const navMain = document.createElement('nav')
navMain.classList.add('main')
container.appendChild(navMain)

const divAppleIcon = document.createElement('div')
divAppleIcon.classList.add('apple-icon')
navMain.appendChild(divAppleIcon)

const imgApple = document.createElement('img')
imgApple.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png')
imgApple.classList.add('apple-icon')
divAppleIcon.appendChild(imgApple)

navMain.innerHTML = ' <a href="https://www.apple.com/store">Store</a><a href="https://www.apple.com/mac/">Mac</a><a href="https://www.apple.com/ipad/">Ipad</a><a href="">Iphone</a><a href="">Watch</a><a href="">Airpods</a><a href="">TV&Home</a><a href="">Entertaiment</a><a href="">Accessories</a><a href="">Support</a>'

// const aStore = document.createElement('a')
// aStore.setAttribute('href', 'https://www.apple.com/store')
// aStore.classList.add('aMain')
// navMain.appendChild(aStore)

// const aMac = document.createElement('a')
// aMac.setAttribute('href', 'https://www.apple.com/mac/')
// aMac.classList.add('aMain')
// navMain.appendChild(aMac)

// const aIpad = document.createElement('a')
// aIpad.classList.add('aMain')
// aIpad.setAttribute('href', 'https://www.apple.com/ipad/')
// navMain.appendChild(aIpad)

// const aMains = document.createElement



// DOM-header/////////////////////////////////////////////////////////////////////////////////////////////////////////
const obertkaDiv = document.createElement("div");
obertkaDiv.classList.add("obertka");
document.body.appendChild(obertkaDiv);

const headerDiv = document.createElement("header");
headerDiv.id = "header";
obertkaDiv.appendChild(headerDiv);

const headerImgDiv = document.createElement("div");
headerImgDiv.classList.add("div");
headerDiv.appendChild(headerImgDiv);

const imgHeader = document.createElement("img");
imgHeader.setAttribute(
	"src",
	"https://www.apple.com/v/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg",
);
headerImgDiv.appendChild(imgHeader);

const textsHeader = document.createElement("div");
textsHeader.classList.add("display-colmn");
headerDiv.appendChild(textsHeader);

const appleWelcomeH2 = document.createElement("div");
appleWelcomeH2.classList.add("text");
appleWelcomeH2.id = "appleText";
appleWelcomeH2.innerHTML = "Apple";
textsHeader.appendChild(appleWelcomeH2);

const welcomeh3 = document.createElement("div");
welcomeh3.classList.add("specialFont");
welcomeh3.innerHTML = "Welcome to the shop";
textsHeader.appendChild(welcomeh3);

const btnPlay = document.createElement("button");
btnPlay.id = "playBtn";
textsHeader.appendChild(btnPlay);

btnPlay.addEventListener("click", () => {
	if (videoForVideo.paused) {
		videoForVideo.play();
		headerImgDiv.style.zIndex = "-1";
		divForVideo.style.display = "flex";
	} else {
		videoForVideo.pause();
		headerImgDiv.style.zIndex = "1";
		divForVideo.style.display = "none";
	}
});

const imgPlay = document.createElement("img");
imgPlay.setAttribute(
	"src",
	"https://cdn-icons-png.flaticon.com/512/5690/5690573.png",
);
btnPlay.appendChild(imgPlay);


const divForVideo = document.createElement("div");
divForVideo.classList.add("inherit");
headerDiv.appendChild(divForVideo);

const videoForVideo = document.createElement("video");
videoForVideo.innerHTML = "<video autoplay muted loop ></video>";
videoForVideo.id = "video";
divForVideo.appendChild(videoForVideo);

const sourceVideo = document.createElement("source");
sourceVideo.setAttribute(
	"src",
	"https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large.mp4",
);
sourceVideo.setAttribute("type", "video/mp4");
videoForVideo.appendChild(sourceVideo);


// header---end

// body --start

const obertkaDivForMAin = document.createElement("div");
obertkaDivForMAin.classList.add("obertkaContent");
document.body.appendChild(obertkaDivForMAin);

const divOrangeWithoutPadding = document.createElement("div");
divOrangeWithoutPadding.id = "orangeDiv";
document.body.appendChild(divOrangeWithoutPadding);

const divObertka = document.createElement("div");
divObertka.classList.add("obertkaContent");
divOrangeWithoutPadding.appendChild(divObertka);

const searchForm = document.createElement("div");
searchForm.classList.add("searchDiv");
divObertka.appendChild(searchForm);

const searchInput = document.createElement("input");
searchInput.setAttribute("placeholder", "search");
searchInput.setAttribute("type", "search");
searchInput.id = "isearchInput";
searchForm.appendChild(searchInput);

///////////////////////search//////////////////////////////////////////////////////////////////////////////

document.querySelector("#isearchInput").addEventListener("input", function () {
	let val = this.value.trim().toLowerCase();
	let products = document.querySelectorAll(".products div");
	if (val !== "") {
		products.forEach(function (elem) {
			let check = elem.textContent.toLowerCase().includes(val);
			if (check) {
				elem.classList.remove("hide");
			} else {
				elem.classList.add("hide");
			}
		});
	} else {
		products.forEach(function (elem) {
			elem.classList.remove("hide");
		});
	}
});
//////////////////////search end////////////////////////////////////////////////////////////////////////////////////////////

const divForFavAndTrash = document.createElement("div");
divForFavAndTrash.classList.add("display");
searchForm.appendChild(divForFavAndTrash);

const aHregForFav = document.createElement("a");
// aHregForFav.innerHTML = "favorite";
aHregForFav.setAttribute(
	"href",
	"http://127.0.0.1:5501/Shop/favoritepage/index.html",
);
aHregForFav.setAttribute("target", "_blank");
divForFavAndTrash.appendChild(aHregForFav);

const imgFavorite = document.createElement("img");
imgFavorite.classList.add("imgFavoriteTrash");
imgFavorite.setAttribute(
	"src",
	"https://img.icons8.com/ios-filled/256/like--v1.png",
);
aHregForFav.appendChild(imgFavorite);

const aTrash = document.createElement("a");
aTrash.setAttribute("href", "http://127.0.0.1:5501/Shop/trashPage/index.html");
aTrash.setAttribute("target", "_blank");
divForFavAndTrash.appendChild(aTrash);

const imgTrash = document.createElement("img");
imgTrash.classList.add("imgFavoriteTrash");
imgTrash.setAttribute(
	"src",
	"https://img.icons8.com/material-sharp/256/full-trash.png",
);
aTrash.append(imgTrash);

//////////////////////////////orange div end//////////////////////////////////////////////////////////////////////////////

////////////////////////main div start//////////////////////////////////////////////////////////////////////////////

const main = document.createElement("main");
main.id = "main";
obertkaDivForMAin.appendChild(main);

const divForNewProdAndCreateProd = document.createElement("div");
divForNewProdAndCreateProd.classList.add("display");
main.appendChild(divForNewProdAndCreateProd);

//products
const productsDiv = document.createElement("div");
productsDiv.classList.add("products");
main.appendChild(productsDiv);
//////////////////////////////////////////////////////////////////////////////

const newProductsDiv = document.createElement("div");
newProductsDiv.id = "newProd";
newProductsDiv.classList.add("textCreateProd");
newProductsDiv.innerHTML = "New Products";
divForNewProdAndCreateProd.appendChild(newProductsDiv);

const createProdBtn = document.createElement("button");
createProdBtn.id = "btnCreateProduct";
createProdBtn.classList.add("btn");
divForNewProdAndCreateProd.appendChild(createProdBtn);
const aHrefForCreateProd = document.createElement("a");
aHrefForCreateProd.innerHTML = "Create Product";
createProdBtn.appendChild(aHrefForCreateProd);

createProdBtn.addEventListener("click", () => {
	obertkaForDialogWindow.classList.remove("obertkaForDialog");
	obertkaForDialogWindow.classList.add("test");
});

divForNewProdAndCreateProd.appendChild(createProdBtn);

const navBarBtns = document.createElement("nav");
navBarBtns.id = "navBar";
main.appendChild(navBarBtns);

const filterIconDiv = document.createElement("div");
filterIconDiv.id = "filter";
navBarBtns.appendChild(filterIconDiv);

const imageForFilterDiv = document.createElement("img");
imageForFilterDiv.setAttribute(
	"src",
	"https://cdn-icons-png.flaticon.com/512/6488/6488674.png",
);
imageForFilterDiv.classList.add("filter");
filterIconDiv.appendChild(imageForFilterDiv);

const sortByText = document.createElement("h2");
sortByText.classList.add("sortText");
sortByText.innerHTML = "sort by";
navBarBtns.appendChild(sortByText);

const btnDataDown = document.createElement("button");
btnDataDown.classList.add("btn");
btnDataDown.innerHTML = "old ones first";
navBarBtns.appendChild(btnDataDown);

const btnDataUp = document.createElement("button");
btnDataUp.classList.add("btn");
btnDataUp.innerHTML = "first new";
navBarBtns.appendChild(btnDataUp);

const btnPriceDown = document.createElement("button");
btnPriceDown.classList.add("btn");
btnPriceDown.innerHTML = "decrement price";
navBarBtns.appendChild(btnPriceDown);

const btnPriceUp = document.createElement("button");
btnPriceUp.classList.add("btn");
btnPriceUp.innerHTML = "price increase";
navBarBtns.appendChild(btnPriceUp);

btnDataUp.addEventListener("click", () => {
	productsDiv.innerHTML = "";
	sortDataUp();
});

async function sortDataUp() {
	try {
		const data = await fetch(
			"http://localhost:3000/products?data_lte=23%30mar%202023y.",
		);
		const dataJson = data.json();

		products(dataJson);
	} catch (error) {
		console.error(error);
	}
}

btnDataDown.addEventListener("click", () => {
	productsDiv.innerHTML = "";
	sortByDataDown();
});

async function sortByDataDown() {
	try {
		const data = await fetch(
			"http://localhost:3000/products?data_gte=23%30mar%202023y.",
		);
		const dataJson = await data.json();

		products(dataJson);
	} catch (error) {
		console.error(error);
	}
}

btnPriceUp.addEventListener("click", () => {
	productsDiv.innerHTML = "";
	sortPriceUp();
});

async function sortPriceUp(a) {
	try {
		const data = await fetch(
			"http://localhost:3000/products?_sort=price&_order=asc",
		);

		const dataJson = await data.json();

		products(dataJson);
	} catch (error) {
		console.error(error);
	}
}

btnPriceDown.addEventListener("click", () => {
	productsDiv.innerHTML = "";
	sortPriceDown();
});

async function sortPriceDown() {
	try {
		const data = await fetch(
			"http://localhost:3000/products?_sort=price&_order=desc",
		);
		const dataJson = await data.json();

		products(dataJson);
	} catch (error) {
		console.log(error);
	}
}
//navbar end

// add products from database

let page = 1;

async function getData(page1) {
	try {
		const data = await fetch(getUrl(page1) ?? url);
		const json = await data.json();

		products(json);
	} catch (error) {
		console.log("error");
	}
}

getData();

function products(product) {
	for (let i = 0; i < product.length; i++) {
		addProduct(
			product[i].name,
			product[i].price,
			product[i].image,
			product[i].data,
			product[i].id,
		);
	}
}

///////////////////pagination
window.addEventListener("scroll", () => {
	const domPage = document.documentElement.getBoundingClientRect();
	if (
		domPage.bottom < document.documentElement.clientHeight + 150 &&
		page < 3
	) {
		page++;
		getData(page);
	}
});
///////////////////end pagination

/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!CHANGE INFORMATION IN PRODUCT

///////////////////////put
async function changeData(url = "", data = {}) {
	try {
		const res = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const json = await res.json();
	} catch (error) {
		console.error(error);
	}
}

////////////////end put

/////////////////end

///fav
async function favPut(id, key = {}) {
	try {
		const dataJs = await fetch(`http://localhost:3000/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(key),
		});
		const dbJson = await dataJs.json();
	} catch (error) {
		console.error(error);
	}
}

////end fav

function addProduct(name, price, image, data, btnId) {
	console.log("UO");
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

	const btnTrash = document.createElement("button");
	btnTrash.id = `${btnId}`;
	btnTrash.classList.add("btnCircle");
	spanNull.appendChild(btnTrash);

	const iconTrash = document.createElement("img");
	iconTrash.classList.add("iconTrashAndChange");
	iconTrash.setAttribute(
		"src",
		"https://img.icons8.com/material-sharp/256/full-trash.png",
	);
	btnTrash.append(iconTrash);

	const btnChange = document.createElement("button");
	btnChange.classList.add("btnCircle");
	spanNull.appendChild(btnChange);

	const iconChange = document.createElement("img");
	iconChange.classList.add("iconTrashAndChange");
	iconChange.setAttribute(
		"src",
		"https://img.icons8.com/plumpy/256/change.png",
	);
	btnChange.appendChild(iconChange);

	btnChange.addEventListener("click", () => {
		changeCard({ image, name, price, btnId });
		obertkaForDialogWindow.style.display = "none";
	});

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
		doTrue = true;
		console.log(btnId);
		favPut(btnId, {
			key: doTrue,
			name: name,
			price: price,
			image: image,
			data: data,
		});
		getElemFavImg = document.querySelector("#fav");
		getElemFavImg.setAttribute(
			"src",
			"https://cdn-icons-png.flaticon.com/512/10238/10238088.png",
		);
	});

	btnTrash.addEventListener("click", () => {
		deleteData(btnId);
		productDiv.style.display = "none";
	});
}

function changeCard({ image, name, price, btnId }) {
	const obertkaForDialogWindowOfProduct = document.createElement("div");
	obertkaForDialogWindowOfProduct.classList.add("obertkaForDialogChange");
	document.body.appendChild(obertkaForDialogWindowOfProduct);

	obertkaForDialogWindowOfProduct.style.display = "flex";

	const dialogWindowProduct = document.createElement("div");
	dialogWindowProduct.classList.add("dialog");
	dialogWindowProduct.id = "left";
	obertkaForDialogWindowOfProduct.appendChild(dialogWindowProduct);

	const divForChange = document.createElement("div");
	divForChange.classList.add("divChange");
	dialogWindowProduct.appendChild(divForChange);

	const ProductText = document.createElement("h1");
	ProductText.classList.add("textCreateProd", "textChangeProd");
	ProductText.innerHTML = "Change Product";
	divForChange.appendChild(ProductText);

	const divForimgAndInputs = document.createElement("div");
	divForimgAndInputs.classList.add("display", "gap");
	divForChange.appendChild(divForimgAndInputs);

	const divForImgChange = document.createElement("div");
	divForImgChange.classList.add("imgChangeDiv");
	divForimgAndInputs.appendChild(divForImgChange);

	const imgChange = document.createElement("img");
	imgChange.classList.add("imgChange");
	imgChange.setAttribute("src", `${image}`);
	divForImgChange.appendChild(imgChange);

	const divInputs = document.createElement("div");
	divInputs.classList.add("divInputs");

	divForimgAndInputs.appendChild(divInputs);

	const inputName = document.createElement("input");
	inputName.id = "nameInputChange";
	inputName.value = name;
	inputName.classList.add("input");
	divInputs.appendChild(inputName);

	const inputPrice = document.createElement("input");
	inputPrice.id = "priceChange";
	inputPrice.value = price;
	inputPrice.classList.add("input");
	divInputs.appendChild(inputPrice);

	const change = document.createElement("button");
	change.innerHTML = "change";
	change.id = "changeBtn";
	change.classList.add("btn");
	dialogWindowProduct.appendChild(change);

	change.addEventListener("click", () => {
		changeData(`http://localhost:3000/products/${btnId}`, {
			name: `${inputName.value}`,
			price: `${inputPrice.value}`,
			image: `${image}`,
		});
		obertkaForDialogWindowOfProduct.style.display = "none";
	});
}

/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
async function deleteData(id) {
	try {
		console.log(id, "up");
		const nofetch = await fetch(`http://localhost:3000/products/${id}`, {
			method: "DELETE",
		});
		const json = await nofetch.json();
	} catch (error) {
		console.log(error);
	}
}
/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!CREATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const date = new Date();
const options = { day: "numeric", month: "short", year: "numeric" };
const now = date.toLocaleString("en-US", options);
date.innerHTML = now;

const postData = async (url = "", data = {}) => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
};

/////////////////////////finish !!!!!!!!!button

finish.addEventListener("click", () => {
	postData("http://localhost:3000/products", {
		name: `${inputForNameOfProd.value}`,
		price: `${inputForPrice.value}`,
		image: `${inputForImg.value}`,
		data: `${date}`,
	}).then((data) => {
		addProduct(data.name, data.price, data.image);
		console.log(data);
	});
	if (inputForNameOfProd.value && inputForPrice && inputForImg) {
		obertkaForDialogWindow.style.display = "none";
	} else {
		alert("Fill all ");
	}
});
////////////finish btn end

/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!UPDATE

const update = async (url = "", data = {}) => {
	const response = await fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
};

const footer = document.createElement("footer");
footer.classList.add("obertkaContent", "margin-top", "display");
document.body.appendChild(footer);

const h4Footer = document.createElement("h4");
h4Footer.innerHTML = "Shop and Learn";
footer.appendChild(h4Footer);

const aHref = document.createElement("a");
aHref.innerHTML = "Apple Store";
aHref.setAttribute("target", "_blank");
aHref.setAttribute("href", "https://www.apple.com/retail/");
footer.appendChild(aHref);

const aHrefApple = document.createElement("a");
aHrefApple.setAttribute("target", "_blank");
aHrefApple.setAttribute("href", "https://www.apple.com/accessibility/");
aHrefApple.innerHTML = "Apple Value";
footer.appendChild(aHrefApple);

const ahrefAbout = document.createElement("a");
ahrefAbout.setAttribute("target", "_blank");
ahrefAbout.setAttribute("href", "https://www.apple.com/newsroom/");
ahrefAbout.innerHTML = "About Apple";
footer.appendChild(ahrefAbout);

// body!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!END

// adaptive
const obertkaForAdaptive = document.createElement("div");
obertkaForAdaptive.classList.add("obertkaAdaptive");
document.body.appendChild(obertkaForAdaptive);

const divForAppleIcon = document.createElement("div");
divForAppleIcon.classList.add("appleIconDiv");
obertkaForAdaptive.appendChild(divForAppleIcon);

const appleIconImg = document.createElement("img");
appleIconImg.id = "appleIcon";
appleIconImg.setAttribute(
	"src",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png",
);
divForAppleIcon.appendChild(appleIconImg);

const searchFormAdaptive = document.createElement("div");
searchFormAdaptive.id = "searchDiv";
obertkaForAdaptive.appendChild(searchFormAdaptive);

const searchIconDiv = document.createElement("div");
searchIconDiv.id = "searchIconDiv";
searchFormAdaptive.appendChild(searchIconDiv);

const searchIcon = document.createElement("img");
searchIcon.classList.add("search");
searchIcon.setAttribute(
	"src",
	"https://cdn-icons-png.flaticon.com/512/10025/10025224.png",
);
searchIconDiv.appendChild(searchIcon);

const inputSearch = document.createElement("input");
inputSearch.id = "inputSearch";
inputSearch.setAttribute("placeholder", "search");
searchFormAdaptive.appendChild(inputSearch);

const obertkaAdaptiveSecond = document.createElement("div");
obertkaAdaptiveSecond.classList.add("obertkaAllAdaptive");
document.body.appendChild(obertkaAdaptiveSecond);

const obertkaSecond = document.createElement("div");
obertkaSecond.classList.add("contentStyle");
obertkaAdaptiveSecond.appendChild(obertkaSecond);

const newsAdaptive = document.createElement("h1");
newsAdaptive.id = "newsTextAdaptive";
newsAdaptive.innerHTML = "NEW";
newsAdaptive.classList.add("textAdaptive");
obertkaSecond.appendChild(newsAdaptive);

const productsNews = document.createElement("div");
productsNews.classList.add("productsAdaptive");
obertkaSecond.appendChild(productsNews);

/////////////// add in 'new' products
function newProductAdaptive(image, name, price) {
	const productDiv = document.createElement("div");
	productDiv.classList.add("productAdaptive");
	productsNews.appendChild(productDiv);

	const divForProdImage = document.createElement("div");
	divForProdImage.id = "divForProdImage";
	productDiv.appendChild(divForProdImage);

	const prodImage = document.createElement("img");
	prodImage.setAttribute("src", `${image}`);
	prodImage.id = "prodImage";
	divForProdImage.appendChild(prodImage);

	const nameProduct = document.createElement("h3");
	nameProduct.classList.add("nameProd");
	nameProduct.innerHTML = `${name}`;
	productDiv.appendChild(nameProduct);

	const priceProd = document.createElement("h2");
	priceProd.innerHTML = `${price}`;
	priceProd.classList.add("price");
	productDiv.appendChild(priceProd);
}

async function getProductsForNew() {
	try {
		const data = await fetch(url);
		const json = await data.json();

		productsNewAdaptive(json);
	} catch (error) {
		console.log("error");
	}
}

getProductsForNew();

function productsNewAdaptive(product) {
	for (let i = 0; i < product.length; i++) {
		newProductAdaptive(product[i].image, product[i].name, product[i].price);
	}
}

///////////////////end

const obertkaThird = document.createElement("div");
obertkaThird.classList.add("obertkaAdaptive", "paddingThirdContainer");
document.body.appendChild(obertkaThird);

const obertkaThirdAdaptive = document.createElement("div");
obertkaThirdAdaptive.classList.add("contentStyle", "special");
obertkaThird.appendChild(obertkaThirdAdaptive);

const textInThirdContent = document.createElement("h2");
textInThirdContent.innerHTML = "Get 3% Daily Cashback with Apple Card.";
obertkaThirdAdaptive.appendChild(textInThirdContent);

const textSecondInThirdContent = document.createElement("h4");
textSecondInThirdContent.innerHTML =
	"And pay over time, interest‑free when you choose to check out with Apple Card Monthly Installments.†";
obertkaThirdAdaptive.appendChild(textSecondInThirdContent);

const divForICARD = document.createElement("div");
divForICARD.classList.add("icard");
obertkaThirdAdaptive.appendChild(divForICARD);

const icardImg = document.createElement("img");
icardImg.classList.add("icardImg");
icardImg.setAttribute(
	"src",
	"https://www.apple.com/v/home/ay/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg",
);
divForICARD.appendChild(icardImg);

const aHrefLearnMore = document.createElement("a");
aHrefLearnMore.setAttribute("href", "");
aHrefLearnMore.innerHTML = "Learn more";
obertkaThirdAdaptive.appendChild(aHrefLearnMore);

const obertkaProducts = document.createElement("div");
obertkaProducts.classList.add("productsObertkaAdaptive");
document.body.appendChild(obertkaProducts);

const productsInAdaptive = document.createElement("div");
obertkaProducts.appendChild(productsInAdaptive);

async function getDataAdaptive() {
	try {
		const data = await fetch(url);
		const json = await data.json();

		productsAdaptive(json);
	} catch (error) {
		console.log(error);
	}
}
getDataAdaptive();

function productsAdaptive(product) {
	for (let i = 0; i < product.length; i++) {
		productAdaptive(product[i].image, product[i].name, product[i].price);
	}
}

function productAdaptive(image, name, price) {
	const productDiv = document.createElement("div");
	productDiv.classList.add("productAdaptive");
	productsInAdaptive.appendChild(productDiv);

	const divForProdImage = document.createElement("div");
	divForProdImage.id = "divForProdImage";
	productDiv.appendChild(divForProdImage);

	const prodImage = document.createElement("img");
	prodImage.setAttribute("src", `${image}`);
	prodImage.id = "prodImage";
	divForProdImage.appendChild(prodImage);

	const nameProduct = document.createElement("h3");
	nameProduct.classList.add("nameProd");
	nameProduct.innerHTML = `${name}`;
	productDiv.appendChild(nameProduct);

	const priceProd = document.createElement("h2");
	priceProd.innerHTML = `${price}`;
	priceProd.classList.add("price");
	productDiv.appendChild(priceProd);
}
