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

const AIPlayer = {
        CarrierH : [0,1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25,30,31,32,33,34,35,40,41,42,43,44,45,50,51,52,53,54,55,60,61,62,63,64,65,70,71,72,73,74,75,80,81,82,83,84,85,90,91,92,93,94,95],
        BattleshipH : [0,1,2,3,4,5,6,10,11,12,13,14,15,16,20,21,22,23,24,25,26,30,31,32,33,34,35,36,40,41,42,43,44,45,46,50,51,52,53,54,55,56,60,61,62,63,64,65,66,70,71,72,73,74,75,76,80,81,82,83,84,85,86,90,91,92,93,94,95,96],
        CruiserH : [0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,50,51,52,53,54,55,56,57,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,80,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97],
        SubmarineH : [0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,50,51,52,53,54,55,56,57,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,80,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97],
        DestroyerH : [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98],
        CarrierV : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
        BattleshipV : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69],
        CruiserV : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],
        SubmarineV : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],
        DestroyerV : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89],
        getShipAxisAI : undefined,
        getCoordinateAIShip: undefined,
        getCoordinateNum : undefined,
    InitFunc: function(){
        AIPlayer.getShipAxisAI = undefined;
        AIPlayer.getCoordinateAIShip= undefined;
        AIPlayer.getCoordinateNum = undefined;
    },
    getRandomNum : function(){
        return Math.floor(Math.random()*100);// 0<=x<1
    },
    shipAxisAI : function(){
        const value = AIPlayer.getRandomNum();
        return value <=50 ? AIPlayer.getShipAxisAI = 'Horizontal' : AIPlayer.getShipAxisAI ='Vertical';
    },
    studyAIBoard : function(shipArray){
        // determine if the ship will be Vertical or Horizontal
        AIPlayer.getCoordinateNum = AIPlayer.getRandomNum();
        if(shipArray.includes(AIPlayer.getCoordinateNum)){
            return AIPlayer.getCoordinateAIShip = AIPlayer.getCoordinateNum;
        }else{
            AIPlayer.studyAIBoard(shipArray); // run again.
        }
    },
    fixCoordinateAIShip: function(){
        return AIPlayer.getCoordinateAIShip = `AICoord${AIPlayer.getCoordinateAIShip}`;
    }
}

const carrierShip = new ship(5);
const battleshipShip = new ship(4);
const cruiserShip = new ship(3);
const submarineShip = new ship(3);
const destroyerShip = new ship(2);
let playerGameBoard = undefined;

module.exports = { ship, gameboard, addEventList, carrierShip, battleshipShip,cruiserShip, submarineShip, destroyerShip, playerGameBoard, AIPlayer};

//import { ship, gameboard } from './classObj.js';
//const game1 = new ship(5);
//console.log(game1);