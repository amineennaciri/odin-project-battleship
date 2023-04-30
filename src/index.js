const { ship, gameboard, addEventList, carrierShip,battleshipShip, cruiserShip, submarineShip, destroyerShip} = require('./classObj');
let {carrierBoard, battleshipBoard, cruiserBoard, submarineBoard, destroyerBoard} = require('./classObj');
// Game Dashboard Init

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
        }
    }
}


// this is the Object that places the ships on the playerBoard
const placeShip = {
    coordArray : [],// this variable will be passed into the gameboard class
    targetPlayerEvent : function(e){
        placeShip.coordArray = []; // init each time to avoid passing other ships coordinates.
        if(document.querySelectorAll(`.${headerObj.shipType}`).length!=0){
            //exit the function is a ship is already positioned, in order to avoid duplicates
            return;
        }
        const targetId = e.srcElement.id;
        let vertArray = undefined; // used when shipAxis = vertical
        let targetClass = e.srcElement.className;
        let targetPos = document.querySelector(`#${targetId}`);
        if(headerObj.selectLength!=0){
            //select the number-1 to the right
            for(let i = 0;i<=headerObj.selectLength-1;i++){
                if(headerObj.shipAxis === 'Horizontal'){
                    targetPos.style.backgroundColor = '#06D6A0';
                    targetPos.setAttribute('class',targetClass+' '+headerObj.shipType);
                    //console.log(targetPos.id);
                    placeShip.coordArray.push(targetPos.id);
                    targetPos = targetPos.nextSibling;
                }else if(headerObj.shipAxis === 'Vertical'){
                    //console.log('im here')
                    vertArray = `${e.srcElement.id}`.split('d');
                    //console.log(vertArray);
                    vertArray[1] = +vertArray[1] +(i*10);
                    vertArray[0] += 'd';
                    vertArray = vertArray.join('');
                    //console.log(vertArray);
                    document.querySelector(`#${vertArray}`).style.backgroundColor = '#06D6A0';
                    document.querySelector(`#${vertArray}`).setAttribute('class',targetClass+' '+headerObj.shipType);
                    //console.log(document.querySelector(`#${vertArray}`).id);
                    placeShip.coordArray.push(document.querySelector(`#${vertArray}`).id);
                }
            }
        }
        placeShip.createGameboard();
    },
    createGameboard : function(){
        if(headerObj.selectLength === 5){
            carrierBoard = new gameboard(carrierShip,this.coordArray);
            console.log(carrierBoard);
        }else if(headerObj.selectLength === 4){
            battleshipBoard = new gameboard(battleshipShip,this.coordArray);
            console.log(battleshipBoard);
        }else if(headerObj.selectLength === 3){
            cruiserBoard = new gameboard(cruiserShip,this.coordArray);
            console.log(cruiserBoard);
        }else if(headerObj.selectLength === 3){
            submarineBoard = new gameboard(submarineShip,this.coordArray);
            console.log(submarineBoard);
        }else if(headerObj.selectLength === 2){
            destroyerBoard = new gameboard(destroyerShip,this.coordArray);
            console.log(destroyerBoard);
        }
    }
}

// EXECUTION
boardInit.increment(); // init the both player and AI dashboard
headerObj.headerBtnAddEvent(); // creates event listeners for the Header buttons.