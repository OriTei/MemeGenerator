'use strict'

function renderGallery() {
    const imgs = getImgs()
    let strHTML = ''
    for (let i = 0; i < imgs.length; i++) {
        strHTML += `<a href="#top"><img class="meme-img" src="${imgs[i].url}" onclick="onImgSelect(${i})">
        </img></a>\n`
    }
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function onShowMemes() {
    renderSavedMemes()
    displayMemesModal()
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
    hideEditor()
    displayElNav()
    let elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hide')
}

function renderSavedMemes() {
    const memes = loadFromStorage(MEMES_KEY)
    if(!memes) return
    let strHTML = '<div class="close-modal-btn"><button type="button" onclick="hideSavedMemes()">❌</button></div>'
    for (let i = 0; i < memes.length; i++) {
        strHTML +=
            `<a href="#top"><li class="saved-meme-li" onclick="onSavedMemeClick(${i})">
            <img src="${memes[i].dataUrl}">
         </li></a>`
    }
    document.querySelector('.saved-memes-container ul').innerHTML = strHTML
}

function hideSavedMemes() {
    let elBody = document.querySelector('body')
    let elSavedMemes = document.querySelector('.saved-memes-container')
    let elModal = document.querySelector('.saved-memes-modal')
    elBody.classList.remove('blur')
    elSavedMemes.classList.add('hide')
    elModal.classList.remove('open')
    
}

function displayMemesModal() {
    let elBody = document.querySelector('body')
    let elContainer = document.querySelector('.saved-memes-container')
    let elModal = document.querySelector('.saved-memes-modal')
    elBody.classList.add('blur')
    elContainer.classList.remove('hide')
    elModal.classList.add('open')
}

