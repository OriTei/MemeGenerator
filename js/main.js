'use strict'

let gIsDrag
let gStartPos = { x: null, y: null }
let gLastPos = { x: null, y: null }
let gLastDiff
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
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    if (!isLineClicked(ev)) return
    isDragging = true
    gElCanvas.style.cursor = 'grabbing'
    const pos = getEvPos(ev)
    gStartPos = pos
}

function onMove(ev) {
    if (!isDragging) return
    let meme = getMeme()
    const pos = getEvPos(ev)
    // Calc the delta , the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy, currLine)
    // Save the last pos , we remember where we`ve been and move accordingly
    gStartPos = pos
    // The canvas is render again after every move
    renderCanvas()
}

function onUp() {
    gisDragging = false
    gElCanvas.style.cursor = 'default'
}

function isLineClicked(ev) {
    
}

