const liga = document.getElementById ('liga');
const desliga = document.getElementById ('desliga');
const lamp = document.getElementById ('lamp');

function isLampBroken (){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function ligaron (){
    if ( !isLampBroken () ){
    lamp.src = './imagens/lampadaacessa.png';
    }
}

function desligaron(){
    if ( !isLampBroken () ){
    lamp.src = './imagens/lampada_desligada.png';
}
}
function lampbroken(){
    lamp.src = './imagens/lampada_quebrada.jpg';
}

liga.addEventListener ('click', ligaron);
desliga.addEventListener('click', desligaron);
lamp.addEventListener ('mouseover',ligaron);
lamp.addEventListener ('mouseleave', desligaron);
lamp.addEventListener ('dblclick',lampbroken);



