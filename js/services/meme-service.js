'use strict'
const SIZE_CHANGE = 5
const IMGS_NUM = 30
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs
let gMeme
let gCurrLine
let gUserMemes

function getImgs() {
    let imgs = []
    for (let i = 1; i <= IMGS_NUM; i++) {
        let currImg = { id: i, url: `img/${i}.png`, keywords: ['funny', 'cat'] }
        imgs.push(currImg)
    }
    return imgs
}

function getSavedMemes() {
    let savedMemes = loadFromStorage(MEMES_KEY)
    if (!savedMemes) savedMemes = []
    return savedMemes
}

function getSelectedImg() {
    return gImgs[gMeme.selectedImgIdx].url
}

function getSavedMemeImg(idx) {
    return gUserMemes[idx].dataUrl
}

function setCurrMeme(newMemeId) {
    gMeme.selectedImgIdx = newMemeId
}

function getMeme() {
    return gMeme
}

function createMeme() {
    var meme = {
        selectedImgIdx: 1,
        selectedLineIdx: 0,
        lines: []
    }
    return meme;
}

function createFirstLine() {
    let line = {
        txt: 'THIS IS YOUR TEXT',
        font: 'Impact',
        size: 60,
        align: 'center',
        fillColor: 'white',
        outlineColor: 'black',
        baseline: 'top',
        isDrag: false,
        width: 0,
        pos: {
            x: gElCanvas.width / 2,
            y: 0,
        }
    }
    gMeme.lines.push(line)
    gCurrLine = gMeme.lines[gMeme.lines.length - 1]
    return line
}

function createSecondLine() {
    let line = {
        txt: 'THIS IS YOUR TEXT',
        font: 'Impact',
        size: 60,
        align: 'center',
        fillColor: 'white',
        baseline: 'bottom',
        outlineColor: 'black',
        isDrag: false,
        width: 0,
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.height
        }
    }
    gMeme.lines.push(line)
    gCurrLine = gMeme.lines[gMeme.lines.length - 1]
    return line
}

function createNewLine() {
    let line = {
        txt: 'THIS IS YOUR TEXT',
        font: 'Impact',
        size: 60,
        align: 'center',
        fillColor: 'white',
        baseLine: 'center',
        outlineColor: 'black',
        isDrag: false,
        width: 0,
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2
        }
    }
    gMeme.lines.push(line)
    gCurrLine = gMeme.lines[gMeme.lines.length - 1]
    return line
}


function setLineTxt(txt) {
    if (!gCurrLine) return
    gCurrLine.txt = txt
}

function setImg(imgIdx) {
    gMeme.selectedImgIdx = imgIdx
}

function setFontColor(newColor) {
    if (!gCurrLine) return
    gCurrLine.fillColor = newColor
}

function setFontSize(strSizeDirection) {
    if (!gCurrLine) return
    gCurrLine.size = getNewFontSize(strSizeDirection)
}

function getNewFontSize(strSizeDirection) {
    if (!gCurrLine) return
    if (strSizeDirection === 'Increase') return gCurrLine.size + SIZE_CHANGE;
    else return gCurrLine.size - SIZE_CHANGE;
}

function getSelectedLineColor() {
    return gCurrLine.color
}

function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    gCurrLine = gMeme.lines[lineIdx]
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function moveLine(dx, dy) {
    gCurrLine.pos.x = dx
    gCurrLine.pos.y = dy
}

function setLineTextAlign(strAlign) {
    gCurrLine.align = strAlign
}

function setOutlineColor(newColor, line) {
    line.outlineColor = newColor
}

function setSwitchedLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    setSelectedLine(gMeme.selectedLineIdx)
}

function getLineBase() {
    if (gMeme.selectedLineIdx === 0) return 'top'
    else if (gMeme.selectedLineIdx === 1) return 'bottom'
    else return 'center'
}

function getUserMemes() {
    let memes = loadFromStorage(MEMES_KEY)
    if (!memes || !memes.length) {
        memes = []
        saveToStorage(MEMES_KEY, memes)
    }
    return memes;
}

function saveMeme() {
    let meme = { ...gMeme, dataUrl: gElCanvas.toDataURL() }
    gUserMemes.push(meme)
    saveToStorage(MEMES_KEY, gUserMemes)
}

function setCurrSavedMeme(memeIdx) {
    gMeme = { ...gUserMemes[memeIdx] }
}