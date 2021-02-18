import { Professional } from "./claseProfessional"

export class Movie{
    //Atributos
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string

    //Constructor
    constructor(title: string, releaseYear: number, nacionality: string, genre: string){
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nacionality
        this.genre = genre
    }

    //Metodo público
    public showMovie():string{
        return ` Title : ${this.title}\n Release Year :  ${this.releaseYear}\n Actors : ${this.actors}\n Nacionality : ${this.nationality}\n Director : ${this.director}\n Writer : ${this.writer}\n Language : ${this.language}\n Platform : ${this.platform}\n isMCU : ${this.isMCU}\n Main Character Name : ${this.mainCharacterName}\n Producer : ${this.producer}\n Distributor : ${this.distributor}\n Genre : ${this.genre}`
    }
}