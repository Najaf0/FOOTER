const dark-mode = document.getElementById('dark-mode')
const light-mode = document.getElementById('light-mode')

darkmode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode')
    darkmode.classList.toggle('hide')
    lightmode.classList.remove('hide')
})
lightmode.addEventListener('click', () =>{
    document.body.classList.remove('dark-mode')
    lightmode.classList.toggle('hide')
    darkmode.classList.remove('hide')