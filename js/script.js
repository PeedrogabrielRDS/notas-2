const addNoteSection = document.querySelector(".add-note-section")

document.getElementById("add-note-button").addEventListener("click", () => {
    addNoteSection.style.display = "flex"
})

document.querySelectorAll("#cancel-note, #exit").forEach(fechar => {
    fechar.addEventListener("click", () => {
        addNoteSection.style.display = "none"
    })
})

const noteFix = document.getElementById("fix-note")
let estaFixado = false

noteFix.addEventListener("click", () => {
    if (!estaFixado) {
        noteFix.classList.replace("note-unfixed", "note-fixed")
        noteFix.textContent = "Fixado"
        estaFixado = true
    }else if (estaFixado) {
        noteFix.classList.replace("note-fixed", "note-unfixed")
        noteFix.textContent = "Fixar no topo"
        estaFixado = false
    }
})

// _________________________________________________________________________________________________


const userForm = document.getElementById("user-form")
const sendFormButton = document.getElementById("send")

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const dados = {
      nome: userForm.nome.value.trim(),
      telefone: userForm.telefone.value.trim(),
      mensagem: userForm.mensagem.value.trim()
  }

  sendFormButton.innerHTML = "Enviado informações..."

  const resposta = await fetch("http://localhost:3004/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
  })

  setTimeout(() => {
    sendFormButton.style.backgroundColor = "#3a3ae6"
    sendFormButton.disabled = true;
    sendFormButton.innerHTML = "Enviado com sucesso"
  }, 1000);
})