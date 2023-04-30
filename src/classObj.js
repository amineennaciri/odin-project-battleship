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
        if(this.coordinates.includes(receiveCoord)){
            this.ship.hit();
        }
    }
}
module.exports = { ship, gameboard, game1};
