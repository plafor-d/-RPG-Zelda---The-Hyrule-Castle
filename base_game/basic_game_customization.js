"use strict";
exports.__esModule = true;
exports.Text_Win = exports.Text_LOOSER = exports.Barre_Vie = exports.Select = exports.select_etage = exports.Intro = exports.Text = void 0;
var figlet = require('figlet');
var rls = require('readline-sync');
function Text() {
    console.log(figlet.textSync('Zelda', {
        font: '3D Diagonal',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
}
exports.Text = Text;
function Intro() {
    var menu = rls.question("1. New game!\n2. quit");
    if (menu === '2') {
        process.exit(0);
    }
}
exports.Intro = Intro;
function select_etage() {
    var etage_select = rls.question("===== CHOOSE HOW MANY STAGE =====\n1. 10\n2. 20\n3. 30\n4. 50\n5. 100");
    if (etage_select === '1') {
        etage_select = 10;
    }
    else if (etage_select === '2') {
        etage_select = 20;
    }
    else if (etage_select === '3') {
        etage_select = 30;
    }
    else if (etage_select === '4') {
        etage_select = 50;
    }
    else if (etage_select === '5') {
        etage_select = 100;
    }
    else {
        console.log("===// ERROR \\===");
        select_etage();
    }
    return etage_select;
}
exports.select_etage = select_etage;
function Select() {
    var mode = rls.question("===== CHOOSE YOUR MODE =====\n1. Normal\n2. Difficult\n3. Insane");
    return mode;
}
exports.Select = Select;
function Barre_Vie(emoji, PV, PV_perdu) {
    var barre = '';
    for (var barre_evolv = 0; barre_evolv < PV; barre_evolv += 1) {
        barre += "".concat(emoji);
    }
    for (var barre_enlev = 0; barre_enlev < PV_perdu; barre_enlev += 1) {
        barre += '🖤';
    }
    return barre;
}
exports.Barre_Vie = Barre_Vie;
function Text_LOOSER() {
    console.log(figlet.textSync('Looser', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
}
exports.Text_LOOSER = Text_LOOSER;
;
function Text_Win() {
    console.log(figlet.textSync('Looser', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
}
exports.Text_Win = Text_Win;
;
