//botão menu
let menuBtn = document.getElementById('menu-btn')
let menuBtnState = false
//variável sidebar
let accordionVar = document.getElementsByClassName('nav')[0]
accordionVar.style.display = "none"



menuBtn.onclick = () => {
    if (menuBtnState) {
        menuBtnState = false
        accordionVar.style.display = "none"
    }
    else {
        menuBtnState = true
        accordionVar.style.display = "flex"
        accordionVar.classList.add('animate__animated', 'animate__fadeInDown')
    }
}



