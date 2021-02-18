import { Professional } from "./claseProfessional"
import { Movie } from "./claseMovie";

export class IMDB{
    //Atributos
    public peliculas: Movie[]

    //Constructor
    constructor (peliculas: Movie[]){
        this.peliculas = peliculas
    }

    //Metodos públicos
    public escribirEnFicheroJSON(nombreFichero: string){
        const fs = require('fs')

        let output = JSON.stringify(this)

        fs.writeFileSync(nombreFichero, output)
    }

    public obtenerInstaciaIMDB(nombreFichero: string): IMDB{
        const fs = require('fs')

        let input = fs.readFileSync(nombreFichero,  "utf8")

        let newThis: IMDB = new IMDB(JSON.parse(input).peliculas)

        return newThis
    }
}