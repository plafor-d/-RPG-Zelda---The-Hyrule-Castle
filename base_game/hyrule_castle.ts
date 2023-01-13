import * as option from "./better_combat_options"
import * as acc from "./basic_game_customization"
import { randomInt } from "crypto";
import * as l from "./level_and_experience";
import { exit } from "process";
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

export const fichH: Heros[] = JSON.parse(b.readFileSync('./player.json', 'utf-8'));
export const fichB: Bosse[] = JSON.parse(b.readFileSync('./bosses.json', 'utf-8'));
export const fichB_E: B_ennemi[] = JSON.parse(b.readFileSync('./enemies.json', 'utf-8'));


export function Base() {
acc.Text()
acc.Intro()
let select_etage = acc.select_etage()
let mode = parseInt(acc.Select())
let level = 0
if (mode === 1) {
    let cc =rls.keyInYN(`Are you ready for your adventure ?\n`)
    if (cc === true) {
        let randH = randomInt(0, 100) //permet de choisir aléatoirement un héros suivant sa rareté
        if ((0 < randH) && (randH <= 50)) {
            randH = 1
        } else if ((50 < randH) && (randH <= 80)) {
            randH = 2
        } else if ((80 < randH) && (randH <= 95)) {
            randH = 3
        } else if ((95 < randH) && (randH <= 99)) {
            randH = 4
        } else if (randH === 100) {
            randH = 5
        } else {
            console.log("ERROR SYSTEM")
            return
        }  

    let hp_H = fichH[randH].hp
    let strH = fichH[randH].str
    let HP = fichH[randH].hp
    for (let total_etage = 0; total_etage < (select_etage/10); total_etage += 1) {
        for ( let etage: number = 1; etage <= 10; etage += 1) { // permet de géré le changement d'étage
            console.clear()
            console.log(`========== STAGE${etage} ==========\n||                        ||`)
            let randE = fichB_E[randomInt(fichB_E.length -1)].id //choisi aléatoirement un enemie
            let hp_BE = fichB_E[randE].hp
            if (etage < 10) {
                let fight = 1
                let message: string = ''
                let message_E: string = ''
                    while (hp_BE > 0) { // boucle de combat
                        if (fight === 1) { 
                            message += (`You encounter ${fichB_E[randE].name}`)
                        }
                        if (fight > 1) {
                            message_E += (`${fichB_E[randE].name} attacked and dealt you ${fichB_E[randE].str}!`)
                        console.clear()
                        if ((hp_H -= fichB_E[randE].str) <= 0) {
                            acc.Text_LOOSER
                            return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB_E[randE].name}\nHP: [${acc.Barre_Vie('❤️', hp_BE, fichB_E[randE].hp - hp_BE)} ] ${hp_BE}/${fichB_E[randE].hp}\n`) // affiche la barre de vie des monstres 
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP - hp_H)} ] ${hp_H}/${HP}\n`) // affiche la barre de vie du héro 
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_E}\n`) // affiche les options possibles pendant un combat 
                        message = ''
                        message_E = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH}!`)
                            hp_BE = option.Attack(strH, hp_BE)
                            if (hp_BE <= 0){console.log(`${fichB_E[randE].name} dead!`)}
                        } else if (choose === "2") {
                            message += (`You used heal!`)
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            hp_H = option.Protect_E(randE, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                let Press =rls.question("=== Press any key to continue ===\n")
                } else {
                    let randB = fichB[randomInt(fichB.length -1)].id
                    let hp_B = fichB[randB].hp
                    let fight = 1
                    let message: string = ''
                    let message_B: string = ''
                    while (hp_B > 0) {
                        if (fight === 1) { 
                            message += (`You encounter ${fichB[randB].name}`)
                        }
                        if (fight > 1) {
                            message_B += (`${fichB[randB].name} attacked and dealt you ${fichB[randB].str}!`)
                            console.clear()
                            if ((hp_H -= fichB[randB].str) <= 0) {
                                acc.Text_LOOSER()
                                return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB[randB].name}\nHP: [${acc.Barre_Vie('❤️', hp_B, fichB[randB].hp - hp_B)} ] ${hp_B}/${fichB[randB].hp}\n`) // same 
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP - hp_H)}] ${hp_H}/${HP}\n`) // same 
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_B}\n`) // same
                        message = ''
                        message_B = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH}!`)
                            hp_B = option.AttackB(strH, hp_B)
                            if (hp_B <= 0){console.log(`${fichB[randB].name} dead!`)}
                        } else if (choose === "2") {
                            message += ("You used heal!")
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            option.Protect_B(randB, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                }
            acc.Text_Win
            } 
        }
    }else {console.log("NUUUUL")}
} else if ( mode === 2) {
    let cc =rls.keyInYN(`Are you ready for your adventure ?\n`)
    if (cc === true) {
        let randH = randomInt(0, 100) //permet de choisir aléatoirement un héros suivant sa rareté
        if ((0 < randH) && (randH <= 50)) {
            randH = 1
        } else if ((50 < randH) && (randH <= 80)) {
            randH = 2
        } else if ((80 < randH) && (randH <= 95)) {
            randH = 3
        } else if ((95 < randH) && (randH <= 99)) {
            randH = 4
        } else if (randH === 100) {
            randH = 5
        } else {
            console.log("ERROR SYSTEM")
            return
        }

    let hp_H = fichH[randH].hp
    let strH = fichH[randH].str
    let HP = fichH[randH].hp
    for (let total_etage = 0; total_etage < (select_etage/10); total_etage += 1) {
        for ( let etage: number = 1; etage <= 10; etage += 1) { // permet de géré le changement d'étage
            console.clear()
            console.log(`========== STAGE${etage} ==========\n||                        ||`)
            let randE = fichB_E[randomInt(fichB_E.length -1)].id //choisi aléatoirement un enemie
            let hp_BE = fichB_E[randE].hp *1.5
            if (etage < 10) {
                let fight = 1
                let message: string = ''
                let message_E: string = ''
                    while (hp_BE > 0) { // boucle de combat
                        if (fight === 1) { 
                            message += (`You encounter ${fichB_E[randE].name}`)
                        }
                        if (fight > 1) {
                            message_E += (`${fichB_E[randE].name} attacked and dealt you ${fichB_E[randE].str*1.5}!`)
                        console.clear()
                        if ((hp_H -= fichB_E[randE].str*1.5) <= 0) {
                            acc.Text_LOOSER
                            return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB_E[randE].name}\nHP: [${acc.Barre_Vie('❤️', hp_BE, fichB_E[randE].hp*1.5 - hp_BE)} ] ${hp_BE}/${fichB_E[randE].hp*1.5}\n`)
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP - hp_H)} ] ${hp_H}/${HP}\n`)
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_E}\n`)
                        message = ''
                        message_E = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH*1.5}!`)
                            hp_BE = option.Attack(strH, hp_BE)
                            if (hp_BE <= 0){console.log(`${fichB_E[randE].name} dead!`)}
                        } else if (choose === "2") {
                            message += (`You used heal!`)
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            hp_H = option.Protect_E(randE, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                let Press =rls.question("=== Press any key to continue ===\n")
                } else {
                    let randB = fichB[randomInt(fichB.length -1)].id
                    let hp_B = fichB[randB].hp*1.5
                    let fight = 1
                    let message: string = ''
                    let message_B: string = ''
                    while (hp_B > 0) {
                        if (fight === 1) { 
                            message += (`You encounter ${fichB[randB].name}`)
                        }
                        if (fight > 1) {
                            message_B += (`${fichB[randB].name} attacked and dealt you ${fichB[randB].str*1.5}!`)
                            console.clear()
                            if ((hp_H -= fichB[randB].str*1.5) <= 0) {
                                acc.Text_LOOSER()
                                return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB[randB].name}\nHP: [${acc.Barre_Vie('❤️', hp_B, fichB[randB].hp*1.5 - hp_B)} ] ${hp_B}/${fichB[randB].hp*1.5}\n`)
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP - hp_H)}] ${hp_H}/${HP}\n`)
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_B}\n`)
                        message = ''
                        message_B = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH*1.5}!`)
                            hp_B = option.AttackB(strH, hp_B)
                            if (hp_B <= 0){console.log(`${fichB[randB].name} dead!`)}
                        } else if (choose === "2") {
                            message += ("You used heal!")
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            option.Protect_B(randB, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                }
            acc.Text_Win
            } 
        }
    }else {console.log("NUUUUL")}

}else if ( mode === 3) {
    let cc =rls.keyInYN(`Are you ready for your adventure ?\n`)
    if (cc === true) {
        let randH = randomInt(0, 100) //permet de choisir aléatoirement un héros suivant sa rareté
        if ((0 < randH) && (randH <= 50)) {
            randH = 1
        } else if ((50 < randH) && (randH <= 80)) {
            randH = 2
        } else if ((80 < randH) && (randH <= 95)) {
            randH = 3
        } else if ((95 < randH) && (randH <= 99)) {
            randH = 4
        } else if (randH === 100) {
            randH = 5
        } else {
            console.log("ERROR SYSTEM")
            return
        }

    let hp_H = fichH[randH].hp*1.5
    let strH = fichH[randH].str
    let HP = fichH[randH].hp
    for (let total_etage = 0; total_etage < (select_etage/10); total_etage += 1) {
        for ( let etage: number = 1; etage <= 10; etage += 1) { // permet de géré le changement d'étage
            console.clear()
            console.log(`========== STAGE${etage} ==========\n||                        ||`)
            let randE = fichB_E[randomInt(fichB_E.length -1)].id //choisi aléatoirement un enemie
            let hp_BE = fichB_E[randE].hp*2
            if (etage < 10) {
                let fight = 1
                let message: string = ''
                let message_E: string = ''
                    while (hp_BE > 0) { // boucle de combat
                        if (fight === 1) { 
                            message += (`You encounter ${fichB_E[randE].name}`)
                        }
                        if (fight > 1) {
                            message_E += (`${fichB_E[randE].name} attacked and dealt you ${fichB_E[randE].str*2}!`)
                        console.clear()
                        if ((hp_H -= fichB_E[randE].str*2) <= 0) {
                            acc.Text_LOOSER
                            return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB_E[randE].name}\nHP: [${acc.Barre_Vie('❤️', hp_BE, fichB_E[randE].hp*2 - hp_BE)} ] ${hp_BE}/${fichB_E[randE].hp*2}\n`)
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP*1.5 - hp_H)} ] ${hp_H}/${HP*1.5}\n`)
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_E}\n`)
                        message = ''
                        message_E = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH*1.5}!`)
                            hp_BE = option.Attack_ins(strH, hp_BE)
                            if (hp_BE <= 0){console.log(`${fichB_E[randE].name} dead!`)}
                        } else if (choose === "2") {
                            message += (`You used heal!`)
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            hp_H = option.Protect_E(randE, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                let Press =rls.question("=== Press any key to continue ===\n")
                } else {
                    let randB = fichB[randomInt(fichB.length -1)].id
                    let hp_B = fichB[randB].hp*2
                    let fight = 1
                    let message: string = ''
                    let message_B: string = ''
                    while (hp_B > 0) {
                        if (fight === 1) { 
                            message += (`You encounter ${fichB[randB].name}`)
                        }
                        if (fight > 1) {
                            message_B += (`${fichB[randB].name} attacked and dealt you ${fichB[randB].str*2}!`)
                            console.clear()
                            if ((hp_H -= fichB[randB].str*2) <= 0) {
                                acc.Text_LOOSER()
                                return
                        }}
                        console.log(`========== FIGHT${fight} ==========`)
                        console.log('\x1b[31m%s\x1b[0m',`${fichB[randB].name}\nHP: [${acc.Barre_Vie('❤️', hp_B, fichB[randB].hp*2 - hp_B)} ] ${hp_B}/${fichB[randB].hp*2}\n`)
                        console.log('\x1b[32m%s\x1b[0m',`${fichH[randH].name}\nHP: [${acc.Barre_Vie('❤️', hp_H, HP*1.5 - hp_H)}] ${hp_H}/${HP*1.5}\n`)
                        let choose =rls.question(`--OPTION-----------\n 1. Attack    2. Heal    3. Escape    4. Protect: \n\n${message}\n\n${message_B}\n`)
                        message = ''
                        message_B = ''
                        if (choose === "1") {
                            message += (`You attacked and dealt ${strH*1.5}!`)
                            hp_B = option.AttackB_ins(strH, hp_B)
                            if (hp_B <= 0){console.log(`${fichB[randB].name} dead!`)}
                        } else if (choose === "2") {
                            message += ("You used heal!")
                            hp_H = option.Heal(HP, hp_H)
                        } else if (choose === "3") {
                            option.Escape()
                        } else if (choose === '4') {
                            option.Protect_B(randB, hp_H)
                        }
                        fight += 1
                    }
                    level = l.level(level)
                    if (level >= 100) {
                        level = 0
                        let UP = rls.question('Upgrade 1. strengh or 2. HP :\n');
                        strH = l.STR(strH, UP)
                        HP = l.HP(HP, UP)
                    }
                }
            acc.Text_Win
            } 
        }
    }else {console.log("NUUUUL")}

}else{console.log("===// ERROR \\===")}}
Base()
