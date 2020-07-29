const value = document.getElementById("clicker__counter");
const pic = document.getElementById("cookie");
let variable = true;
let speedClicks = [];

pic.onclick = function() {
    value.textContent++;
    speedClicks.push(+new Date());
    if (speedClicks.length > 2) {
        speedClicks.shift();
    }
    speedClicks.length === 1 ? document.getElementById('clicker__speed').textContent = '-' : document.getElementById('clicker__speed').textContent = (1 / ((speedClicks[1] - speedClicks[0]) / 1000)).toFixed(2);
    
    if(variable) {
        pic.width = 300;
        variable = false;
    }
    else {
        pic.width = 200;
        variable = true;
    }
};
