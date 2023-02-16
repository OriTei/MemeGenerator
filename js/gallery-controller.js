'use strict'

function renderGallery() {
    const imgs = getImgs()
    let strHTML = ''
    for (let i = 0; i < imgs.length; i++){
        strHTML += `<a href="#top"><img class="meme-img" src="${imgs[i].url}" onclick="onImgSelect(${i})">
        </img></a>\n`
    }
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function onImgSelect(imgIdx) {
    hideElNav()
    setImg(parseInt(imgIdx))
    setCurrMeme(imgIdx)
    renderMeme()
    displayEditor()
    hideGallery() 
}


function displayGallery() {
    let elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hide')
}

function toggleMenu() {
   
}