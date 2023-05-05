const {AIcarrierShip, AIbattleshipShip, AIcruiserShip, AIsubmarineShip, AIdestroyerShip } = require('./classObj');
let {AIGameBoard} = require('./classObj');
const {shipCriteria,shipInsertion} = require('./general');

const AIPlayer = {
    // DATA to be passed to gameboard class
    AIshipsArray : [AIcarrierShip, AIbattleshipShip, AIcruiserShip, AIsubmarineShip, AIdestroyerShip],
    AIshipsCoordsArray : [],
    getRandomNum : function(){
        return Math.floor(Math.random()*100);// 0<=x<1
    },
    shipAxisAI : function(){
        const value = AIPlayer.getRandomNum();
        return value <=50 ? AIPlayer.getShipAxisAI = 'Horizontal' : AIPlayer.getShipAxisAI ='Vertical';
    },
    GetCarrierCoord : function(){
        const carrierAxis = AIPlayer.shipAxisAI();
        let carrierCoord = AIPlayer.getRandomNum();
        carrierCoord = `AICoord${carrierCoord}`;
        let vertArray = undefined; // used when shipAxis = vertical
        // check if coord is correct
        console.log(carrierAxis);
        console.log(carrierCoord);
        if(shipCriteria.checkCriteria(carrierCoord,'Carrier',carrierAxis)===true){
            //carrierCoord = `AICoord${carrierCoord}`;
        }else{
            AIPlayer.GetCarrierCoord();
        }
        const targetPos = document.querySelector(`#${carrierCoord}`);
        const targetClass = targetPos.className;
        // insert ship in the AIgameboard
        shipInsertion.getInserted(vertArray, targetClass, targetPos, shipLength=5, shipAxis=carrierAxis, shipType='Carrier',targetId=carrierCoord);
    },
    getCarrierCoordGeneralized : function(shipType,shipLength){
        // this is the getCarrierCoord generalized for all ships
        let insertionTest = undefined;
        const shipAxis = AIPlayer.shipAxisAI();
        let shipCoord = AIPlayer.getRandomNum();
        shipCoord = `AICoord${shipCoord}`;
        let vertArray = undefined; // used when shipAxis = vertical
        // check if coord is correct
        console.log(shipAxis);
        console.log(shipCoord);
        if(shipCriteria.checkCriteria(shipCoord,shipType,shipAxis)===true){
            //carrierCoord = `AICoord${carrierCoord}`;
        }else{
            AIPlayer.getCarrierCoordGeneralized(shipType,shipLength);
        }
        const targetPos = document.querySelector(`#${shipCoord}`);
        const targetClass = targetPos.className;
        // insert ship in the AIgameboard
        insertionTest = shipInsertion.getInserted(vertArray, targetClass, targetPos, shipLength, shipAxis, shipType,shipCoord);
        if(insertionTest === false){
            AIPlayer.getCarrierCoordGeneralized(shipType,shipLength);
        }
    }
}

/* const AIPlayer = {
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
} */


module.exports = {AIPlayer};

// this is the Object that places the ships on the AIBoard
/* const placeAIShip = {
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
} */