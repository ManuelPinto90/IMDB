//Archivo principal codigo
import {Professional}from"./claseProfessional"
import { Movie } from "./claseMovie";

let starwars: Movie = new Movie("Star Wars", 1979, "EEUU", "Sci-fy")
console.log(starwars.showMovie());

let theWarriors : Movie = new Movie("The Warriors", 1979, "EE.UU.", "Action")
let michaelBeck : Professional = new Professional("Michael Beck", 72,"Male", 84, 186, "Brown", "Brown", "Caucasic", true, "US cityzen", 0 , "Actor")
let davidHarrys : Professional = new Professional("David Harris", 61, "Male", 76, 178, "Bald", "Brown", "Black", false, "US cityzen", 0 , "Actor")
let walterHill : Professional = new Professional("Walter Hill", 79, "Male",80, 172, "White", "Green", "Caucasic", true, "US cityzen", 0 , "Director")
let davidShaber : Professional = new Professional("David Shaber", 70, "Male", 70, 175, "Brown", "Brown", "Caucasic", true, "US cityzen", 0 , "Writer")
theWarriors.actors = []
theWarriors.actors.push(michaelBeck, davidHarrys)
theWarriors.director = walterHill
theWarriors.writer = davidShaber
theWarriors.language = "English V.O."
theWarriors.platform = "Movistar"
theWarriors.isMCU= false
theWarriors.mainCharacterName = "Ajax"
theWarriors.producer = "Paramount Pictures"
theWarriors.distributor = "Paramount Pictures"

let guardiansOfTheGalaxy : Movie = new Movie("Los Guardianes De La Galaxia",2014, "EE.UU.", "Scy-fy action")
let chrisPratt : Professional = new Professional("Chris Pratt", 41, "Male", 90, 191, "Blondy", "Green", "Nordic", false, "US cityzen", 0, "Actor")
let zoeSaldanya : Professional = new Professional("Zoe Yadira Saldanya Nazario", 42, "Female", 54, 170, "Black", "Brown", "Black", false, "US cityzen", 0, "Actress")
let jamesGunn : Professional = new Professional("James Gunn", 54, "male", 69, 170, "Brown", "Green", "Caucasic", false, "US cityzen", 0 , "Director")
let nicolePerlman : Professional = new Professional("Nicole Perlman", 39, "Female", 60, 165, "Blondie", "Green", "Caucasic", false , "Us cityzen", 0, "Writer")
guardiansOfTheGalaxy.actors = []
guardiansOfTheGalaxy.actors.push(chrisPratt,zoeSaldanya)
guardiansOfTheGalaxy.director = jamesGunn
guardiansOfTheGalaxy.writer = nicolePerlman
guardiansOfTheGalaxy.language = "English V.O."
guardiansOfTheGalaxy.platform = "Netflix"
guardiansOfTheGalaxy.isMCU = true
guardiansOfTheGalaxy.mainCharacterName = "Star Lord"
guardiansOfTheGalaxy.producer = "Marvel Studios"
guardiansOfTheGalaxy.distributor = "Walt Disney Studios Motion Pictures"

let perfectosDesconocidos : Movie = new Movie("Perfectos desconocidos", 2017, "España", "Comedia")
let belenRueda : Professional = new Professional("Maria Belen Rueda Garcia-Porrero", 55 , "Female", 56, 168, "Blondie", "Green", "Caucasic", false , "Spanish", 0, "Actress")
let ernestoAlterio : Professional = new Professional("Ernesto Federico Alterio Bacaicoa", 50, "Male", 68, 177, "Hoary", "Green", "Caucasic", false, "Argentinian", 0, "Actor")
let alexDeLaIglesia : Professional = new Professional("Alejandro de La Iglesia Mendoza", 55, "Male", 90, 171, "Hoary", "Black", "Caucasic", false , "Spanish", 0, "Director")
let jorgeGuerricaechevarría : Professional = new Professional("Jorge Guerricaechevarría", 56, "Male", 75, 175, "Bald", "Green", "Caucasic", false, "Spanish", 0 , "Writer")
perfectosDesconocidos.actors = []
perfectosDesconocidos.actors.push(belenRueda,ernestoAlterio)
perfectosDesconocidos.director = alexDeLaIglesia
perfectosDesconocidos.writer = jorgeGuerricaechevarría
perfectosDesconocidos.language = "Spanish V.O"
perfectosDesconocidos.platform = "HBO"
perfectosDesconocidos.isMCU = true
perfectosDesconocidos.mainCharacterName = "Los moviles"
perfectosDesconocidos.producer = "Telecinco Cinema"
perfectosDesconocidos.distributor = "Universal Pictures"






let diCaprio : Professional = new Professional("Leonardo di Caprio",48,"Male",80,1.82,"Blondy", "Blue", "Aria", false, "Yankee",12,"Actor")
console.log(diCaprio.showProfessional())
