 var container = document.querySelector('#container');
var movingSquare = document.querySelector('#square');
var speed = 40;
movingSquare.style.top = '0px';
movingSquare.style.left = '0px';


document.addEventListener('keydown', (event) => {
  var top = parseInt(movingSquare.style.top);
  var left = parseInt(movingSquare.style.left);

  if (event.key == 'ArrowRight') {
    if(left < 920) {
      left += speed; //left = left + speed
    }
  }
  if (event.key == 'ArrowLeft') {
    if(left > 0) {
      left -= speed; 
    }
  }
  if (event.key == 'ArrowDown') {
    if(top < 520) {
      top += speed; 
    }
  }
  if (event.key == 'ArrowUp') {
    if (top > 0) {
      top -= speed;
    }
  }

  movingSquare.style.left = left + 'px';
  movingSquare.style.top = top + 'px';
});



var time= document.querySelector('#scorekuro')
var kuro = document.querySelector('#square');
var clique =document.querySelector('#score');

square.addEventListener('click',tire);

var scoreChasseur = 0;
var score = 0;
var scorekuro = 0;


function tire() { 
scoreChasseur++;
clique.innerHTML = scoreChasseur;

}




var game = document.getElementById('container');






var b1 = document.getElementById('Start');
var b2 = document.getElementById('b1');
var b3 = document.getElementById('b2');
var Startgame;
var NewGame;

var dec = 0;
var sec = 0;
var min = 0;
var heu = 0;
p1.textContent = heu + ' : ' + min + ' :' + sec + ' . ' + dec;

Start.addEventListener('click');






b1.addEventListener('click', message);
b2.addEventListener('click', stopDelai);
b3.addEventListener('click', timer);
b4.addEventListener('click', stopTimer);

function message(){
    timeoutId = setTimeout(alert, 2000, 'Message d\'alerte après 2 secondes'); 
}
function stopDelai(){
    clearTimeout(timeoutId);
}

function timer(){
    intervalId = setInterval(function(){
        p1.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;
        dec += 1;
        if(dec >= 10){dec = 0; sec += 1;}
        if(sec >= 60){sec = 0; min += 1;}
        if(min >= 60){min = 0; heu += 1;}
    }, 100)
}
function stopTimer(){
    clearInterval(intervalId);
}


























































