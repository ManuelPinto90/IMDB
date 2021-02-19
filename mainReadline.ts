import { IMDB } from "./claseIMDB";
import { Movie } from "./claseMovie";

var readlineSync = require('readline-sync');

var titulo = readlineSync.question('¿Cual es el título? ');
var releaseYear = readlineSync.question('¿En qué año se estrenó?');
var nationality = readlineSync.question('¿De qué pais?')
var genre = readlineSync.question('¿De qué genero es?')

let nuevaPeli: Movie = new Movie(titulo, releaseYear, nationality, genre)

let nuevoIMDB: IMDB = new IMDB([])
nuevoIMDB = nuevoIMDB.obtenerInstaciaIMDB("imdbBBDD.json")

nuevoIMDB.peliculas.push(nuevaPeli)

console.log(nuevoIMDB);

nuevoIMDB.escribirEnFicheroJSON("imdbBBDD.json")



