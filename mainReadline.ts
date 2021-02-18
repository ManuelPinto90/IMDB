import { Movie } from "./claseMovie";

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo se llama la pelicula?', (answer1) => {
        const titulo = answer1;
        rl.question('¿En que año se estrenó?', (answer2) => {
            const anyo = answer2;
            rl.question('¿De qué país es?', (answer3) => {
                const nacionalidad = answer3  
                rl.question('¿De qué genero es?', (answer4) => {
                    const genero = answer4
                    const nuevaPelicula: Movie = new Movie(titulo, anyo, nacionalidad, genero)
                    console.log(nuevaPelicula);
                    rl.close();
                });
                rl.close();
                
            });
            rl.close();
        });
        rl.close();
        
    });

    
    




