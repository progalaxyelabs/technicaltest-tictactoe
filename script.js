window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByClassName('btn')

    for (let b of buttons) {
        b.addEventListener('click', onButtonClicked)
    }
})

var isMyTurn = true


function onButtonClicked(e) {
    const b = e.target

    if (isButtonMarkedX(b) || isButtonMarkedO(b)) {
        e.preventDefault()
        return
    }

    if (isGameOver()) {
        e.preventDefault()        
        return
    }

    if (isMyTurn) {
        markButtonX(b)
    } else {
        markButtonO(b)
    }

    isMyTurn = !isMyTurn

    setTimeout(() => {
        if (isGameOver(b)) {
            alert('Game over')
        }
    }, 1)
}

function isButtonMarkedX(b) {
    return b.classList.contains('mark-x')
}

function isButtonMarkedO(b) {
    return b.classList.contains('mark-o')
}

function markButtonX(b) {
    b.classList.add('mark-x')
    b.textContent = 'X'
}

function markButtonO(b) {
    b.classList.add('mark-o')
    b.textContent = 'O'
}

function isGameOver(b) {
    // todo
    return false
}