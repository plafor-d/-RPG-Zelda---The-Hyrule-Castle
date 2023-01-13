"use strict";
exports.__esModule = true;
exports.HP = exports.STR = exports.level = void 0;
var crypto_1 = require("crypto");
var b = require('fs');
var rls = require('readline-sync');
function level(level) {
    level += (0, crypto_1.randomInt)(15, 50);
    console.log("You have ".concat(level, " xp!"));
    return parseInt(level);
}
exports.level = level;
function STR(strH, UP) {
    if (UP === '1') {
        return strH * 1.2;
    }
}
exports.STR = STR;
function HP(HP, UP) {
    if (UP === '2') {
        return HP * 1.2;
    }
}
exports.HP = HP;
