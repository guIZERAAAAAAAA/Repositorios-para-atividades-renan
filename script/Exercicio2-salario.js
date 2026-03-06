function exercicios2 ()  {
    const hora = Number(prompt("digite uma hora: "))
    const valor = Number(prompt("digite um valor por hora: "))
    alert("resultado de "+ hora + " * " + valor + " = " + (hora * valor ))

}
const buttonexercicios2 = document.getElementById("Exercicio2-salario") 
buttonexercicios2.addEventListener('click', () => {exercicios2()})
// o carinha da escuta - addventlistner
//mostre quanto ele vai receber no final do mes 