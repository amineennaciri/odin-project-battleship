class ship{
    constructor(length,hitNumber=0){
        this.length = length;
        this.hitNumber = hitNumber;
    }
    hit (){
        this.hitNumber++;
        //return this.hitNumber;
    }
    isSunk(){
        if(this.length === this.hitNumber){
            return true;
        }else{
            return false;
        }
    }
}
class gameboard{
    constructor(ship,coordinates){
        this.ship = ship;
        this.coordinates = coordinates;
    }
    placeShip(){
        console.log(this.coordinates);
        console.log(this.ship);
    }
    receiveAttack(receiveCoord){
        for(let i=0;i<=this.coordinates.length-1;i++){
            if(this.coordinates[i].includes(receiveCoord)){
                this.ship[i].hit();
                document.getElementById(`${receiveCoord}`).style.backgroundColor = '#ef476f';//color for a hit
            }else{
                document.getElementById(`${receiveCoord}`).style.backgroundColor = '#579f9b';//color for a miss
            }
        }
        
    }
}

class addEventList{
    constructor(target,callback){
        this.target = target;
        this.callback = callback;
    }
    addEvent(){
        for(let i = 0; i<= this.target.length-1;i++){
            this.target[i].addEventListener('click',this.callback);
        }
    }
}
// Player 1 ships and gameboard
const carrierShip = new ship(5);
const battleshipShip = new ship(4);
const cruiserShip = new ship(3);
const submarineShip = new ship(3);
const destroyerShip = new ship(2);
let playerGameBoard = undefined;
// AI ships and gameboard
// ...

module.exports = { ship, gameboard, addEventList, carrierShip, battleshipShip,cruiserShip, submarineShip, destroyerShip, playerGameBoard};

// code snipet that will help me further down the line for computer AI playMaking
/*
            function getComputerChoice(){
            let randomNumber = Math.random()
            if(randomNumber<=0.33){
                return 'Rock'
            }else if(randomNumber<=0.66){
                return 'Paper'
            }else{
                return 'Scissors'
            }
        }
*/


//import { ship, gameboard } from './classObj.js';
//const game1 = new ship(5);
//console.log(game1);