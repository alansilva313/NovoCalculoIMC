

function calcular(){
   
    var p = document.querySelector('#p')
    var n1 = document.querySelector("#kg").value
var n2 = document.querySelector("#altura").value
var resultado = (n1 / (n2*n2)).toFixed(2)
localStorage.setItem('IMC', `${resultado}`)

if(resultado == 'NaN'){
    p.innerHTML = "Digite um valor para calcularmos se IMC"
   
}

else if(resultado < 18.5){
   
        p.innerHTML =  `Seu IMC está em ${resultado}, você está abaixo do peso ideal!`
        

   
}else if(resultado == 18.5 || resultado <= 29.9){
    setInterval(function fogo(){
    p.innerHTML = `Seu IMC está em ${resultado}, você está com o peso ideal. Parabéns`
    document.querySelector("#img").src = "fogo.gif"

}, 1000)
    
}else if(resultado == 25.0 || resultado <= 29.9){

    p.innerHTML = `Seu IMC está em ${resultado}, você está sobrepeso, procure um especialista!`
    
}else if(resultado == 30.0 || resultado <= 30.9){
    p.innerHTML = `Seu IMC está em ${resultado}, você está com um grau de obesidade, faça dieta, procure um especialista!`
    
}else {

    p.innerHTML = `Seu IMC está em ${resultado}, e você está em um estado de obesidade grave, procure um médico urgente.`
   
}
}

function menu(){
    document.querySelector(".nav").style.display = "flex"
}
