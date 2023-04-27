const { Ship, Gameboard } = require('./classObj');
// Game Dashboard Init
let i = 0;
while(i<100){
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
    document.querySelector(`#playerCoord${i}`).addEventListener('click',exeTargetPlayer);
    i++;
}
// DOM manipulation
const headerBtn = document.querySelectorAll('.headBtn');
console.log(headerBtn);
// ship length initialized
let selectLength = 0;
let shipType = undefined;
// adding event listeners to headerBtn
for(let i = 0; i<= headerBtn.length-1;i++){
    headerBtn[i].addEventListener('click',exeBtn);
}
// headerBtn event function
function exeBtn(e){
    console.log(e.srcElement);
    console.log(e.srcElement.innerText);
    const headBtnType = e.srcElement.innerText;
    if(headBtnType === 'Vertical'){

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
    }else if(headBtnType === 'Start the game'){
        
    }
}
// targetPlayer event function
function exeTargetPlayer(e){
    console.log(e.srcElement.id);
    const targetId = e.srcElement.id;
    let targetPos = document.querySelector(`#${targetId}`);//#06D6A0
    if(selectLength!=0){
        //select the number-1 to the rigth
        for(let i = 0;i<=selectLength-1;i++){
            targetPos.style.backgroundColor = '#06D6A0';
            targetPos.setAttribute('class',shipType);
            targetPos = targetPos.nextSibling;
        }
        //console.log(targetPos.nextSibling);
        //select the number-1 to the rigth
    }
}