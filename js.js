const clickMe = document.querySelector('.click-me')
const open = document.querySelector('.pop-open')
const close = document.querySelector('.pop-close')
const rapper = document.querySelector('.pop-rapper')

clickMe.addEventListener('click', () => {
    open.style.display = "block"
})

close.addEventListener('click', () => {
    open.style.display = "none"
})
