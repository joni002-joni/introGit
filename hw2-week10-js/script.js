let course = prompt("Курс нөмірін енгізіңіз (1, 2, 3 / 4):");
let isAlmaty = prompt("Сіз Алматыдан келдіңіз бе? (yes / no)");

if ((course == 1 || course == 2 ) && isAlmaty == "no") {
        
            alert("Сізге жатақханадан орын беріледі.");
        
        }
 else {
        alert("Сізге жатақхана берілмейді.");
}

alert("Ойын шарты : әрбір дұрыс жауап үшін 1 ұпай беріледі.");

let surak1 = prompt("Қазақстанның тәуелсіздік алған жылы:");
let surak2 = prompt("Қазір оқып жатқан қалаңыз:");

let score = 0;

if (surak1 == "1991") {
    score += 1;
}

if (surak2 == "Almaty") {
    score += 1;
}

alert("Сіздің жинаған ұпайыңыз: " + score);