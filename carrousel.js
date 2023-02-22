

const grande = document.querySelector('.grande');
const li_punto = document.querySelectorAll('.li_punto');

li_punto.forEach( (cadaPunto , i )=>{
    li_punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX(${operacion}%)`;

        li_punto.forEach( (cadaPunto , i)=>(
            li_punto[i].classList.remove('activo')
        ))
        li_punto[i].classList.add('activo')
    })
})