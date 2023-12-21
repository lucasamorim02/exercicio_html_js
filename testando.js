const number1 = document.getElementById('numero1'); 
const number2 = document.getElementById('numero2');
const resultado = document.querySelector('.resposta');
const botao = document.getElementById('botao');  

function numberValidate () {
    if(number2.value > number1.value){
        resultado.textContent = 'O numero 2 é maior'; 
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'O numero 2 é menor'; 
        resultado.style.color = 'red'; 
    }
    return false; 

}



