class ship{
    constructor(length,hitNumber=0){
        this.length = length;
        this.hitNumber = hitNumber;
    }
    hit (){
        this.hitNumber++;
        return this.hitNumber;
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

const carrierShip = new ship(5);
const battleshipShip = new ship(4);
const cruiserShip = new ship(3);
const submarineShip = new ship(3);
const destroyerShip = new ship(2);
let playerGameBoard = undefined;

module.exports = { ship, gameboard, addEventList, carrierShip, battleshipShip,cruiserShip, submarineShip, destroyerShip, playerGameBoard};

//import { ship, gameboard } from './classObj.js';
//const game1 = new ship(5);
//console.log(game1);