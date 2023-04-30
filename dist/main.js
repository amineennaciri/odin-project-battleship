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

eval("class ship{\r\n    constructor(length,hitNumber=0){\r\n        this.length = length;\r\n        this.hitNumber = hitNumber;\r\n    }\r\n    hit (){\r\n        this.hitNumber++;\r\n        return this.hitNumber;\r\n    }\r\n    isSunk(){\r\n        if(this.length === this.hitNumber){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n}\r\nclass gameboard{\r\n    constructor(ship,coordinates){\r\n        this.ship = ship;\r\n        this.coordinates = coordinates;\r\n    }\r\n    placeShip(){\r\n        console.log(this.coordinates);\r\n        console.log(this.ship);\r\n    }\r\n    receiveAttack(receiveCoord){\r\n        if(this.coordinates.includes(receiveCoord)){\r\n            this.ship.hit();\r\n        }\r\n    }\r\n}\r\n\r\nclass addEventList{\r\n    constructor(target,callback){\r\n        this.target = target;\r\n        this.callback = callback;\r\n    }\r\n    addEvent(){\r\n        for(let i = 0; i<= this.target.length-1;i++){\r\n            this.target[i].addEventListener('click',this.callback);\r\n        }\r\n    }\r\n}\r\n\r\nconst carrierShip = new ship(5);\r\nconst battleshipShip = new ship(4);\r\nconst cruiserShip = new ship(3);\r\nconst submarineShip = new ship(3);\r\nconst destroyerShip = new ship(2);\r\nlet carrierBoard = undefined;\r\nlet battleshipBoard = undefined;\r\nlet cruiserBoard = undefined;\r\nlet submarineBoard = undefined;\r\nlet destroyerBoard = undefined;\r\n\r\nmodule.exports = { ship, gameboard, addEventList, carrierShip, battleshipShip,cruiserShip, submarineShip, destroyerShip, carrierBoard, battleshipBoard, cruiserBoard, submarineBoard, destroyerBoard};\r\n\r\n//import { ship, gameboard } from './classObj.js';\r\n//const game1 = new ship(5);\r\n//console.log(game1);\n\n//# sourceURL=webpack://odin-project-battleship/./src/classObj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ship, gameboard, addEventList, carrierShip,battleshipShip, cruiserShip, submarineShip, destroyerShip} = __webpack_require__(/*! ./classObj */ \"./src/classObj.js\");\r\nlet {carrierBoard, battleshipBoard, cruiserBoard, submarineBoard, destroyerBoard} = __webpack_require__(/*! ./classObj */ \"./src/classObj.js\");\r\n// Game Dashboard Init\r\n\r\nconst boardInit = {\r\n    i: 0,//index used in the increment function.\r\n    increment: function(){\r\n        while(this.i<100){\r\n            const targetPlayer = document.querySelector('.playerBoard');\r\n            const targetAI = document.querySelector('.AIBoard');\r\n            const btnPlayer = document.createElement('div');\r\n            const btnAI = document.createElement('div');\r\n            btnPlayer.setAttribute('class',`targetPlayer`);\r\n            btnAI.setAttribute('class',`targetAI`);\r\n            btnPlayer.setAttribute('id',`playerCoord${this.i}`);\r\n            btnAI.setAttribute('id',`AICoord${this.i}`);\r\n            targetPlayer.appendChild(btnPlayer);\r\n            targetAI.appendChild(btnAI);\r\n            //add event listener to targetPlayer\r\n            document.querySelector(`#playerCoord${this.i}`).addEventListener('click',placeShip.targetPlayerEvent);\r\n            boardInit.i++;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n// headerObject\r\nconst headerObj = {\r\n    headerBtn : document.querySelectorAll('.headBtn'),\r\n    selectLength : 0, // used to determine which ship\r\n    shipType : undefined, // carrier or else...\r\n    shipAxis : 'Horizontal', // user for positioning\r\n    headerBtnAddEvent : function(){\r\n        new addEventList(this.headerBtn,this.headerBtnEvent).addEvent();\r\n    },\r\n    headerBtnEvent : function(e){\r\n        //console.log(e.srcElement);\r\n        //console.log(e.srcElement.innerText);\r\n        const headBtnType = e.srcElement.innerText;\r\n        if(headBtnType === 'Vertical'){\r\n            e.srcElement.innerText = 'Horizontal';\r\n            headerObj.shipAxis = 'Vertical';\r\n        }else if(headBtnType === 'Carrier'){\r\n            headerObj.selectLength = 5;\r\n            headerObj.shipType = 'Carrier';\r\n        }else if(headBtnType === 'Battleship'){\r\n            headerObj.selectLength = 4;\r\n            headerObj.shipType = 'Battleship';\r\n        }else if(headBtnType === 'Cruiser'){\r\n            headerObj.selectLength = 3;\r\n            headerObj.shipType = 'Cruiser';\r\n        }else if(headBtnType === 'Submarine'){\r\n            headerObj.selectLength = 3;\r\n            headerObj.shipType = 'Submarine';\r\n        }else if(headBtnType === 'Destroyer'){\r\n            headerObj.selectLength = 2;\r\n            headerObj.shipType = 'Destroyer';\r\n        }else if(headBtnType === 'Horizontal'){\r\n            e.srcElement.innerText = 'Vertical';\r\n            headerObj.shipAxis = 'Horizontal';\r\n        }else if(headBtnType === 'Start the game'){\r\n            //empty needs to be filled\r\n        }\r\n    }\r\n}\r\n\r\n\r\n// this is the Object that places the ships on the playerBoard\r\nconst placeShip = {\r\n    coordArray : [],// this variable will be passed into the gameboard class\r\n    targetPlayerEvent : function(e){\r\n        placeShip.coordArray = []; // init each time to avoid passing other ships coordinates.\r\n        if(document.querySelectorAll(`.${headerObj.shipType}`).length!=0){\r\n            //exit the function is a ship is already positioned, in order to avoid duplicates\r\n            return;\r\n        }\r\n        const targetId = e.srcElement.id;\r\n        let vertArray = undefined; // used when shipAxis = vertical\r\n        let targetClass = e.srcElement.className;\r\n        let targetPos = document.querySelector(`#${targetId}`);\r\n        if(headerObj.selectLength!=0){\r\n            //select the number-1 to the right\r\n            for(let i = 0;i<=headerObj.selectLength-1;i++){\r\n                if(headerObj.shipAxis === 'Horizontal'){\r\n                    targetPos.style.backgroundColor = '#06D6A0';\r\n                    targetPos.setAttribute('class',targetClass+' '+headerObj.shipType);\r\n                    //console.log(targetPos.id);\r\n                    placeShip.coordArray.push(targetPos.id);\r\n                    targetPos = targetPos.nextSibling;\r\n                }else if(headerObj.shipAxis === 'Vertical'){\r\n                    //console.log('im here')\r\n                    vertArray = `${e.srcElement.id}`.split('d');\r\n                    //console.log(vertArray);\r\n                    vertArray[1] = +vertArray[1] +(i*10);\r\n                    vertArray[0] += 'd';\r\n                    vertArray = vertArray.join('');\r\n                    //console.log(vertArray);\r\n                    document.querySelector(`#${vertArray}`).style.backgroundColor = '#06D6A0';\r\n                    document.querySelector(`#${vertArray}`).setAttribute('class',targetClass+' '+headerObj.shipType);\r\n                    //console.log(document.querySelector(`#${vertArray}`).id);\r\n                    placeShip.coordArray.push(document.querySelector(`#${vertArray}`).id);\r\n                }\r\n            }\r\n        }\r\n        placeShip.createGameboard();\r\n    },\r\n    createGameboard : function(){\r\n        if(headerObj.selectLength === 5){\r\n            carrierBoard = new gameboard(carrierShip,this.coordArray);\r\n            console.log(carrierBoard);\r\n        }else if(headerObj.selectLength === 4){\r\n            battleshipBoard = new gameboard(battleshipShip,this.coordArray);\r\n            console.log(battleshipBoard);\r\n        }else if(headerObj.selectLength === 3){\r\n            cruiserBoard = new gameboard(cruiserShip,this.coordArray);\r\n            console.log(cruiserBoard);\r\n        }else if(headerObj.selectLength === 3){\r\n            submarineBoard = new gameboard(submarineShip,this.coordArray);\r\n            console.log(submarineBoard);\r\n        }else if(headerObj.selectLength === 2){\r\n            destroyerBoard = new gameboard(destroyerShip,this.coordArray);\r\n            console.log(destroyerBoard);\r\n        }\r\n    }\r\n}\r\n\r\n// EXECUTION\r\nboardInit.increment(); // init the both player and AI dashboard\r\nheaderObj.headerBtnAddEvent(); // creates event listeners for the Header buttons.\n\n//# sourceURL=webpack://odin-project-battleship/./src/index.js?");

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