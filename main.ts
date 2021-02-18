//Archivo principal codigo
import {Professional}from"./claseProfessional"
import { Movie } from "./claseMovie";
import {IMDB} from "./claseIMDB";

//Profesionales
let diCaprio : Professional = new Professional("Leonardo di Caprio",48,"Male",80,1.82,"Blondy", "Blue", "Aria", false, "Yankee",12,"Actor")
let markHamill: Professional = new Professional("Mark Hammill", 69, "male", 80, 172, "brown", "blue", "caucasian", false, "US citizen",0, "Actor")
let carrieFisher: Professional = new Professional("Carrie Fisher", 60, "female", 65, 162, "grey", "brown", "caucasian", true, "US citizen", 0, "Actress")
let harrisonFord: Professional = new Professional("Harrison Ford", 78, "male", 92, 178, "grey", "black", "caucasian", false, "US citizen", 0, "Actor")
let georgeLucasD: Professional = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director")
let georgeLucasW: Professional = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director")
let karraElejalde: Professional = new Professional("Karra Elejalde", 60, "male", 110, 183, "black", "black", "caucasian", false, "Spanish", 0, "Actor")
let eduardFernandez: Professional = new Professional("Eduard Fernandez", 56, "male", 74, 170, "brown", "black", "caucasian", false, "Spanish", 0, "Actor")
let alejandroAmenabarD: Professional = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Director")
let alejandroAmenabarW: Professional = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Writer")
let chrisEvans: Professional = new Professional("Chris Evans", 39, "male", 90, 184, "brown", "green", "caucasian", false, "US citizen", 0, "Actor")
let robertDowneyJr: Professional = new Professional("Robert Downey Jr", 55, "male", 86, 179, "brown", "brown", "caucasian", false, "US citizen", 0, "Actor")
let scarlettJohansson: Professional = new Professional("Scarlett Johansson", 36, "female", 68, 165, "blond", "brown", "caucasian", false, "US citizen", 0, "Actress")
let tomHolland: Professional = new Professional("Tom Holland", 24, "male", 80,180, "brown", "brown", "caucasian", false, "English", 0, "Actor")
let russoBrothers: Professional = new Professional("Anthony Russo & Joe Russo", 100, "male", 180, 180, "grey", "black", "caucasian", false, "US citizen", 0, "Director")
let stephenMcFeely: Professional = new Professional("Stephen McFeely", 51, "male", 67, 162, "red", "blue", "caucasian", false, "English", 0 , "Writer")
let michaelBeck : Professional = new Professional("Michael Beck", 72,"Male", 84, 186, "Brown", "Brown", "caucasian", true, "US citizen", 0 , "Actor")
let davidHarrys : Professional = new Professional("David Harris", 61, "Male", 76, 178, "Bald", "Brown", "Black", false, "US citizen", 0 , "Actor")
let walterHill : Professional = new Professional("Walter Hill", 79, "Male",80, 172, "White", "Green", "caucasian", true, "US citizen", 0 , "Director")
let davidShaber : Professional = new Professional("David Shaber", 70, "Male", 70, 175, "Brown", "Brown", "caucasian", true, "US citizen", 0 , "Writer")
let chrisPratt : Professional = new Professional("Chris Pratt", 41, "Male", 90, 191, "Blondy", "Green", "Nordic", false, "US citizen", 0, "Actor")
let zoeSaldanya : Professional = new Professional("Zoe Yadira Saldanya Nazario", 42, "Female", 54, 170, "Black", "Brown", "Black", false, "US citizen", 0, "Actress")
let jamesGunn : Professional = new Professional("James Gunn", 54, "male", 69, 170, "Brown", "Green", "caucasian", false, "US citizen", 0 , "Director")
let nicolePerlman : Professional = new Professional("Nicole Perlman", 39, "Female", 60, 165, "Blond", "Green", "caucasian", false , "Us citizen", 0, "Writer")
let belenRueda : Professional = new Professional("Maria Belen Rueda Garcia-Porrero", 55 , "Female", 56, 168, "Blond", "Green", "caucasian", false , "Spanish", 0, "Actress")
let ernestoAlterio : Professional = new Professional("Ernesto Federico Alterio Bacaicoa", 50, "Male", 68, 177, "Hoary", "Green", "caucasian", false, "Argentinian", 0, "Actor")
let alexDeLaIglesia : Professional = new Professional("Alejandro de La Iglesia Mendoza", 55, "Male", 90, 171, "Hoary", "Black", "caucasian", false , "Spanish", 0, "Director")
let jorgeGuerricaechevarría : Professional = new Professional("Jorge Guerricaechevarría", 56, "Male", 75, 175, "Bald", "Green", "caucasian", false, "Spanish", 0 , "Writer")

