const { Ship, Gameboard } = require('./index');

const testShip = new Ship(5);
//Gameboards should be able to place ships at specific coordinates by calling the ship factory function./* 

/*Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot. */