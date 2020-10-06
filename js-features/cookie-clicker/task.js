"use strict";

const clicksNumber = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");
const speedClicks = document.getElementById("clicker__speed");
let speedsBasket = [];
let variable = true;

function clicksAndChanges () {
    clicksNumber.textContent++;
    if(variable) {
        img.width = 250;
        variable = false;
    }
    else {
        img.width = 200;
        variable = true;
    }
    speedsBasket.push(+new Date());
    if (speedsBasket.length > 2) {
        speedsBasket.shift();
    }
    speedsBasket.length === 1 ? speedClicks.textContent = '-' : speedClicks.textContent = (1 / ((speedsBasket[1] - speedsBasket[0]) / 1000)).toFixed(2);
};

img.onclick = clicksAndChanges;
