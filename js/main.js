'use strict'
function onInit() {
    gElCanvas = document.querySelector('#meme-area')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}
