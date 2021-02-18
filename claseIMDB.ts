import { Professional } from "./claseProfessional"
import { Movie } from "./claseMovie";

export class IMDB{
    //Atributos
    public peliculas: Movie[]

    //Constructor
    constructor (peliculas: Movie[]){
        this.peliculas = peliculas
    }
}