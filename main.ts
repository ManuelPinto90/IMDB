//Archivo principal codigo
import {Professional}from"./claseProfessional"
import { Movie } from "./claseMovie";

let starwars: Movie = new Movie("Star Wars", 1979, "EEUU", "Sci-fy")
console.log(starwars.showMovie());

let diCaprio : Professional = new Professional("Leonardo di Caprio",48,"Male",80,1.82,"Blondy", "Blue", "Aria", false, "Yankee",12,"Actor")
console.log(diCaprio.showProfessional())
