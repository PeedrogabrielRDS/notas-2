document.querySelectorAll(".login-sign-togle").forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const loginSection = document.querySelector(".login-section")
        loginSection.classList.toggle("open")
        console.log("clicou")
    })
})