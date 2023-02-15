'use strict'

let gElCurrMemeImg
let gElCanvas
let gCtx

function renderMeme() {
    let memeImg = new Image()
    memeImg.src = getSelectedImg()
    memeImg.onload = () => {
        gElCurrMemeImg = memeImg
        drawImg(memeImg)
        drawText(gMeme.lines[0].txt, gElCanvas.width/2, gElCanvas.height/10)
    }
}

function drawImg(img) {
    if (!img) return
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(txt, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = getSelectedLineColor()
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, x, y) 
    gCtx.strokeText(txt, x, y) 
}

function onTextFill(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onColorChange(newColor) {
    setFontColor(newColor)
    renderMeme()
}

function onFontSizeChange(changeFontStr) {
    debugger
    setFontSize(changeFontStr)
    renderMeme()
}