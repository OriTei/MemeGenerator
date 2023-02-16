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
let gLine

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
        lines: [_createFirstLine(), _createSecondLine()]
    }
    return meme;
}

function _createFirstLine() {
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
    return line
}

function _createSecondLine() {
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
    return line
}

function createNewLine() {
    let line = {
        txt: 'THIS IS YOUR TEXT',
        font: 'Impact',
        size: 60,
        align: 'center',
        fillColor: 'white',
        baseLine: 'middle',
        outlineColor: 'black',
        isDrag: false,
        width: 0,
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2
        }
    }
    gMeme.lines.push(line)
    return line
}


function setLineTxt(txt) {
    gLine.txt = txt
}

function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
}

function setFontColor(newColor,line) {
    line.fillColor = newColor
}

function setFontSize(strSizeDirection) {
    gLine.size = getNewFontSize(strSizeDirection)
}

function getNewFontSize(strSizeDirection) {
    let lineIdx = gMeme.selectedLineIdx
    if (strSizeDirection === 'Increase') return gMeme.lines[lineIdx].size + SIZE_CHANGE;
    else return gMeme.lines[lineIdx].size - SIZE_CHANGE;
}

function getSelectedLineColor() {
    let lineIdx = gMeme.selectedLineIdx
    return gMeme.lines[lineIdx].color
}

function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    gLine = gMeme.lines[lineIdx]
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function moveLine(dx, dy) {
    gLine.pos.x = dx
    gLine.pos.y = dy
}

function setLineTextAlign(strAlign) {
    gLine.align = strAlign
}

function setOutlineColor(newColor,line) {
    line.outlineColor = newColor
}

function setSwitchedLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    setSelectedLine(gMeme.selectedLineIdx)
}