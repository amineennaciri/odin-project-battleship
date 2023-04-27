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
        if(this.coordinates === receiveCoord){
            this.ship.hit();
        }
    }
}
module.exports = { ship, gameboard};
//export { ship, gameboard};
/* 
function Ship(length){
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
} */
/* 
function Gameboard(ship,coordinates){
    this.ship = ship;
    this.coordinates = coordinates;
    this.placeShip = function(){
        console.log(this.coordinates);
        console.log(this.ship);
    }
    this.receiveAttack = function(ship){
    }
} */