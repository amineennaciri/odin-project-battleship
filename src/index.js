const { ship, gameboard, game1 } = require('./classObj');
//import { ship, gameboard } from './classObj.js';
//const game1 = new ship(5);
//console.log(game1);
// Game Dashboard Init
const dashboardCreation = {
    index: 0,
    increment: function(){
        while(dashboardCreation.index<100){
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
            //add event listener to targetPlayer
            document.querySelector(`#playerCoord${i}`).addEventListener('click',targetPlayerEvent);
            dashboardCreation.index++;
        }
    }
}
// DOM manipulation
const headerBtn = document.querySelectorAll('.headBtn');
//console.log(headerBtn);
// ship length initialized
let selectLength = 0;
let shipType = undefined;
let shipAxis = 'Horizontal';
// adding event listeners to headerBtn
for(let i = 0; i<= headerBtn.length-1;i++){
    headerBtn[i].addEventListener('click',headerBtnEvent);
}
// headerBtn event function
function headerBtnEvent(e){
    //console.log(e.srcElement);
    //console.log(e.srcElement.innerText);
    const headBtnType = e.srcElement.innerText;
    if(headBtnType === 'Vertical'){
        e.srcElement.innerText = 'Horizontal';
        shipAxis = 'Vertical';
    }else if(headBtnType === 'Carrier'){
        selectLength = 5;
        shipType = 'Carrier';
    }else if(headBtnType === 'Battleship'){
        selectLength = 4;
        shipType = 'Battleship';
    }else if(headBtnType === 'Cruiser'){
        selectLength = 3;
        shipType = 'Cruiser';
    }else if(headBtnType === 'Submarine'){
        selectLength = 3;
        shipType = 'Submarine';
    }else if(headBtnType === 'Destroyer'){
        selectLength = 2;
        shipType = 'Destroyer';
    }else if(headBtnType === 'Horizontal'){
        e.srcElement.innerText = 'Vertical';
        shipAxis = 'Horizontal';
    }else if(headBtnType === 'Start the game'){
        
    }
}
// targetPlayer event function
function targetPlayerEvent(e){
    //console.log(e.srcElement.id);
    if(document.querySelectorAll(`.${shipType}`).length!=0){
        //exit the function is a ship is already positioned, in order to avoid duplicates
        return;
    }
    const targetId = e.srcElement.id;
    let targetClass = e.srcElement.className;
    let targetPos = document.querySelector(`#${targetId}`);//#06D6A0
    let vertArray = undefined;
    let coordArray = [];// this variable will be passed into the gameboard class
    if(selectLength!=0){
        //select the number-1 to the rigth
        for(let i = 0;i<=selectLength-1;i++){
            if(shipAxis === 'Horizontal'){
                targetPos.style.backgroundColor = '#06D6A0';
                targetPos.setAttribute('class',targetClass+' '+shipType);
                //console.log(targetPos.id);
                coordArray.push(targetPos.id);
                targetPos = targetPos.nextSibling;
            }else if(shipAxis === 'Vertical'){
                //console.log('im here')
                vertArray = `${e.srcElement.id}`.split('d');
                //console.log(vertArray);
                vertArray[1] = +vertArray[1] +(i*10);
                vertArray[0] += 'd';
                vertArray = vertArray.join('');
                //console.log(vertArray);
                document.querySelector(`#${vertArray}`).style.backgroundColor = '#06D6A0';
                document.querySelector(`#${vertArray}`).setAttribute('class',targetClass+' '+shipType);
                //console.log(document.querySelector(`#${vertArray}`).id);
                coordArray.push(document.querySelector(`#${vertArray}`).id);
            }
        }
        //console.log(targetPos.nextSibling);
        //select the number-1 to the rigth
    }
    // create objects from the classObj.js
    //console.log(coordArray);
    if(selectLength === 5){
        carrierBoard = new gameboard(carrierShip,coordArray);
        console.log(carrierBoard);
    }else if(selectLength === 4){
        battleshipBoard = new gameboard(battleshipShip,coordArray);
        console.log(battleshipBoard);
    }else if(selectLength === 3){
        cruiserBoard = new gameboard(cruiserShip,coordArray);
        console.log(cruiserBoard);
    }else if(selectLength === 3){
        submarineBoard = new gameboard(submarineShip,coordArray);
        console.log(submarineBoard);
    }else if(selectLength === 2){
        destroyerBoard = new gameboard(destroyerShip,coordArray);
        console.log(destroyerBoard);
    }
}
const carrierShip = new ship(5);
const battleshipShip = new ship(4);
const cruiserShip = new ship(3);
const submarineShip = new ship(3);
const destroyerShip = new ship(2);
let carrierBoard = undefined;
let battleshipBoard = undefined;
let cruiserBoard = undefined;
let submarineBoard = undefined;
let destroyerBoard = undefined;