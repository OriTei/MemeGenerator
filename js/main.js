'use strict'

let gIsDragging
let gStartPos = { x: null, y: null }
let gLastPos = { x: null, y: null }
let gLastDiff
let startX
let startY
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('#meme-area')
    gCtx = gElCanvas.getContext('2d')
    gUserMemes = getSavedMemes()
    gMeme = createMeme()
    gImgs = getImgs()
    createFirstLine()
    createSecondLine()
    gCurrLine = gMeme.lines[gMeme.selectedLineIdx]
    renderMeme()
    renderGallery()
    displayGallery()
    hideEditor()
    displayElNav()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
//     gElCanvas.addEventListener('mousemove', onMove)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }


// function onDown(ev) {
//     // console.log('Down')
//     // Get the ev pos from mouse or touch
//     const pos = getEvPos(ev)
//     console.log('pos', pos)
//     // console.log('pos', pos)
//     if (!isLineClicked(pos)) return
//     console.log(isLineClicked(pos))
//     setLineDrag(true)
//     //Save the pos we start from
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }


// function onMove(ev) {
//     const { isDrag } = gCurrLine
//     if (!isDrag) return

//     const pos = getEvPos(ev)
//     // Calc the delta , the diff we moved
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveLine(dx, dy)
//     // Save the last pos , we remember where we`ve been and move accordingly
//     gStartPos = pos
//     renderCanvas()
//     // The canvas is render again after every move
// }

// function isLineClicked(clickedPos) {
//     const { pos } = gCurrLine
//     // Calc the distance between two dots
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     // console.log('distance', distance)
//     //If its smaller then the radius of the circle we are inside
//     setLineSize()
//     return distance <= gCurrLine.width
// }


// function onUp() {
//     gCurrLine.isDrag = false
//     gElCanvas.style.cursor = 'default'
// }

// function moveLine(dx, dy) {
//     gCurrLine.pos.x += dx
//     gCurrLine.pos.y += dy
// }

// function getEvPos(ev) {
//     // Gets the offset pos , the default pos
//     let pos = {
//         x: ev.offsetX,
//         y: ev.offsetY,
//     }
//     // Check if its a touch ev
//     if (TOUCH_EVS.includes(ev.type)) {
//         //soo we will not trigger the mouse ev
//         ev.preventDefault()
//         //Gets the first touch point
//         ev = ev.changedTouches[0]
//         //Calc the right pos according to the touch screen
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//         }
//     }
//     return pos
// }