const boton = document.querySelector('.boton');
const resultado = document.querySelector('.res');
const barra = document.querySelector('.barra');
const pixel = document.querySelector('.pixel');
let cantidad = 0;

let num= ()=>{
    return Math.floor(Math.random()*100)
}

let numRandom = num();

boton.addEventListener('click',()=>{
    boton.style.display = "none";
    resultado.style.color = "#fff";
    barra.style.display = "flex";
    pixel.style.height = "20px";
    let tiempo = setInterval(()=>{
        cantidad+=1;
        resultado.textContent = `${cantidad}%`;
        pixel.style.width = `${cantidad * 2}px`;
        if (cantidad == numRandom) {
            clearInterval(tiempo);
        }
    },40)
})
