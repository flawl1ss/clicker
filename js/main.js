const btn = document.querySelector('.clicker__btn')
const txt = document.querySelector('.clicker__btn-txt')
function CPS () {
    txt.textContent = +txt.textContent + 1
}
btn.addEventListener('click', CPS)

