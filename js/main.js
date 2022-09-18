const btn = document.querySelector('.clicker__btn')
const txt = document.querySelector('.clicker__btn-txt')
const timer = document.querySelector('.timer')


function runTimer() {
    const a = setInterval(function () {
        timer.textContent = +timer.textContent + 1

        if (+timer.textContent === 10) {
            clearInterval(a)
            btn.removeEventListener('click', CPS)
        }
    }, 1000)
}


btn.addEventListener('click', runTimer, { once: true })

function CPS() {
    txt.textContent = +txt.textContent + 1
}

btn.addEventListener('click', CPS)

