const { ship, gameboard, addEventList, carrierShip,battleshipShip, cruiserShip, submarineShip, destroyerShip} = require('./classObj');
let {playerGameBoard} = require('./classObj');
const {shipCriteria,shipInsertion} = require('./general');
const {AIPlayer} = require('./playerAI');
// Game Dashboard Init
/* console.log(game1.score); */


const boardInit = {
    i: 0,//index used in the increment function.
    increment: function(){
        while(this.i<100){
            const targetPlayer = document.querySelector('.playerBoard');
            const targetAI = document.querySelector('.AIBoard');
            const btnPlayer = document.createElement('div');
            const btnAI = document.createElement('div');
            btnPlayer.setAttribute('class',`targetPlayer`);
            btnAI.setAttribute('class',`targetAI`);
            btnPlayer.setAttribute('id',`playerCoord${this.i}`);
            btnAI.setAttribute('id',`AICoord${this.i}`);
            targetPlayer.appendChild(btnPlayer);
            targetAI.appendChild(btnAI);
            //add event listener to targetPlayer
            document.querySelector(`#playerCoord${this.i}`).addEventListener('click',placeShip.targetPlayerEvent);
            boardInit.i++;
        }
    }
}


// headerObject
const headerObj = {
    headerBtn : document.querySelectorAll('.headBtn'),
    selectLength : 0, // used to determine which ship
    shipType : undefined, // carrier or else...
    shipAxis : 'Horizontal', // user for positioning
    headerBtnAddEvent : function(){
        new addEventList(this.headerBtn,this.headerBtnEvent).addEvent();
    },
    headerBtnEvent : function(e){
        //console.log(e.srcElement);
        //console.log(e.srcElement.innerText);
        const headBtnType = e.srcElement.innerText;
        if(headBtnType === 'Vertical'){
            e.srcElement.innerText = 'Horizontal';
            headerObj.shipAxis = 'Vertical';
        }else if(headBtnType === 'Carrier'){
            headerObj.selectLength = 5;
            headerObj.shipType = 'Carrier';
        }else if(headBtnType === 'Battleship'){
            headerObj.selectLength = 4;
            headerObj.shipType = 'Battleship';
        }else if(headBtnType === 'Cruiser'){
            headerObj.selectLength = 3;
            headerObj.shipType = 'Cruiser';
        }else if(headBtnType === 'Submarine'){
            headerObj.selectLength = 3;
            headerObj.shipType = 'Submarine';
        }else if(headBtnType === 'Destroyer'){
            headerObj.selectLength = 2;
            headerObj.shipType = 'Destroyer';
        }else if(headBtnType === 'Horizontal'){
            e.srcElement.innerText = 'Vertical';
            headerObj.shipAxis = 'Horizontal';
        }else if(headBtnType === 'Start the game'){
            //empty needs to be filled
            // below are just drills console.log
            if(true/*playerGameBoard!=undefined*/){
                //this condition is necessary to make sure that the player has placed all his ships on the gameboard
                /* console.log(placeShip.shipsArray);
                console.log(placeShip.shipsCoordsArray);
                console.log(playerGameBoard);
                playerGameBoard.receiveAttack('playerCoord41');
                playerGameBoard.receiveAttack('playerCoord40');
                console.log(playerGameBoard);
                console.log(playerGameBoard.ship[4].isSunk()); */
                console.log(playerGameBoard);

                //run
                //placeAIShip.createAIGameboard();

            }
        }
    }
}


// this is the Object that places the ships on the playerBoard
const placeShip = {
    coordArray : [],// this variable will be passed into the shipsCoordsArray
    shipsArray : [], // this is an array for ship types
    shipsCoordsArray : [], // this variable will be passed into the gameboard class 
    targetPlayerEvent : function(e){
        placeShip.coordArray = []; // init each time to avoid passing other ships coordinates.
        if(document.querySelectorAll(`.${headerObj.shipType}`).length!=0){
            //exit the function if a ship is already positioned, in order to avoid duplicates
            return;
        }
        const targetId = e.srcElement.id;
        // check if the coordinate chosen is correct
        if(!(shipCriteria.checkCriteria(targetId,headerObj.shipType,headerObj.shipAxis))){
            //exit the function if the coordinate is incorrect
            return;
        }
        let vertArray = undefined; // used when shipAxis = vertical
        const targetClass = e.srcElement.className;
        const targetPos = document.querySelector(`#${targetId}`);
        // calling the getInsterted function
        placeShip.coordArray = shipInsertion.getInserted(vertArray, targetClass, targetPos, headerObj.selectLength, headerObj.shipAxis, headerObj.shipType,targetId);
        // calling the createGameboard function
        placeShip.createGameboard(placeShip.coordArray,placeShip.shipsCoordsArray,placeShip.shipsArray,headerObj.shipType);
    },
    createGameboard : function(coordArray,shipsCoordsArray,shipsArray,shipType){
        shipsCoordsArray.push(coordArray);
        if(shipType==='Carrier'){
            shipsArray.push(carrierShip);
        }else if(shipType==='Battleship'){
            shipsArray.push(battleshipShip);    
        }else if(shipType==='Cruiser'){
            shipsArray.push(cruiserShip);
        }else if(shipType==='Submarine'){
            shipsArray.push(submarineShip);
        }else if(shipType==='Destroyer'){
            shipsArray.push(destroyerShip);
        }
        // create an object from gameboard class
        if(shipsArray.length === 5 && shipsCoordsArray.length === 5){
            playerGameBoard = new gameboard(shipsArray,shipsCoordsArray);
        }
    }
}

// REQUIRED EXECUTION
boardInit.increment(); // init the both player and AI dashboard
headerObj.headerBtnAddEvent(); // creates event listeners for the Header buttons.