"use strict";
exports.__esModule = true;
exports.AttackB_ins = exports.Attack_ins = exports.Protect_E_dif = exports.Protect_B_dif = exports.Escape_dif = exports.Heal_dif = exports.AttackB_dif = exports.Attack_dif = exports.Protect_E = exports.Protect_B = exports.Escape = exports.Heal = exports.AttackB = exports.Attack = void 0;
var h = require("./hyrule_castle");
function Attack(strH, hp_BE) {
    return hp_BE -= strH;
}
exports.Attack = Attack;
function AttackB(strH, hp_B) {
    return hp_B -= strH;
}
exports.AttackB = AttackB;
function Heal(HP, hp_H) {
    if (HP / 2 < hp_H) {
        return hp_H = HP;
    }
    else if (HP / 2 > hp_H) {
        return hp_H += (HP / 2);
    }
    else {
        console.log("You miss this round");
        return hp_H;
    }
}
exports.Heal = Heal;
function Escape() {
    console.log("You left the game");
    console.clear();
    return h.Base();
}
exports.Escape = Escape;
function Protect_B(randB, hp_H) {
    hp_H += (h.fichB[randB].str) - (h.fichB[randB].str / 2);
    return hp_H;
} // Protection contre les bosses.
exports.Protect_B = Protect_B;
function Protect_E(randE, hp_H) {
    hp_H += (h.fichB_E[randE].str) - (h.fichB_E[randE].str / 2);
    return hp_H;
} // Protection contre les monstres.
exports.Protect_E = Protect_E;
function Attack_dif(strH, hp_BE) {
    return hp_BE -= strH * 1.5;
}
exports.Attack_dif = Attack_dif;
function AttackB_dif(strH, hp_B) {
    return hp_B -= strH * 1.5;
}
exports.AttackB_dif = AttackB_dif;
function Heal_dif(HP, hp_H) {
    if (HP / 2 < hp_H) {
        return hp_H = HP;
    }
    else if (HP / 2 > hp_H) {
        return hp_H += (HP / 2);
    }
    else {
        console.log("You miss this round");
        return hp_H;
    }
}
exports.Heal_dif = Heal_dif;
function Escape_dif() {
    console.log("You left the game");
    console.clear();
    return h.Base();
}
exports.Escape_dif = Escape_dif;
function Protect_B_dif(randB, hp_H) {
    hp_H += (h.fichB[randB].str) - (h.fichB[randB].str / 2);
    return hp_H;
} // Protection contre les bosses.
exports.Protect_B_dif = Protect_B_dif;
function Protect_E_dif(randE, hp_H) {
    hp_H += (h.fichB_E[randE].str) - (h.fichB_E[randE].str / 2);
    return hp_H;
} // Protection contre les monstres.
exports.Protect_E_dif = Protect_E_dif;
function Attack_ins(strH, hp_BE) {
    return hp_BE -= strH * 2;
}
exports.Attack_ins = Attack_ins;
function AttackB_ins(strH, hp_B) {
    return hp_B -= strH * 2;
}
exports.AttackB_ins = AttackB_ins;
