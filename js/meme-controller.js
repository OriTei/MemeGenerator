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
        drawText(gMeme.lines[0].txt, gElCanvas.width / 2, gElCanvas.height / 10, 0)
        drawText(gMeme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height-100, 1)
    }
}

function drawImg(img) {
    if (!img) return
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(txt, x, y, lineIdx) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[lineIdx].color
    gCtx.font = `${gMeme.lines[lineIdx].size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function onTextFill(txt, lineIdx) {
    setSelectedLine(lineIdx)
    setLineTxt(txt, lineIdx)
    renderMeme()
}

function onColorChange(newColor, lineIdx) {
    setFontColor(newColor, lineIdx)
    renderMeme()
}

function onFontSizeChange(changeFontStr, lineIdx) {
    setFontSize(changeFontStr)
    renderMeme()
}

function onSwitchLine() {

}