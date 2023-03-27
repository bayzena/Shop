const obertkaDiv = document.createElement('div')
obertkaDiv.classList.add('obertka')
document.body.appendChild(obertkaDiv)

const yourFavoriteProd = document.createElement('h1')
yourFavoriteProd.innerHTML = 'Your Favorite Products'
yourFavoriteProd.classList.add('text')
obertkaDiv.appendChild(yourFavoriteProd)


