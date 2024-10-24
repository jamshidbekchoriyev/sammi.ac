"use strict"

// const age = +prompt("How old are you?", "22");
// console.log(age)

// interpolatsiya
// const channel = prompt("what's your favourite youtuber?")
// console.log(`https://youtube.com/ ${channel}`)

// shartli operatorlar
// if(age > 25) {
//     console.log("Horror films")
// } else{
//     console.log("cartoon")
// }

// age > 25 ? console.log("Horror films") : console.log("cartoon");

// const color = "black";
// switch(color){
//     case "red":
//         console.log("stop")
//     break;
//     case "yellow":
//         console.log("prepare")
//     break;
//     case "green":
//         console.log("GO")
//     break;
//         default: console.log("go to doctor daltonik")
//     break;
// }


// amaliyot
const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
const SeriesDb = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};
const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt("Nechi baho berasiz?"),
    c = prompt("Oxirgi ko'rgan serialingiz?"),
    d = prompt("Nechi baho berasiz?");

SeriesDb.series[a] = b;
SeriesDb.series[c] = d;

console.log(SeriesDb)