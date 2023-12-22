const number1 = document.getElementById('numero1'); 
const number2 = document.getElementById('numero2');
const resultado = document.getElementById('resposta');
const botao = document.getElementById('botao');
const form = document.getElementById('formulario'); 
const reset = document.getElementById('reset'); 

form.addEventListener('submit', numberValidate);

function numberValidate (event) {
    
    event.preventDefault();
    if(number2.value > number1.value){
        resultado.innerText = 'O numero 2 é maior'; 
        resultado.style.color = 'green';
    } else {
        resultado.innerText = 'O numero 2 é menor'; 
        resultado.style.color = 'red'; 
    }
}

function limpar () {
    number1.value = '';
    number2.value = '';
    resultado.textContent = '';
    resultado.style.color = ''; 
     
}



