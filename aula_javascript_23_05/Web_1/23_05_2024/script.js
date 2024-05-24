const botao =document.querySelector("button")

botao.addEventListener('click',function (){
    console.log("Celso Eduardo");
});

const form_celso= document.querySelector("#exemplo_form");
form_celso.addEventListener("submit",function(event){
    event.preventDefault();
})

let text_numero="2024";
let numero =parseFloat("texto_numero");
console.log(typeof(numero));

const tabela=document.querySelector("#tabela");
let linha_nova=tabela.insertRow();
let coluna = linha_nova.insertCell();
coluna.innerHTML="celso";
//celula_nova2.innerHTML="10";

const exemplo_1=document.querySelector("#exemplo_1");
exemplo_1.innerHTML="<p> texto - celso</p>";

const formulario2= document.querySelector("#exemplo_1");

formulario2.addEventListener("submit",function(){
    formulario2.preventDefault();
    document.querySelector("#exemplo_form2").reset ();

});