/*function Ship(length){
    this.length = length;
    this.hitNumber = 0;
    this.hit = function(){
        this.hitNumber++;
        return this.hitNumber;
    }
    this.isSunk = function(){
        if(this.length === this.hitNumber){
            return true;
        }else{
            return false;
        }
    }
}

function Gameboard(ship,coordinates){
    this.ship = ship;
    this.placeShip = function(){
    }
    this.receiveAttack = function(ship){
    }
}

 

module.exports = { Ship, Gameboard}; */

///////////// create the divs using DOM
/* const targetX = document.querySelector('.playerBoard')
const btnY = document.createElement('div');
btnY.setAttribute('class','DOM');
targetX.appendChild(btnY);
targetX.appendChild(btnY); */
let i = 0;
while(i<100){
    const targetPlayer = document.querySelector('.playerBoard');
    const targetAI = document.querySelector('.AIBoard');
    const btnPlayer = document.createElement('div');
    const btnAI = document.createElement('div');
    btnPlayer.setAttribute('class',`targetPlayer`);
    btnAI.setAttribute('class',`targetAI`);
    btnPlayer.setAttribute('id',`playerCoord${i}`);
    btnAI.setAttribute('id',`AICoord${i}`);
    targetPlayer.appendChild(btnPlayer);
    targetAI.appendChild(btnAI);
    i++;
}

