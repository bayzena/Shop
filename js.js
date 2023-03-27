const url = 'http://localhost:3000/products?_page=1&_limit=10'

const getUrl = (page) => {
    if (!page) return null 
    return `http://localhost:3000/products?_page=${page}&limit=20`
}

const obertkaForDialogWindow = document.createElement('div')
obertkaForDialogWindow.classList.add('obertkaForDialog')
document.body.appendChild(obertkaForDialogWindow)

const dialog = document.createElement('div')
dialog.classList.add('dialog')
obertkaForDialogWindow.appendChild(dialog)

const CreateProdText = document.createElement('h1')
CreateProdText.classList.add('textCreateProd')
CreateProdText.innerHTML = 'Create Product'
dialog.appendChild(CreateProdText)

const inputForImg = document.createElement('input')
inputForImg.id = 'file'
inputForImg.setAttribute('type', 'file')
dialog.appendChild(inputForImg)

const imgProd = document.createElement('img')
imgProd.setAttribute('src', '')
imgProd.id = 'image'
dialog.appendChild(imgProd)

///////////////////////////////////////////////// add img for inputImg in create product
document.querySelector('#file').addEventListener('change', function() {
    imgProd.src = URL.createObjectURL(document.querySelector('#file').files[0])
    imgProd.style.display = 'flex'
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!!!!!!!!!!1

const inputForNameOfProd = document.createElement('input')
inputForNameOfProd.id = 'nameProd'
inputForNameOfProd.classList.add('input')
dialog.appendChild(inputForNameOfProd)

const inputForPrice = document.createElement('input')
inputForPrice.id = 'price'
inputForPrice.classList.add('input')
dialog.appendChild(inputForPrice)

const finish = document.createElement('button')
finish.innerHTML = 'finish'
finish.id = 'finishBtn'
finish.classList.add('btn', 'active')
dialog.appendChild(finish)

// DOM-header
const obertkaDiv = document.createElement('div')
obertkaDiv.classList.add('obertka')
document.body.appendChild(obertkaDiv)

const headerDiv = document.createElement('header')
headerDiv.id = 'header'
obertkaDiv.appendChild(headerDiv)

const appleWelcomeH2 = document.createElement('div')
appleWelcomeH2.classList.add('text')
appleWelcomeH2.id = 'appleText'
appleWelcomeH2.innerHTML = 'Apple'
headerDiv.appendChild(appleWelcomeH2)

const welcomeh3 = document.createElement('div')
welcomeh3.classList.add('specialFont')
welcomeh3.innerHTML = 'Welcome to the shop'
headerDiv.appendChild(welcomeh3)

// header---end

// body --start



const obertkaDivForMAin = document.createElement('div')
obertkaDivForMAin.classList.add('obertka')

const divOrangeWithoutPadding = document.createElement('div')
divOrangeWithoutPadding.id = 'orangeDiv'
document.body.appendChild(divOrangeWithoutPadding)
document.body.appendChild(obertkaDivForMAin)

const divObertka = document.createElement('div')
divObertka.classList.add('obertka')
divOrangeWithoutPadding.appendChild(divObertka)

const searchForm = document.createElement('div')
searchForm.classList.add('searchDiv')
divObertka.appendChild(searchForm)

const searchInput = document.createElement('input')
searchInput.setAttribute('placeholder', 'search')
searchInput.setAttribute('type', 'search')
searchInput.id = 'isearchInput'
searchForm.appendChild(searchInput)

document.querySelector('#isearchInput').oninput = function () {
    let val = this.value.trim()
    let products = document.querySelectorAll('.products div')
    // console.log(val, products)
    if (val != '') {
     products.forEach(function (elem) {
            let check = elem.innerText.search((RegExp(val,'gi'))) == -1;
            if (check) {
                console.log(elem.innerText, 'elem')
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
         products.forEach(function (elem) {
                elem.classList.remove('hide');
          });
    }
}

const divForFavAndTrash = document.createElement('div')
divForFavAndTrash.classList.add('display')
searchForm.appendChild(divForFavAndTrash)

const divForFavorite = document.createElement('div')
divForFavAndTrash.appendChild(divForFavorite)

const imgFavorite = document.createElement('img')
imgFavorite.classList.add('imgFavoriteTrash')
imgFavorite.setAttribute('src', 'https://img.icons8.com/windows/256/hearts.png')
divForFavorite.appendChild(imgFavorite)

const aHregForFav = document.createElement('a')
aHregForFav.innerHTML = 'favorite'
aHregForFav.setAttribute('href', 'http://127.0.0.1:5500/Shop/favoritepage/index.html')
divForFavorite.appendChild(aHregForFav)

const divForTrash = document.createElement('div')
divForFavAndTrash.appendChild(divForTrash)

const imgTrash = document.createElement('img')
imgTrash.classList.add('imgFavoriteTrash')
imgTrash.setAttribute('src', 'https://img.icons8.com/material-sharp/256/full-trash.png')
divForTrash.append(imgTrash)


const main = document.createElement('main')
main.id = 'main'
obertkaDivForMAin.appendChild(main)

const divForNewProdAndCreateProd = document.createElement('div')
divForNewProdAndCreateProd.classList.add('display')
main.appendChild(divForNewProdAndCreateProd)

const newProductsDiv = document.createElement('div')
newProductsDiv.id = 'newProd'
newProductsDiv.classList.add('textCreateProd')
newProductsDiv.innerHTML = 'New Products'
divForNewProdAndCreateProd.appendChild(newProductsDiv)


const createProdBtn = document.createElement('button')
createProdBtn.id = 'btnCreateProduct'
createProdBtn.classList.add('btn')
divForNewProdAndCreateProd.appendChild(createProdBtn)
    const aHrefForCreateProd = document.createElement('a')
    aHrefForCreateProd.innerHTML = 'Create Product'
    createProdBtn.appendChild(aHrefForCreateProd)

createProdBtn.addEventListener('click', () => {
    obertkaForDialogWindow.classList.remove('obertkaForDialog')
    obertkaForDialogWindow.classList.add('test')
})

divForNewProdAndCreateProd.appendChild(createProdBtn)



const navBarBtns = document.createElement('nav')
navBarBtns.id = 'navBar'
main.appendChild(navBarBtns)


const filterIconDiv = document.createElement('div')
filterIconDiv.id = 'filter'
navBarBtns.appendChild(filterIconDiv)

const imageForFilterDiv = document.createElement('img')
imageForFilterDiv.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/6488/6488674.png')
imageForFilterDiv.classList.add('filter')
filterIconDiv.appendChild(imageForFilterDiv)

const sortByAndIcon = document.createElement('div')
sortByAndIcon.classList.add('display', 'gapIconsort', 'sortBy')
navBarBtns.appendChild(sortByAndIcon)

const sortBy = document.createElement('label')
sortBy.setAttribute('for', 'sort')
sortBy.classList.add('someFilter')
sortBy.innerHTML = 'Sort By'
sortByAndIcon.appendChild(sortBy)

const selectTag = document.createElement('select')
selectTag.setAttribute('name', 'sort')
sortBy.appendChild(selectTag)

const optionByPrice = document.createElement('option')
optionByPrice.setAttribute('value', 'price')
optionByPrice.innerHTML = 'price increase'
selectTag.appendChild(optionByPrice)

const optionByData = document.createElement('option')
optionByData.setAttribute('value', 'data')
optionByData.innerHTML = 'data to increase'
selectTag.appendChild(optionByData)


async function sortByData() {
    try {
        const sortFetch = await fetch('http://localhost:3000/products?_sort=data')
        const json = await sortFetch.json()

        products(json)
    }
    catch (error) {
        console.log('error')
    }
}

optionByData.addEventListener('click', () => {
    sortByData()
    console.log('!!!')
})
//navbar end 

//products
const productsDiv = document.createElement('div')
productsDiv.classList.add('products')
main.appendChild(productsDiv)

// add products from database



let pageTest = 1;

async function getData (page1) {
    try {
        const data = await fetch(getUrl(page1) ?? url)
        const json = await data.json()
        currentPage = data.next

        products(json)
    } catch (error) {
        console.log('error')
    }
}

getData()

function products (product) {
    for (let i = 0; i <= product.length; i++) {
        addProduct(product[i].name, product[i].price, product[i].image, product[i].data)
    }
}


window.addEventListener('scroll', () => {
    const domPage = document.documentElement.getBoundingClientRect()
    if (domPage.bottom < document.documentElement.clientHeight + 150 && pageTest < 3) {
        pageTest++;
        console.log(pageTest, 'pageTest')
        getData(pageTest)
        // addProduct()
    }
})




function addProduct(name, price, image, data) {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productsDiv.appendChild(productDiv)
    
    const divForProdImage = document.createElement('div')
    divForProdImage.id = 'divForProdImage'
    productDiv.appendChild(divForProdImage)
    
    const prodImage = document.createElement('img')
    prodImage.setAttribute('src', `${image}`)
    prodImage.id = 'prodImage'
    divForProdImage.appendChild(prodImage)

    const spanNull = document.createElement('span')
    divForProdImage.appendChild(spanNull)

    productDiv.addEventListener('mouseover', () => {
        const icon = document.createElement('img')
        icon.classList.add('iconTrashAndChange')
        icon.setAttribute('src', 'https://img.icons8.com/material-sharp/256/full-trash.png')
        spanNull.append(icon)

        const iconChange = document.createElement('img')
        iconChange.classList.add('iconTrashAndChange')
        iconChange.setAttribute('src', 'https://img.icons8.com/plumpy/256/change.png')
        spanNull.appendChild(iconChange)

        // const divForFav = document.createElement('div')
        // spanNull.appendChild(divForFav)

        const iconFavorite = document.createElement('img')
        iconFavorite.classList.add('iconTrashAndChange')
        iconFavorite.setAttribute('src', 'https://img.icons8.com/windows/256/hearts.png')
        spanNull.appendChild(iconFavorite)


        iconFavorite.addEventListener('click', () => {
            iconFavorite.removeAttribute('src')
            iconFavorite.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/10160/10160717.png')
        })
    })

    productDiv.addEventListener('mouseout', () => {
        const findIcon = document.querySelector('.iconTrashAndChange')
        findIcon.remove()

        const findIconChange = document.querySelector('.iconTrashAndChange')
        findIconChange.remove()

        const findFavorite = document.querySelector('.iconTrashAndChange')
        findFavorite.remove()
    })


    const nameProduct = document.createElement('h3')
    nameProduct.classList.add('nameProd')
    nameProduct.innerHTML = `${name}`
    productDiv.appendChild(nameProduct)
    
    const priceProd = document.createElement('h2')
    priceProd.innerHTML = `${price}`
    priceProd.classList.add('price')
    productDiv.appendChild(priceProd)
    
    const dateCreate = document.createElement('h4')
    dateCreate.innerHTML = `${data}`
    dateCreate.classList.add('data')
    productDiv.appendChild(dateCreate)
}

// pagination

// create product!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1- создать html диалоговое окно 

// 2- через класс добавить текст внутри этого окна

// 3- нажимая на кнопку добавить диалоговое окно display none нужно обернуть в главный див. куда-то пихнуть дату хз как

// 4- создается продукт с датой обновления с помощью функции add product но и отправляется запрос post на ссылку бэка дабы сохранить данные

// class CreateProduct {
//     constructor() {
//         this.nameProduct = document.querySelector('#nameProd')
//         this.price = document.querySelector('#price')
//         this.productCard = document.querySelector('.product')
//         this.date = document.querySelector('.data')
//         this.products = document.querySelector('.products')
//         this.products.appendChild(this.productCard)
//     }

//     writeNameProd() {
//         if(this.nameProduct.value) {
//             const nameProduct = document.createElement('h3')
//             nameProduct.classList.add('nameProd')
//             nameProduct.innerHTML = this.nameProduct.value
//             this.productCard.appendChild(nameProduct)
//                 }
//         else {
//             alert('you can not create without name Product')
//         }
//     }

//     writePrice() {
//         if(this.price.value) {
//             const priceProd = document.createElement('h2')
//         priceProd.innerHTML = this.price.value
//         priceProd.classList.add('price')
//         this.productCard.appendChild(priceProd)
//         }
//         else {
//             alert('you can not create without price Product')
//         }
//     }

//     getData() {
//         const date = new Date()
//         const options = { day: 'numeric', month: 'short', year: 'numeric'}
//         const now = date.toLocaleString('en-US', options)
//         this.date.innerHTML = now
//         this.productCard.appendChild(dateCreate)
//     }
// }

// const finishFunction = document.querySelector('#finishBtn').addEventListener('click', () => {
//     let createdProducts = new CreateProduct()
//     createdProducts.writeNameProd()
//     createdProducts.writePrice()
//     createdProducts.getData()
//     document.querySelector('.products').appendChild(createdProducts)
//     return createdProducts
// })

// async function post (createProd) {
//     let getID = createProd.target.name

//     let getImage = createProd.target.img

//     let getPrice = createProd.target.price
//     try {
//         await fetch(`${url}/${getID}`, {
//             method: 'POST',
//         }
//         )

//         await fetch(`${url}/${getImage}`, {
//             method: 'POST',
//         })

//         await fetch(`${url}/${getPrice}`, {
//             method: 'POST',
//         })

//         finishFunction()
//         console.log('post done')
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// post()



// async function sendData() {
//     try {
//         const 
//     }       
// }



// }


/////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Create 


const postData = async (url = '', name = {}, ) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    })
    return response.json()
  }



finish.addEventListener('click', () => {
    postData('http://localhost:3000/products', { name: `${inputForNameOfProd.value}`, price : `${inputForPrice.value}`, image: `${inputForImg.value}` })
    .then((name) => {
        addProduct(name.name, name.price, name.image)
      console.log(name)
    })

})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// body--




// adaptive 
const obertkaForAdaptive = document.createElement('div')
obertkaForAdaptive.classList.add('obertkaAdaptive')
document.body.appendChild(obertkaForAdaptive)

const divForAppleIcon = document.createElement('div')
divForAppleIcon.classList.add('appleIconDiv')
obertkaForAdaptive.appendChild(divForAppleIcon)

const appleIconImg = document.createElement('img')
appleIconImg.id = 'appleIcon'
appleIconImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png')
divForAppleIcon.appendChild(appleIconImg)

const searchFormAdaptive = document.createElement('div')
searchFormAdaptive.id = 'searchDiv'
obertkaForAdaptive.appendChild(searchFormAdaptive)

const searchIconDiv = document.createElement('div')
searchIconDiv.id = 'searchIconDiv'
searchFormAdaptive.appendChild(searchIconDiv)

const searchIcon = document.createElement('img')
searchIcon.classList.add('search')
searchIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/10025/10025224.png')
searchIconDiv.appendChild(searchIcon)

const inputSearch = document.createElement('input')
inputSearch.id = 'inputSearch'
inputSearch.setAttribute('placeholder', 'search')
searchFormAdaptive.appendChild(inputSearch)

const obertkaAdaptiveSecond = document.createElement('div')
obertkaAdaptiveSecond.classList.add('obertkaAllAdaptive')
document.body.appendChild(obertkaAdaptiveSecond)

const obertkaSecond = document.createElement('div')
obertkaSecond.classList.add('contentStyle')
obertkaAdaptiveSecond.appendChild(obertkaSecond)

const newsAdaptive = document.createElement('h1')
newsAdaptive.id = 'newsTextAdaptive'
newsAdaptive.innerHTML = 'NEW'
newsAdaptive.classList.add('textAdaptive')
obertkaSecond.appendChild(newsAdaptive)

const productsNews = document.createElement('div')
productsNews.classList.add('productsAdaptive')
obertkaSecond.appendChild(productsNews)


/////////////// add in 'new' products 
function newProductAdaptive (image, name, price) {
    const productDiv = document.createElement('div')
    productDiv.classList.add('productAdaptive')
    productsNews.appendChild(productDiv)

    const divForProdImage = document.createElement('div')
    divForProdImage.id = 'divForProdImage'
    productDiv.appendChild(divForProdImage)

    const prodImage = document.createElement('img')
    prodImage.setAttribute('src', `${image}`)
    prodImage.id = 'prodImage'
    divForProdImage.appendChild(prodImage)

    const nameProduct = document.createElement('h3')
    nameProduct.classList.add('nameProd')
    nameProduct.innerHTML = `${name}`
    productDiv.appendChild(nameProduct)
    
    const priceProd = document.createElement('h2')
    priceProd.innerHTML = `${price}`
    priceProd.classList.add('price')
    productDiv.appendChild(priceProd)
}

async function getProductsForNew () {
    try {
        const data = await fetch(url)
        const json = await data.json()

        productsNewAdaptive(json)
    } catch (error) {
        console.log('error')
    }
}

getProductsForNew()

function productsNewAdaptive (product) {
    for (let i = 0; i < product.length; i++) {
        newProductAdaptive(product[i].image, product[i].name, product[i].price)
    }
}

///////////////////end

const obertkaThird = document.createElement('div')
obertkaThird.classList.add('obertkaAdaptive', 'paddingThirdContainer')
document.body.appendChild(obertkaThird)

const obertkaThirdAdaptive = document.createElement('div')
obertkaThirdAdaptive.classList.add('contentStyle', 'special')
obertkaThird.appendChild(obertkaThirdAdaptive)

const textInThirdContent = document.createElement('h2')
textInThirdContent.innerHTML = 'Get 3% Daily Cashback with Apple Card.'
obertkaThirdAdaptive.appendChild(textInThirdContent)

const textSecondInThirdContent = document.createElement('h4')
textSecondInThirdContent. innerHTML = 'And pay over time, interest‑free when you choose to check out with Apple Card Monthly Installments.†'
obertkaThirdAdaptive.appendChild(textSecondInThirdContent)

const divForICARD = document.createElement('div')
divForICARD.classList.add('icard')
obertkaThirdAdaptive.appendChild(divForICARD)

const icardImg = document.createElement('img')
icardImg.classList.add('icardImg')
icardImg.setAttribute('src', 'https://www.apple.com/v/home/ay/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg')
divForICARD.appendChild(icardImg)

const aHrefLearnMore = document.createElement('a')
aHrefLearnMore.setAttribute('href', '')
aHrefLearnMore.innerHTML = 'Learn more'
obertkaThirdAdaptive.appendChild(aHrefLearnMore)


const obertkaProducts = document.createElement('div')
obertkaProducts.classList.add('productsObertkaAdaptive')
document.body.appendChild(obertkaProducts)

const productsInAdaptive = document.createElement('div')
obertkaProducts.appendChild(productsInAdaptive)


async function getDataAdaptive() {
    try {
        const data = await fetch(url)
        const json = await data.json()
    
        productsAdaptive(json)
    }

    catch (error) {
        console.log(error)
    }
}
getDataAdaptive()

function productsAdaptive(product) {
    for(let i = 0; i < product.length; i++) {
        productAdaptive(product[i].image, product[i].name, product[i].price)
    }
}

function productAdaptive(image, name, price) {
    const productDiv = document.createElement('div')
    productDiv.classList.add('productAdaptive')
    productsInAdaptive.appendChild(productDiv)

    const divForProdImage = document.createElement('div')
    divForProdImage.id = 'divForProdImage'
    productDiv.appendChild(divForProdImage)

    const prodImage = document.createElement('img')
    prodImage.setAttribute('src', `${image}`)
    prodImage.id = 'prodImage'
    divForProdImage.appendChild(prodImage)

    const nameProduct = document.createElement('h3')
    nameProduct.classList.add('nameProd')
    nameProduct.innerHTML = `${name}`
    productDiv.appendChild(nameProduct)
    
    const priceProd = document.createElement('h2')
    priceProd.innerHTML = `${price}`
    priceProd.classList.add('price')
    productDiv.appendChild(priceProd)
}