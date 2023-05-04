const {AIcarrierShip, AIbattleshipShip, AIcruiserShip, AIsubmarineShip, AIdestroyerShip } = require('./classObj');
let {AIGameBoard} = require('./classObj');

const AIPlayer = {
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


module.exports = {AIPlayer};

// this is the Object that places the ships on the AIBoard
const placeAIShip = {
    createAIGameboard : function(){
        // first determine if the 
        console.log('hello world');
        //testing AIPLAYER
        AIPlayer.shipAxisAI()
        if(AIPlayer.getShipAxisAI==='Horizontal'){
            AIPlayer.studyAIBoard(AIPlayer.CarrierH);
            console.log(AIPlayer.getShipAxisAI);
            console.log(AIPlayer.fixCoordinateAIShip());
        }else if(AIPlayer.getShipAxisAI==='Vertical'){
            AIPlayer.studyAIBoard(AIPlayer.CarrierV);
            console.log(AIPlayer.getShipAxisAI);
            console.log(AIPlayer.fixCoordinateAIShip());
        }
        //console.log(AIPlayer);
    },
    targetAIBoard : function(shipAxis,shipCoordinate,shipType){
        if(shipAxis==='Vertical'){
            
        }
    }
}