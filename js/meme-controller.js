'use strict'

let gElCurrMemeImg
let gElCanvas
let gCtx
let currSelectedLine

function renderMeme() {
    let memeImg = new Image()
    const meme = getMeme()
    memeImg.src = getSelectedImg()
    memeImg.onload = () => {
        gElCurrMemeImg = memeImg
        drawImg(memeImg)
        meme.lines.forEach(line => drawText(line, line.pos.x, line.pos.y));
    }
}

function drawImg(img) {
    if (!img) return
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(line, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = line.outlineColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.size}px` + ' ' + `${line.font}`
    gCtx.textAlign = line.align
    gCtx.textBaseline = line.baseline
    line.width = getTxtWidth(line.txt) // updates the data model due to the text
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onTextFill(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onFillColorChange(newColor) {
    setFontColor(newColor, gLine)
    renderMeme()
}

function onOutColorChange(newColor) {
    setOutlineColor(newColor, gLine)
    renderMeme()
}

function onFontSizeChange(changeFontStr) {
    setFontSize(changeFontStr)
    renderMeme()
}

function onSwitchLine() {
    debugger
    setSwitchedLine()
    renderMeme()
}


function getTxtWidth(txt) {
    return gCtx.measureText(txt).width
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

function onAddLine() {
    createNewLine()
    renderMeme()
}
