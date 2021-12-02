const navigationButton = document.querySelector(".navigation-toggle")
const navigationBar = document.querySelector(".navigation")

navigationButton.addEventListener('click',()=>{

    navigationBar.classList.toggle('active')
    navigationButton.classList.toggle('close')
})