/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classObj.js":
/*!*************************!*\
  !*** ./src/classObj.js ***!
  \*************************/
/***/ ((module) => {

eval("class ship{\r\n    constructor(length,hitNumber=0){\r\n        this.length = length;\r\n        this.hitNumber = hitNumber;\r\n    }\r\n    hit (){\r\n        this.hitNumber++;\r\n        return this.hitNumber;\r\n    }\r\n    isSunk(){\r\n        if(this.length === this.hitNumber){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n}\r\nclass gameboard{\r\n    constructor(ship,coordinates){\r\n        this.ship = ship;\r\n        this.coordinates = coordinates;\r\n    }\r\n    placeShip(){\r\n        console.log(this.coordinates);\r\n        console.log(this.ship);\r\n    }\r\n    receiveAttack(receiveCoord){\r\n        if(this.coordinates.includes(receiveCoord)){\r\n            this.ship.hit();\r\n        }\r\n    }\r\n}\r\nmodule.exports = { ship, gameboard, game1};\r\n\n\n//# sourceURL=webpack://odin-project-battleship/./src/classObj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ship, gameboard, game1 } = __webpack_require__(/*! ./classObj */ \"./src/classObj.js\");\r\n//import { ship, gameboard } from './classObj.js';\r\n//const game1 = new ship(5);\r\n//console.log(game1);\r\n// Game Dashboard Init\r\nconst dashboardCreation = {\r\n    index: 0,\r\n    increment: function(){\r\n        while(dashboardCreation.index<100){\r\n            const targetPlayer = document.querySelector('.playerBoard');\r\n            const targetAI = document.querySelector('.AIBoard');\r\n            const btnPlayer = document.createElement('div');\r\n            const btnAI = document.createElement('div');\r\n            btnPlayer.setAttribute('class',`targetPlayer`);\r\n            btnAI.setAttribute('class',`targetAI`);\r\n            btnPlayer.setAttribute('id',`playerCoord${i}`);\r\n            btnAI.setAttribute('id',`AICoord${i}`);\r\n            targetPlayer.appendChild(btnPlayer);\r\n            targetAI.appendChild(btnAI);\r\n            //add event listener to targetPlayer\r\n            document.querySelector(`#playerCoord${i}`).addEventListener('click',targetPlayerEvent);\r\n            dashboardCreation.index++;\r\n        }\r\n    }\r\n}\r\n/* let i = 0;\r\nwhile(i<100){\r\n    const targetPlayer = document.querySelector('.playerBoard');\r\n    const targetAI = document.querySelector('.AIBoard');\r\n    const btnPlayer = document.createElement('div');\r\n    const btnAI = document.createElement('div');\r\n    btnPlayer.setAttribute('class',`targetPlayer`);\r\n    btnAI.setAttribute('class',`targetAI`);\r\n    btnPlayer.setAttribute('id',`playerCoord${i}`);\r\n    btnAI.setAttribute('id',`AICoord${i}`);\r\n    targetPlayer.appendChild(btnPlayer);\r\n    targetAI.appendChild(btnAI);\r\n    //add event listener to targetPlayer\r\n    document.querySelector(`#playerCoord${i}`).addEventListener('click',targetPlayerEvent);\r\n    i++;\r\n} */\r\n// DOM manipulation\r\nconst headerBtn = document.querySelectorAll('.headBtn');\r\n//console.log(headerBtn);\r\n// ship length initialized\r\nlet selectLength = 0;\r\nlet shipType = undefined;\r\nlet shipAxis = 'Horizontal';\r\n// adding event listeners to headerBtn\r\nfor(let i = 0; i<= headerBtn.length-1;i++){\r\n    headerBtn[i].addEventListener('click',headerBtnEvent);\r\n}\r\n// headerBtn event function\r\nfunction headerBtnEvent(e){\r\n    //console.log(e.srcElement);\r\n    //console.log(e.srcElement.innerText);\r\n    const headBtnType = e.srcElement.innerText;\r\n    if(headBtnType === 'Vertical'){\r\n        e.srcElement.innerText = 'Horizontal';\r\n        shipAxis = 'Vertical';\r\n    }else if(headBtnType === 'Carrier'){\r\n        selectLength = 5;\r\n        shipType = 'Carrier';\r\n    }else if(headBtnType === 'Battleship'){\r\n        selectLength = 4;\r\n        shipType = 'Battleship';\r\n    }else if(headBtnType === 'Cruiser'){\r\n        selectLength = 3;\r\n        shipType = 'Cruiser';\r\n    }else if(headBtnType === 'Submarine'){\r\n        selectLength = 3;\r\n        shipType = 'Submarine';\r\n    }else if(headBtnType === 'Destroyer'){\r\n        selectLength = 2;\r\n        shipType = 'Destroyer';\r\n    }else if(headBtnType === 'Horizontal'){\r\n        e.srcElement.innerText = 'Vertical';\r\n        shipAxis = 'Horizontal';\r\n    }else if(headBtnType === 'Start the game'){\r\n        \r\n    }\r\n}\r\n// targetPlayer event function\r\nfunction targetPlayerEvent(e){\r\n    //console.log(e.srcElement.id);\r\n    if(document.querySelectorAll(`.${shipType}`).length!=0){\r\n        //exit the function is a ship is already positioned, in order to avoid duplicates\r\n        return;\r\n    }\r\n    const targetId = e.srcElement.id;\r\n    let targetClass = e.srcElement.className;\r\n    let targetPos = document.querySelector(`#${targetId}`);//#06D6A0\r\n    let vertArray = undefined;\r\n    let coordArray = [];// this variable will be passed into the gameboard class\r\n    if(selectLength!=0){\r\n        //select the number-1 to the rigth\r\n        for(let i = 0;i<=selectLength-1;i++){\r\n            if(shipAxis === 'Horizontal'){\r\n                targetPos.style.backgroundColor = '#06D6A0';\r\n                targetPos.setAttribute('class',targetClass+' '+shipType);\r\n                //console.log(targetPos.id);\r\n                coordArray.push(targetPos.id);\r\n                targetPos = targetPos.nextSibling;\r\n            }else if(shipAxis === 'Vertical'){\r\n                //console.log('im here')\r\n                vertArray = `${e.srcElement.id}`.split('d');\r\n                //console.log(vertArray);\r\n                vertArray[1] = +vertArray[1] +(i*10);\r\n                vertArray[0] += 'd';\r\n                vertArray = vertArray.join('');\r\n                //console.log(vertArray);\r\n                document.querySelector(`#${vertArray}`).style.backgroundColor = '#06D6A0';\r\n                document.querySelector(`#${vertArray}`).setAttribute('class',targetClass+' '+shipType);\r\n                //console.log(document.querySelector(`#${vertArray}`).id);\r\n                coordArray.push(document.querySelector(`#${vertArray}`).id);\r\n            }\r\n        }\r\n        //console.log(targetPos.nextSibling);\r\n        //select the number-1 to the rigth\r\n    }\r\n    // create objects from the classObj.js\r\n    //console.log(coordArray);\r\n    if(selectLength === 5){\r\n        carrierBoard = new gameboard(carrierShip,coordArray);\r\n        console.log(carrierBoard);\r\n    }else if(selectLength === 4){\r\n        battleshipBoard = new gameboard(battleshipShip,coordArray);\r\n        console.log(battleshipBoard);\r\n    }else if(selectLength === 3){\r\n        cruiserBoard = new gameboard(cruiserShip,coordArray);\r\n        console.log(cruiserBoard);\r\n    }else if(selectLength === 3){\r\n        submarineBoard = new gameboard(submarineShip,coordArray);\r\n        console.log(submarineBoard);\r\n    }else if(selectLength === 2){\r\n        destroyerBoard = new gameboard(destroyerShip,coordArray);\r\n        console.log(destroyerBoard);\r\n    }\r\n}\r\nconst carrierShip = new ship(5);\r\nconst battleshipShip = new ship(4);\r\nconst cruiserShip = new ship(3);\r\nconst submarineShip = new ship(3);\r\nconst destroyerShip = new ship(2);\r\nlet carrierBoard = undefined;\r\nlet battleshipBoard = undefined;\r\nlet cruiserBoard = undefined;\r\nlet submarineBoard = undefined;\r\nlet destroyerBoard = undefined;\n\n//# sourceURL=webpack://odin-project-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;