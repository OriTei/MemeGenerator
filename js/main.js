'use strict'

let gIsDrag
let gStartPos = { x: null, y: null }
let gLastPos = { x: null, y: null }
let gLastDiff
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('#meme-area')
    gCtx = gElCanvas.getContext('2d')
    gImgs = getImgs()
    gMeme = createMeme()
    createFirstLine()
    createSecondLine()
    gCurrLine = gMeme.lines[gMeme.selectedLineIdx]
    renderMeme()
    renderGallery()
    displayGallery()
    hideEditor()
    displayElNav()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
    gElCanvas.addEventListener('mousemove', onMove)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

// function onDown(ev) {
//     document.body.style.cursor = 'grabbing'
//     const pos = getEvPos(ev)
//     gStartPos = pos
//     let meme = getMeme()
//     meme.selectedLineIdx = null
//     meme.lines.forEach((line, idx) => {
//         if (isLineClicked(line, pos)) {
//             meme.selectedLineIdx = idx
//             renderMeme(meme)
//             gIsDrag = true
//             line.isDrag = true
//         }
//     })
// }
// function getEvPos(ev) {
//     let pos = {
//         x: ev.offsetX,
//         y: ev.offsetY,
//     }
//     if (TOUCH_EVS.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetParent.offsetTop - ev.target.clientTop,
//         }
//     }
//     return pos
// }

// function onMove(ev) {
//     if (!gCurrLine.isDrag) return
//     const pos = getEvPos(ev)
//     // Calc the delta , the diff we moved
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveLine(dx, dy)
//     // Save the last pos , we remember where we`ve been and move accordingly
//     gStartPos = pos
//     // The canvas is render again after every move
//     renderMeme()
// }


// function onUp() {
//     console.log('up')
//     gIsDrag = false
//     gCurrLine.isDrag = false
//     document.body.style.cursor = 'auto'
// }


// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
// }

// function isLineClicked(line, pos) {
//     const width = getLineWidth(line)
//     const height = getLineHeight(line)
//     return  (pos.x > line.pos.x - width / 2 && pos.x < line.pos.x + width / 2) &&
//         (pos.y > line.pos.y - height / 2 && pos.y < line.pos.y + height / 2)
    
// }

// function getLineWidth(line) {
//     gCtx.font = `${line.size}px  ${line.font}`
//     const txtSize = gCtx.measureText(line.txt)
//     return txtSize.width
// }

// function getLineHeight(line) {
//     gCtx.font = `${line.size}px  ${line.font}`
//     const textSize = gCtx.measureText(line.txt)
//     const height = textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent
//     return height
// }