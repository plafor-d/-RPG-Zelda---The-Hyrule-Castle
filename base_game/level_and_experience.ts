import { randomInt } from "crypto";
import * as h from "./hyrule_castle";
const b = require('fs');
const rls= require('readline-sync');

export function level(level) {//Permet d'ajouter de l'exp
    level += randomInt(15, 50)
    console.log(`You have ${level} xp!`)
    return parseInt(level)
}

export function STR(strH, UP): number {//Permet de UP l'attaque
    if (UP === '1') {
        return strH*1.2
    } else {
        return strH
    }
}

export function HP(HP, UP): number {//Permet de UP les hp
    if (UP === '2') {
        return HP*1.2
    } else {
        return HP
    }
}