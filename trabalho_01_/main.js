
function somar() {
    if(verificarEntradasVazias()){
        resposta.textContent = 'Erro: preencha os dois campos numéricos';
        resposta.classList.remove('certa');
        resposta.classList.add('errada');
    } else {
        atualizarResposta();
    }
 }
 
 
  
 function pegarNum1() {
    return num1.value;
 }
  
 function pegarNum2() {   
    return num2.value;
 }
  
 function verificarEntradasVazias() {
    if(pegarNum1() === '' || pegarNum2() === '') {
        return true;
        resposta.classList.remove('errada');
    resposta.classList.add('certa');
    } else {
       atualizarResposta();
    }
 }
  
 atualizarResposta = function() {
    let num1 = pegarNum1();
    let num2 = pegarNum2();
    let soma = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    resposta.classList.remove('errada');
    resposta.classList.add('certa');
 }


 let entradas = document.querySelectorAll('input');

 let resposta = document.querySelector('.resposta');
 
 let btnSomar = document.querySelector('#btnSomar');
 
 btnSomar.addEventListener('click', somar);
  
 
 let num1 = entradas[0];
 let num2 = entradas[1];





function subtrair() {
    if(verificarEntradasVazias()){
        resposta1.textContent = 'Erro: preencha os dois campos numéricos';
        resposta1.classList.remove('certa');
        resposta1.classList.add('errada');
    } else {
        atualizarResposta1();
    }
 }
 
 
  
 function pegarNum3() {
    return num3.value;
 }
  
 function pegarNum4() {   
    return num4.value;
 }
  
 function verificarEntradasVazias() {
    if(pegarNum3() === '' || pegarNum4() === '') {
        return true;
        resposta1.classList.remove('errada');
    resposta1.classList.add('certa');
    } else {
       atualizarResposta1();
    }
 }
  
 atualizarResposta1 = function() {
    let num3 = pegarNum3();
    let num4 = pegarNum4();
    let subtração = (parseFloat(num3) - parseFloat(num4)).toFixed(2);
    resposta1.textContent = num3 + ' - ' + num4 + ' = ' + subtração;
    resposta1.classList.remove('errada');
    resposta1.classList.add('certa');
 }

 
 let entrada = document.querySelectorAll('input');

let resposta1 = document.querySelector('.resposta');

let btnsubtrair = document.querySelector('#btnsubtrair');

btnsubtrair.addEventListener('click', subtrair);
 


let num3 = entrada[0];
let num4 = entrada[1];


function dividir() {
    if(verificarEntradasVazias()){
        resposta2.textContent = 'Erro: preencha os dois campos numéricos';
        resposta2.classList.remove('certa');
        resposta2.classList.add('errada');
    } else {
        atualizarResposta2();
    }
 }
 
 
  
 function pegarNum5() {
    return Num5.value;
 }
  
 function pegarNum6() {   
    return num6.value;
 }
  
 function verificarEntradasVazias() {
    if(pegarNum5() === '' || pegarNum6() === '') {
        return true;
        resposta2.classList.remove('errada');
    resposta2.classList.add('certa');
    } else {
       atualizarResposta2();
    }
 }
  
 atualizarResposta2 = function() {
    let num5 = pegarNum5();
    let num6 = pegarNum6();
    let divisão = (parseFloat(num5) / parseFloat(num6)).toFixed(2);
    resposta2.textContent = num5 + ' / ' + num6 + ' = ' + divisão;
    resposta2.classList.remove('errada');
    resposta2.classList.add('certa');
 }

 
 let entrada2 = document.querySelectorAll('input');

let resposta2 = document.querySelector('.resposta');

let btndividir = document.querySelector('#btndividir');

btndividir.addEventListener('click', dividir);
 


let Num5 = entrada2[0];
let num6 = entrada2[1];














function multiplicar() {
    if(verificarEntradasVazias()){
        resposta3.textContent = 'Erro: preencha os dois campos numéricos';
        resposta3.classList.remove('certa');
        resposta3.classList.add('errada');
    } else {
        atualizarResposta3();
    }
 }
 
 
  
 function pegarNum7() {
    return Num5.value;
 }
  
 function pegarNum8() {   
    return num6.value;
 }
  
 function verificarEntradasVazias() {
    if(pegarNum7() === '' || pegarNum8() === '') {
        return true;
        resposta3.classList.remove('errada');
    resposta3.classList.add('certa');
    } else {
       atualizarResposta3();
    }
 }
  
 atualizarResposta3 = function() {
    let num7 = pegarNum5();
    let num8 = pegarNum6();
    let multiplicar = (parseFloat(num7) * parseFloat(num8)).toFixed(2);
    resposta3.textContent = num7 + ' * ' + num8 + ' = ' + multiplicar;
    resposta3.classList.remove('errada');
    resposta3.classList.add('certa');
 }

 
 let entrada3 = document.querySelectorAll('input');

let resposta3 = document.querySelector('.resposta');

let btnmultiplicar = document.querySelector('#btnmultiplicar');

btnmultiplicar.addEventListener('click', multiplicar);
 


let num7 = entrada3[0];
let Num8 = entrada3[1];