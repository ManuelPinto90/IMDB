//Archivo principal codigo
import {Professional}from"./claseProfessional"
import { Movie } from "./claseMovie";


//Profesionales
let diCaprio : Professional = new Professional("Leonardo di Caprio",48,"Male",80,1.82,"Blondy", "Blue", "Aria", false, "Yankee",12,"Actor")
let markHamill: Professional = new Professional("Mark Hammill", 69, "male", 80, 172, "brown", "blue", "caucasian", false, "US citizen",0, "Actor")
let carrieFisher: Professional = new Professional("Carrie Fisher", 60, "female", 65, 162, "grey", "brown", "caucasian", true, "US citizen", 0, "Actor")
let harrisonFord: Professional = new Professional("Harrison Ford", 78, "male", 92, 178, "grey", "black", "caucasian", false, "US citizen", 0, "Actor")
let georgeLucasD: Professional = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director")
let georgeLucasW: Professional = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director")
let karraElejalde: Professional = new Professional("Karra Elejalde", 60, "male", 110, 183, "black", "black", "caucasian", false, "Spanish", 0, "Actor")
let eduardFernandez: Professional = new Professional("Eduard Fernandez", 56, "male", 74, 170, "brown", "black", "caucasia", false, "Spanish", 0, "Actor")
let alejandroAmenabarD: Professional = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Director")
let alejandroAmenabarW: Professional = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Writer")
let chrisEvans: Professional = new Professional("Chris Evans", 39, "male", 90, 184, "brown", "green", "caucasian", false, "US citizen", 0, "Actor")
let robertDowneyJr: Professional = new Professional("Robert Downey Jr", 55, "male", 86, 179, "brown", "brown", "caucasian", false, "US citizen", 0, "Actor")
let scarlettJohansson: Professional = new Professional("Scarlett Johansson", 36, "female", 68, 165, "blonde", "brown", "caucasian", false, "US citizen", 0, "Actor")
let tomHolland: Professional = new Professional("Tom Holland", 24, "male", 80,180, "brown", "brown", "caucasian", false, "English", 0, "Actor")
let russoBrothers: Professional = new Professional("Anthony Russo & Joe Russo", 100, "male", 180, 180, "grey", "black", "caucasian", false, "US citizen", 0, "Director")
let stephenMcFeely: Professional = new Professional("Stephen McFeely", 51, "male", 67, 162, "red", "blue", "caucasian", false, "English", 0 , "Writer")

console.log(russoBrothers.showProfessional());


//Peliculas
let starwarsIV: Movie = new Movie("Star Wars", 1977, "EEUU", "Sci-fy")
starwarsIV.actors = []
starwarsIV.actors.push(markHamill, carrieFisher, harrisonFord)
starwarsIV.director = georgeLucasD
starwarsIV.writer = georgeLucasW
starwarsIV.language = "english"
starwarsIV.platform = "Disney+"
starwarsIV.isMCU = false
starwarsIV.mainCharacterName = "Luke Skywalker"
starwarsIV.producer = "Lucas Arts"
starwarsIV.distributor = "Lucas Films"
console.log(starwarsIV.showMovie());

let mientrasDureLaGuerra: Movie = new Movie("Mientras dure la guerra", 2019, "Spanish", "Drama")
mientrasDureLaGuerra.actors = [karraElejalde, eduardFernandez]
mientrasDureLaGuerra.director = alejandroAmenabarD
mientrasDureLaGuerra.writer = alejandroAmenabarW
mientrasDureLaGuerra.language = "Spanish"
mientrasDureLaGuerra.platform = "Netflix"
mientrasDureLaGuerra.isMCU = false
mientrasDureLaGuerra.mainCharacterName = "Miguel de Unamuno"
mientrasDureLaGuerra.producer = "Movistar+"
mientrasDureLaGuerra.distributor = "Buanavistacine"
console.log(mientrasDureLaGuerra.showMovie())

let civilWar: Movie = new Movie("Captain America: Civil War", 2016, "EEUU", "Action")
civilWar.actors = [chrisEvans, robertDowneyJr, scarlettJohansson, tomHolland]
civilWar.director = russoBrothers
civilWar.writer = stephenMcFeely
civilWar.language = "english"
civilWar.platform = "Disney+"
civilWar.isMCU = true
civilWar.mainCharacterName = "Captain America"
civilWar.producer = "Marvel Studios"
civilWar.distributor = "Walt Disney Studios"
console.log(civilWar.showMovie())

let avengersEndgame: Movie = new Movie("Avengers: Endgame", 2019, "EEUU", "Action")
avengersEndgame.actors = [chrisPratt, chrisEvans, robertDowneyJr, scarlettJohansson, tomHolland]
avengersEndgame.director = russoBrothers
avengersEndgame.writer = stephenMcFeely
avengersEndgame.language = "english"
avengersEndgame.platform = "Disney+"
avengersEndgame.isMCU = true
avengersEndgame.mainCharacterName = "Thanos"
avengersEndgame.producer = "Marvel Studios"
avengersEndgame.distributor = "Walt Disney Studios"
console.log(avengersEndgame.showMovie())

