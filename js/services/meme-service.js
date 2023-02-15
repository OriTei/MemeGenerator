'use strict'
const SIZE_CHANGE = 5
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [
    { id: 1, url: 'img/1.png', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.png', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.png', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.png', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.png', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.png', keywords: ['funny', 'cat'] },

];
let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'THIS IS YOUR TEXT',
            font: 'Impact',
            size: 60,
            align: 'center',
            fillColor: 'white',
            outlineColor: 'black',
            posX: 400,
            posY: 100,
            
        },
        {
            txt: 'THIS IS YOUR TEXT',
            size: 60,
            align: 'center',
            fillColor: 'white',
            outlineColor: 'black',
            posX: 400,
            posY: 550,
        },
    ]
}
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

function setLineTxt(txt, lineIdx) {
    gMeme.lines[lineIdx].txt = txt
}

function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
}

function setFontColor(newColor) {
    let lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].fillColor = newColor
}

function setFontSize(strSizeDirection) {
    let lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].size = getNewFontSize(strSizeDirection)
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
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function moveLine(dx, dy) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].pos.x = dx
    gMeme.lines[currLine].pos.x = dy
}

function setLineTextAlign(strAlign) {
    let lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].align = strAlign
}