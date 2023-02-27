const turnOn = document.getElementById('turnOn'); // declarei todas as variáveis que eu iria precisar //
const turnOff = document.getElementById('turnOff'); //document.getElementById retorna as referencias do id utilizado //
const lampada = document.getElementById('lamp'); 

function lampOn () {
    lamp.src = './img/ligada.png'
}
function lampOff () {
    lamp.src = './img/desligada.png'
}
function lampOver () {
    lamp.src = './img/quebrada.png'
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mousedown', lampOver);
lamp.addEventListener('mouseleave', lampOff)