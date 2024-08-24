
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); 
const cript = document.querySelector(".crip"); 
const descript = document.querySelector(".descrip"); 
const copiar = document.querySelector(".copy"); 


let cripText; 


function criptografar() {
  if(input.value !="") {

     cripText = input.value.replace(/e/g, "enter"); //`A letra "e" é convertida para "enter"`
     cripText = cripText.replace(/i/g, "imes"); //`A letra "i" é convertida para "imes"`
     cripText = cripText.replace(/a/g, "ai"); // `A letra "a" é convertida para "ai"`
     cripText = cripText.replace(/o/g, "ober"); //`A letra "o" é convertida para "ober"`
     cripText = cripText.replace(/u/g, "ufat"); //`A letra "u" é convertida para "ufat"`

     result.textContent = cripText; 
     copiar.classList.add("showbutton"); 
     input.value = "";
     result.img1="none";
  }
}

function descriptografar() {
  if(input.value !="") {
    cripText = input.value.replace(/enter/g, "e"); //`A palavra "enter" é convertida para "e"`
    cripText = cripText.replace(/imes/g, "i"); //`A palavra "imes" é convertida para "i"`
    cripText = cripText.replace(/ai/g, "a"); //`A palavra "ai" é convertida para "a"`
    cripText = cripText.replace(/ober/g, "o"); //`A palavra "ober" é convertida para "o"`
    cripText = cripText.replace(/ufat/g, "u"); //`A palavra "ufat" é convertida para "u"`
    
    result.textContent = cripText;
    copiar.classList.add("showbutton"); 
    input.value = "";  

  }  
}

function copiarResultado(){
  navigator.clipboard.writeText(result.textContent)
  alert("Mensagem copiada!"); 
}


cript.addEventListener("click", criptografar); 

descript.addEventListener("click", descriptografar); 

copiar.addEventListener("click", copiarResultado); 