//Peliculas
let starwarsIV: Movie = new Movie("Star Wars", 1977, "EEUU", "Sci-fy action")
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

let theWarriors : Movie = new Movie("The Warriors", 1979, "EE.UU.", "Action")
theWarriors.actors = []
theWarriors.actors.push(michaelBeck, davidHarrys)
theWarriors.director = walterHill
theWarriors.writer = davidShaber
theWarriors.language = "English"
theWarriors.platform = "Movistar"
theWarriors.isMCU= false
theWarriors.mainCharacterName = "Ajax"
theWarriors.producer = "Paramount Pictures"
theWarriors.distributor = "Paramount Pictures"

let guardiansOfTheGalaxy : Movie = new Movie("Los Guardianes De La Galaxia",2014, "EE.UU.", "Sci-fy action")
guardiansOfTheGalaxy.actors = []
guardiansOfTheGalaxy.actors.push(chrisPratt,zoeSaldanya)
guardiansOfTheGalaxy.director = jamesGunn
guardiansOfTheGalaxy.writer = nicolePerlman
guardiansOfTheGalaxy.language = "English"
guardiansOfTheGalaxy.platform = "Netflix"
guardiansOfTheGalaxy.isMCU = true
guardiansOfTheGalaxy.mainCharacterName = "Star Lord"
guardiansOfTheGalaxy.producer = "Marvel Studios"
guardiansOfTheGalaxy.distributor = "Walt Disney Studios Motion Pictures"

let perfectosDesconocidos : Movie = new Movie("Perfectos desconocidos", 2017, "España", "Comedia")
perfectosDesconocidos.actors = []
perfectosDesconocidos.actors.push(belenRueda,ernestoAlterio)
perfectosDesconocidos.director = alexDeLaIglesia
perfectosDesconocidos.writer = jorgeGuerricaechevarría
perfectosDesconocidos.language = "Spanish"
perfectosDesconocidos.platform = "HBO"
perfectosDesconocidos.isMCU = false
perfectosDesconocidos.mainCharacterName = "Los moviles"
perfectosDesconocidos.producer = "Telecinco Cinema"
perfectosDesconocidos.distributor = "Universal Pictures"

// Pruebas metodos clases Movie y Professional

console.log(diCaprio.showProfessional())
console.log(perfectosDesconocidos.showMovie())

// Creación clase IMDB

let videoclub : IMDB = new IMDB([starwarsIV, mientrasDureLaGuerra, civilWar, avengersEndgame, theWarriors, guardiansOfTheGalaxy,perfectosDesconocidos])
console.log(videoclub)

console.log(videoclub.peliculas[3].language)
console.log(videoclub.peliculas[0].director.showProfessional())


// Parte avanzada. Conversion a JSON
let fs = require('fs')
let videoclubJson = JSON.stringify(videoclub)


fs.writeFileSync('imdbBBDD.json', videoclubJson)

let ficheroJson = fs.readFileSync('imdbBBDD.json','utf-8')
console.log(ficheroJson)

let input = JSON.parse(ficheroJson).peliculas 

let nuevaImdb : IMDB = new IMDB (input)
console.log(nuevaImdb)
