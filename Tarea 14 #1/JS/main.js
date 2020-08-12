function ciruelas(){
    let X = Math.floor(Math.random()* (256 - 0) + 0);
    let Y =Math.floor(Math.random()* (256 - 0) + 0);
    let Z = Math.floor(Math.random()* (256 - 0) + 0);
    return  `rgb(${X}, ${Y}, ${Z})`;
}

function color(event){
    const parrafos=event.currentTarget;
    parrafos.style.color = ciruelas();
}

function colorblack(event){
    const parrafos = event.currentTarget;
    parrafos.style.color = 'black';
}

let parrafos = document.querySelectorAll('p');

for(let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener('mouseenter', color);
    parrafos[i].addEventListener('mouseleave', colorblack);
}