
const footer = document.getElementById("rodape")
//footer.style.color = "red"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "um novo Titulo"
//console.log(novoTitulo)
footer.appendChild(novoTitulo)

const header = document.getElementById("exemplo")

header.appendChild(novoTitulo)
//getElementById = puxa um elemento do html 

header.addEventListener("click", () => {
    alert("batata")
})
