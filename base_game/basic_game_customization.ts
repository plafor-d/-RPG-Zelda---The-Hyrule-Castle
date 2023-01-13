import { exit } from 'process';
import * as h from './hyrule_castle';
const figlet = require('figlet')
const rls= require('readline-sync');

export function Text() { //affiche le text de debut
    console.log(figlet.textSync('Zelda', {
        font: '3D Diagonal',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
}

export function Intro() {//ecran d'accueil
    let menu =rls.question(`1. New game!\n2. quit\n`)
    if (menu === '2') {
        let rep =rls.keyInYN(`Are you sure ?`)
        if (rep === true) {
        process.exit(0);
        } else {
            Intro()
        }
    }
}

export function select_etage() {//permet de definir un nombre d'etage
    let etage_select=rls.question(`===== CHOOSE HOW MANY STAGE YOU WANT =====\n1. 10\n2. 20\n3. 30\n4. 50\n5. 100\n`)
    if (etage_select === '1') {
        etage_select = 10
    } else if (etage_select === '2') {
        etage_select = 20
    } else if (etage_select === '3') {
        etage_select = 30
    } else if (etage_select === '4') {
        etage_select = 50
    } else if (etage_select === '5') {
        etage_select = 100
    } else {
        console.log("===// ERROR \\===")
        select_etage()
    }
    return etage_select
}

export function Select() {//Permet de choisir le mode de difficulté
    let mode =rls.question(`===== CHOOSE YOUR MODE =====\n1. Normal\n2. Difficult\n3. Insane\n`)
    return mode
}

export function Barre_Vie(emoji: string, PV, PV_perdu) {//Permet de creer la barre de vie
    let barre = ''
    for (let barre_evolv = 0; barre_evolv < PV; barre_evolv += 1) {
        barre += `${emoji}`
    }
    for (let barre_enlev = 0; barre_enlev < PV_perdu; barre_enlev += 1) {
        barre += '🖤'
    }
    return barre
}

export function Text_LOOSER() {//Affiche le text de la defaite
    console.log(figlet.textSync('Looser', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }))};

    export function Text_Win() {//Affiche le text de victoire
        console.log(figlet.textSync('Looser', {
            font: '3D-ASCII',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }))};
