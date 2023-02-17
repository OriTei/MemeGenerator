'use strict'

let gElCurrMemeImg
let gElCanvas
let gCtx

function renderMeme(type = 'meme',memeIdx) {
    let memeImg = new Image()
    const meme = getMeme()
    memeImg.src = (type !== 'saved-meme') ? getSelectedImg() : getSavedMemeImg(memeIdx)
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
    setFontColor(newColor)
    renderMeme()
}

function onOutColorChange(newColor) {
    setOutlineColor(newColor, gCurrLine)
    renderMeme()
}

function onFontSizeChange(changeFontStr) {
    setFontSize(changeFontStr)
    renderMeme()
}

function onSwitchLine() {
    clearElTextInp()
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


function hideGallery() {
    let elGallery = document.querySelector('.gallery-container')
    elGallery.classList.add('hide')
}

function onTextAlign(strAlignPos) {
    setLineTextAlign(strAlignPos)
    renderMeme()
}

function onAddLine() {
    if (gMeme.lines.length === 0) createFirstLine()
    else if (gMeme.lines.length === 1) createSecondLine()
    else createNewLine()
    gMeme.selectedLineIdx++
    clearElTextInp()
    renderMeme()
}

function clearElTextInp() {
    let elTxtInp = document.querySelector('#text-input-1')
    elTxtInp.value = ''
}

function onClearText() {
    gMeme.lines.forEach(line => line.txt = '')
    clearElTextInp()
    renderMeme()
}

function onDeleteText() {
    if (!gMeme.lines.length) return
    gMeme.lines.pop()
    gMeme.selectedLineIdx--
    gCurrLine = gMeme.lines[gMeme.lines.length-1]
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = -1
    renderMeme()
}

function hideElNav() {
    document.querySelector('.navbar-container').classList.add('hide')    
    document.querySelector('.navbar-container').classList.remove('flex')    
}

function displayElNav() {
    document.querySelector('.navbar-container').classList.add('flex')    
    document.querySelector('.navbar-container').classList.remove('hide')
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    elLink.href = data // Put it on the link
    elLink.download = 'my-img' // Can change the name of the file
}

function onSaveMeme() {
    saveMeme()
    displaySavedMsg()
    renderSavedMemes()
}

function displaySavedMsg() {
    let elMsgModal = document.querySelector('.msg-modal')
    elMsgModal.classList.remove('hide')
    setTimeout(() => {
        elMsgModal.classList.add('hide')
    }, 3000);
}

function onSavedMemeClick(memeIdx) {
    setCurrSavedMeme(memeIdx)
    hideElNav()
    renderMeme('saved-meme',memeIdx)
    displayEditor()
    hideGallery()
    hideSavedMemes()
    
}

