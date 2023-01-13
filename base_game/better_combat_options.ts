import * as h from './hyrule_castle'

export function Attack(strH: number, hp_BE: number) {//Permet dactivé la compétences d'attaque contre ennemi
    return hp_BE -= strH
}

export function AttackB(strH: number, hp_B: number) {//Permet dactivé la compétences d'attaque contre Boss
    return hp_B -= strH
}

export function Heal(HP: number, hp_H) {//Permet de se heal
    if (HP/2 < hp_H) {
        return hp_H = HP
    } else if (HP/2 > hp_H) {
        return hp_H += (HP/2)
    } else {
        console.log("You miss this round")
        return hp_H
    }
}

export function Escape() {//Permet de fuir
    console.log("You left the game");
    console.clear()
    return h.Base()
  }
  
export function Protect_B(randB: number, hp_H: number) {//Permet de se protect contre le boss
    hp_H +=(h.fichB[randB].str) - (h.fichB[randB].str/2)
    return hp_H
} // Protection contre les bosses.
  
export function Protect_E(randE: number, hp_H: number) {//Permet de se protect contre les ennemies
    hp_H +=(h.fichB_E[randE].str) - (h.fichB_E[randE].str/2)
    return hp_H
} // Protection contre les monstres.
  


export function Attack_dif(strH: number, hp_BE: number) {//Permet l'attaque contre ennemie en difficile
    return hp_BE -= strH*1.5
}

export function AttackB_dif(strH: number, hp_B: number) {//Permet l'attaque contre Boss en difficile
    return hp_B -= strH*1.5
}

export function Heal_dif(HP: number, hp_H) {//Permet de se Heal en difficile
    if (HP/2 < hp_H) {
        return hp_H = HP
    } else if (HP/2 > hp_H) {
        return hp_H += (HP/2)
    } else {
        console.log("You miss this round")
        return hp_H
    }
}

export function Escape_dif() {//Permet de s'echapper en difficile
    console.log("You left the game");
    console.clear()
    return h.Base()
  }
  
export function Protect_B_dif(randB: number, hp_H: number) {//Permet de se protect en difficile contre Boss
    hp_H +=(h.fichB[randB].str) - (h.fichB[randB].str/2)
    return hp_H
} // Protection contre les bosses.
  
export function Protect_E_dif(randE: number, hp_H: number) {//Permet de se protect en difficile contre ennemie
    hp_H +=(h.fichB_E[randE].str) - (h.fichB_E[randE].str/2)
    return hp_H
} // Protection contre les monstres.

export function Attack_ins(strH: number, hp_BE: number) {//Permet de se battre en insane contre ennemi
    return hp_BE -= strH*2
}

export function AttackB_ins(strH: number, hp_B: number) {//Permet de se battre en insane contre Boss
    return hp_B -= strH*2
}
