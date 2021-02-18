"use strict";
exports.__esModule = true;
exports.Professional = void 0;
//Archivo principal codigo
var Professional = /** @class */ (function () {
    //Constructor
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    //Metodo
    Professional.prototype.showProfessional = function () {
        return "Name : " + this.name + "\n" +
            "Age : " + this.age + "\n" +
            "Genre : " + this.genre + "\n" +
            "Weight : " + this.weight + "\n" +
            "Height : " + this.height + "\n" +
            "Hair Color : " + this.hairColor + "\n" +
            "Eye Color : " + this.hairColor + "\n" +
            "Race : " + this.race + "\n" +
            "Is retired : " + this.isRetired + "\n" +
            "Nationality : " + this.nationality + "\n" +
            "Oscar Number : " + this.oscarNumber + "\n" +
            "Profession : " + this.profession + "\n";
    };
    return Professional;
}());
exports.Professional = Professional;
