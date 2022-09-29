const display = document.querySelector(".display");

const valor = document.querySelectorAll(".valor");

const operador = document.querySelector(".operador");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multi = document.getElementById("multi");
const division = document.getElementById("division");
const igual = document.getElementById("igual");
const ac = document.getElementById("ac");

suma.addEventListener("click",()=>{
    operador.innerText="+"
})

resta.addEventListener("click",()=>{
    operador.innerText="-"
});

multi.addEventListener("click",()=>{
    operador.innerText="*"
});

division.addEventListener("click",()=>{
    operador.innerText="/"
});

ac.addEventListener("click",()=>{
    operador.innerText=""
    display.innerText=""
    valor[0].value = ""
    valor[1].value = ""
});

igual.addEventListener("click",()=>{

    if(operador.innerText==="+"){
        display.innerText = parseInt(valor[0].value) + parseInt(valor[1].value)
    }else if(operador.innerText==="-"){
        display.innerText = parseInt(valor[0].value) - parseInt(valor[1].value)
    }else if(operador.innerText==="*"){
        display.innerText = parseInt(valor[0].value) * parseInt(valor[1].value)
    }else if(operador.innerText==="/"){
        display.innerText = parseInt(valor[0].value) / parseInt(valor[1].value)
    }
})

// for(let i=0; i<10; i++){
//     document.getElementById("num"+i).addEventListener("click",presion)
// }

// function presion(e){
//     display.innerText = display.innerText + e.target.value
// }