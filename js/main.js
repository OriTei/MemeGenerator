'use strict'

let gIsDrag
let gStartPos = { x: null, y: null }
let gLastPos = { x: null, y: null }
let gLastDiff
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('#meme-area')
    gCtx = gElCanvas.getContext('2d')
    gLine = gMeme.lines[gMeme.selectedLineIdx]
    renderMeme()
    renderGallery()
    addListeners()
    displayGallery()
    hideEditor()
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
    console.log('Down')
    const pos = getEvPos(ev)
    gIsDrag = true
    document.body.style.cursor = 'grabbing'
    gLastPos = pos
}

function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onMove(ev) {
    const { isDrag } = getLine()
    if (!isDrag) return
    const pos = getEvPos(ev)
    const meme = getMeme()
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    gIsDrag = false
    document.body.style.cursor = 'auto'
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
}