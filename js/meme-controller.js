'use strict'

let gElCurrMemeImg
let gElCanvas
let gCtx
let currSelectedLine
const LINES_GAP = 10

function renderMeme() {
    let memeImg = new Image()
    memeImg.src = getSelectedImg()
    memeImg.onload = () => {
        gElCurrMemeImg = memeImg
        drawImg(memeImg)
        for (let i = 0; i < gMeme.lines.length; i++) {
            drawText(gMeme.lines[i].txt, gMeme.lines[i].posX, gMeme.lines[i].posY, i)
        }
    }
}

function drawImg(img) {
    if (!img) return
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(txt, x, y, lineIdx) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gMeme.lines[lineIdx].outlineColor
    gCtx.fillStyle = gMeme.lines[lineIdx].fillColor
    gCtx.font = `${gMeme.lines[lineIdx].size}px Impact`
    gCtx.textAlign = gMeme.lines[lineIdx].align
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

function onFontSizeChange(changeFontStr) {
    setFontSize(changeFontStr)
    renderMeme()
}

function onSwitchLine() {
    (gMeme.lines.length - 1 === gMeme.selectedLineIdx) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
    setSelectedLine(lineIdx)
}

//Check if the click is inside the circle 
function isLineClicked(clickedPos) {

}

function displayEditor() {
    let elEditor = document.querySelector('.editor-container')
    elEditor.classList.remove('hide')
}

function hideEditor() {
    let elEditor = document.querySelector('.editor-container')
    elEditor.classList.add('hide')
}

function displayGallery() {
    let elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hide')
}

function hideGallery() {
    let elGallery = document.querySelector('.gallery-container')
    elGallery.classList.add('hide')
}

function onTextAlign(strAlignPos) {
    setLineTextAlign(strAlignPos)
    renderMeme()
}