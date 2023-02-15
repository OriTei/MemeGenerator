'use strict'

function renderGallery() {
    const imgs = getImgs()
    let strHTML = ''
    for (let i = 0; i < imgs.length; i++){
        strHTML += `<img src="${imgs[i].url}" onclick="onImgSelect(${i})">\n`
    }
    document.querySelector('.gallery-container').innerHTML = strHTML
}

function onImgSelect(imgIdx) {
    setImg(parseInt(imgIdx))
    setCurrMeme(imgIdx)
    renderMeme()
    displayEditor()
    hideGallery() 
}

