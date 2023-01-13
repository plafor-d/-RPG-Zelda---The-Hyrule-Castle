import * as stat from './more_statistics'
import * as option from "./better_combat_options"
import { randomInt } from "crypto";
const b = require('fs');
const rls= require('readline-sync');

export interface Heros {
    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number,
}
export interface Bosse {
    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number,
}
export interface B_ennemi {
    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number,
}

export const fichH: Heros[] = JSON.parse(b.readFileSync('./players.json', 'utf-8'));
export const fichB: Bosse[] = JSON.parse(b.readFileSync('./bosses.json', 'utf-8'));
export const fichB_E: B_ennemi[] = JSON.parse(b.readFileSync('./enemies.json', 'utf-8'));

export function Base() {

let cc =rls.keyInYN(`Are you ready for your adventure ?\n`)
if (cc === true) {

    let randH: number = 0
    let r = randomInt(0, 100)
    if ((0 < r) && (r <= 50)) {
        randH = 1
    } else if ((50 < r) && (r <= 80)) {
        randH = 2
    } else if ((80 < r) && (r < 95)) {
        randH = 3
    } else if ((95 < r) && (r < 99)) {
        randH = 4
    } else if (r === 100) {
        randH = 5
    } else {
        console.log('error')
    }

    let hp_H = fichH[randH].hp
    for ( let etage: number = 1; etage <= 10; etage += 1) {
        console.log(`========== FIGHT${etage} ==========`)
        let randE = fichB_E[randomInt(fichB_E.length -1)].id
        let hp_BE = fichB_E[randE].hp
        if (etage < 10) {
            while (hp_BE > 0) {
                if ((hp_H -= fichB_E[randE].str) <= 0) {
                    console.log("You lose")
                    return
                }

                let vide = ""
                for (let barre_vieE: number = 0; barre_vieE < hp_BE; barre_vieE += 1) {
                    vide += "❤️️​"
                }
                let vide1 = ""
                for (let barre_vieH: number = 0; barre_vieH < hp_H; barre_vieH += 1){
                    vide1 += "💚​"
                }

                console.log('\x1b[31m%s\x1b[0m',`${fichB_E[randE].name}\nHP: [${vide} ] ${hp_BE}/${fichB_E[randE].hp}\n`)
                console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${vide1}] ${hp_H}/${fichH[randH].hp}`)

                let choose =rls.question("--OPTION-----------\n 1. Attack    2. Heal\n")
                if (choose === "1") {
                    hp_BE = option.Attack(randH, hp_BE)
                } else if (choose === "2") {
                    hp_H = option.Heal(randH, hp_H)
                } 

            }
        }else {
            let randB = fichB[randomInt(fichB.length -1)].id
            let hp_B = fichB[randB].hp
            while (hp_B > 0) {
                if ((hp_H -= fichB[randB].str) <= 0) {
                    console.log("You lose")
                    return
                }
                let videB = ""
                for (let barre_vieB: number = 0; barre_vieB < hp_B; barre_vieB += 1) {
                    videB += "🖤"
                }
                let vide1 = ""
                for (let barre_vieH: number = 0; barre_vieH < hp_H; barre_vieH += 1){
                    vide1 += "💚​"
                }
                console.log('\x1b[31m%s\x1b[0m',`${fichB[randB].name}\nHP: [${videB} ] ${hp_B}/${fichB[randB].hp}\n`)
                console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\n[${vide1}]`)
                let choose =rls.question("--OPTION-----------\n 1. Attack    2. Heal\n")
                if (choose === "1") {
                    hp_B = option.AttackB(randH, hp_B)
                } else if (choose === "2") {
                    hp_H = option.Heal(randH, hp_H)
                } 
        }
    }
}}}
Base()
