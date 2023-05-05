// this object will confirm if the coordinate of a ship is correct or not based on type and axe of the ship.
const shipCriteria = {
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
    checkCriteria : function(coordId, shipType, shipAxe){
        // coordId = PlayerCoord20 or AICoord20
        // we need to extract the next 20
        coordId = +coordId.split('d')[1]; // we extract the number.
        if(shipAxe === 'Horizontal'){
            if(shipType === 'Carrier'){
                return shipCriteria.CarrierH.includes(coordId)? true : false;
            }else if(shipType === 'Battleship'){
                return shipCriteria.BattleshipH.includes(coordId)? true :false;
            }else if(shipType === 'Cruiser'){
                return shipCriteria.CruiserH.includes(coordId)? true : false;
            }else if(shipType === 'Submarine'){
                return shipCriteria.SubmarineH.includes(coordId)? true : false;
            }else if(shipType === 'Destroyer'){
                return shipCriteria.DestroyerH.includes(coordId)? true : false;
            }
        }else if(shipAxe === 'Vertical'){
            if(shipType === 'Carrier'){
                return shipCriteria.CarrierV.includes(coordId)? true : false;
            }else if(shipType === 'Battleship'){
                return shipCriteria.BattleshipV.includes(coordId)? true : false;
            }else if(shipType === 'Cruiser'){
                return shipCriteria.CruiserV.includes(coordId)? true : false;
            }else if(shipType === 'Submarine'){
                return shipCriteria.SubmarineV.includes(coordId)? true : false;
            }else if(shipType === 'Destroyer'){
                return shipCriteria.DestroyerV.includes(coordId)? true : false;
            }
        }
    }
}

// this object will place the ship
const shipInsertion = {
//headerObj.selectLength = shipLength
// headerObj.shipAxis = shipAxe
// headerObj.shipType = shipType
// placeShip.coordArray = coordArray
// targetId = e.srcElement.id
// let vertArray = undefined; // used when shipAxis = vertical
// const targetClass = e.srcElement.className;
// const targetPos = document.querySelector(`#${targetId}`);
checkAvailability : function(vertArray, targetPos, shipLength, shipAxis,targetId,targetClass){
    console.log('were inside checkAvailability')
    console.log(vertArray);
    console.log(targetPos);
    console.log(shipLength);
    console.log(shipAxis);
    console.log(targetId);
    console.log(targetClass);
    for(let i = 0;i<=shipLength-1;i++){
        if(shipAxis === 'Horizontal'){
            if(targetClass ==='ship placed'){
                return false;
            }
            targetPos = targetPos.nextSibling;
            console.log(targetPos);
        }else if(shipAxis === 'Vertical'){
            vertArray = `${targetId}`.split('d');
            vertArray[1] = +vertArray[1] +(i*10);
            vertArray[0] += 'd';
            vertArray = vertArray.join('');
            if(targetClass ==='ship placed'){
                return false;
            }
        }
    }
},
getInserted : function(vertArray, targetClass, targetPos, shipLength, shipAxis, shipType,targetId){
            let coordArray = [];
            if(shipLength!=0){
                console.log('hello world 1')
                console.log(shipInsertion.checkAvailability(vertArray, targetPos, shipLength, shipAxis,targetId,targetClass));
                if(shipInsertion.checkAvailability(vertArray, targetPos, shipLength, shipAxis,targetId,targetClass)===false){
                    //exit the function if the coordinate is already filled
                    return alert('please choose another spot');
                }
                else{
                //select the number-1 to the right
                console.log('hello world 2')
                for(let i = 0;i<=shipLength-1;i++){
                        if(shipAxis === 'Horizontal'){
                            targetPos.style.backgroundColor = '#06D6A0';
                            //targetPos.setAttribute('class',targetClass+' '+shipType);
                            targetPos.setAttribute('class','ship placed');
                            //console.log(targetPos.id);
                            coordArray.push(targetPos.id);
                            targetPos = targetPos.nextSibling;
                        }else if(shipAxis === 'Vertical'){
                            //console.log('im here')
                            vertArray = `${targetId}`.split('d');
                            //console.log(vertArray);
                            vertArray[1] = +vertArray[1] +(i*10);
                            vertArray[0] += 'd';
                            vertArray = vertArray.join('');
                            //console.log(vertArray);
                            document.querySelector(`#${vertArray}`).style.backgroundColor = '#06D6A0';
                            //document.querySelector(`#${vertArray}`).setAttribute('class',targetClass+' '+shipType);
                            document.querySelector(`#${vertArray}`).setAttribute('class','ship placed');
                            //console.log(document.querySelector(`#${vertArray}`).id);
                            coordArray.push(document.querySelector(`#${vertArray}`).id);
                        }
                    }
                }
            }
            return coordArray;
        }
}


module.exports = {shipCriteria,shipInsertion};