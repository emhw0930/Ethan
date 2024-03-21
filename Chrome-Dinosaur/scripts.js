const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var ponts_t = document.getElementById("points")
var dead = document.getElementById("dead");
 

var maxPoints = 0;
var points = 0;
var alive = true;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

function toogleScreen (id, toggle) {
    let element = document.getElementById(id);
    let display = ( toggle ) ? 'block' : 'none';
    element.style.display = display;
}

function over() {
    toogleScreen('over', true);
}

function clearOver() {
    toogleScreen('over', false);
}


let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 43 && cactusLeft > 0 && dinoTop >= 133) {
        alive = false;

        dead.style.display = "block"; // Show the dead
        ponts_t.style.display = "none";

        // Hide the dead after 3 seconds
        setTimeout(function() {
            dead.style.display = "none";
            ponts_t.style.display = "block";
        }, 300); // 3000 milliseconds = 3 seconds

    }

    if (alive == false) {
        if (points > maxPoints) {
            maxPoints = points;
        }
        points = 0;
        ponts_t.innerHTML = ("HI: " + maxPoints + " | " + points);
        over();
        alive = true;
    }

    if (alive == true) {
        clearOver();
    }

}, 10);

let clockTime = setInterval(function() {
    points += 1;
    ponts_t.innerHTML = ("HI: " + maxPoints + " | " + points);
}, 200);



document.addEventListener("keydown", function (event) {
    jump();
  });



