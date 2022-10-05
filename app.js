const display = document.querySelector(".display");

// const valor = document.querySelectorAll(".valor");

const operador = document.querySelector(".operador");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multi = document.getElementById("multi");
const division = document.getElementById("division");
const igual = document.getElementById("igual");
const ac = document.getElementById("ac");
const variable = document.getElementById("val1");

suma.addEventListener("click",()=>{
    operador.innerText="+"
    variable.value=display.textContent
    display.innerText=""
})
resta.addEventListener("click",()=>{
    operador.innerText="-"
    variable.value=display.textContent
    display.innerText=""
});
multi.addEventListener("click",()=>{
    operador.innerText="*"
    variable.value=display.textContent
    display.innerText=""
});
division.addEventListener("click",()=>{
    operador.innerText="/"
    variable.value=display.textContent
    display.innerText=""
});
ac.addEventListener("click",()=>{
    operador.innerText="+"
    display.innerText=""
});
igual.addEventListener("click",()=>{
    if(operador.innerText==="+"){
        display.innerText = parseInt(variable.value) + parseInt(display.textContent);
    }else if(operador.innerText==="-"){
        display.innerText = parseInt(variable.value) - parseInt(display.textContent);
    }else if(operador.innerText==="*"){
        display.innerText = parseInt(variable.value) * parseInt(display.textContent);
    }else if(operador.innerText==="/"){
        display.innerText = parseInt(variable.value) / parseInt(display.textContent);
    }
})

for(let i=0; i<10; i++){
    document.getElementById("num"+i).addEventListener("click",presion)
}
function presion(e){
    display.innerText = display.innerText + e.target.value
}

