'use strict'
const SIZE_CHANGE = 5
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [
    { id: 1, url: 'img/1.png', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.png', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.png', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.png', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.png', keywords: ['funny', 'cat'] },

];
let gMeme
let gCurrLine


function getSelectedImg() {
    return gImgs[gMeme.selectedImgId].url
}

function setCurrMeme(newMemeId) {
    gMeme.selectedImgId = newMemeId
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function createMeme() {
    var meme = {
        selectedImgId: 1,
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
    gCurrLine = gMeme.lines[gMeme.lines.length-1]
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
    gCurrLine = gMeme.lines[gMeme.lines.length-1]
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
    gCurrLine = gMeme.lines[gMeme.lines.length-1]
    return line
}


function setLineTxt(txt) {
    if(!gCurrLine) return 
    gCurrLine.txt = txt
}

function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
}

function setFontColor(newColor) {
    if(!gCurrLine) return 
    gCurrLine.fillColor = newColor
}

function setFontSize(strSizeDirection) {
    if(!gCurrLine) return 
    gCurrLine.size = getNewFontSize(strSizeDirection)
}

function getNewFontSize(strSizeDirection) {
    if(!gCurrLine) return 
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

function setOutlineColor(newColor,line) {
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