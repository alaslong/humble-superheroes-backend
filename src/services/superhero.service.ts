import { Superhero } from "../schemas/superhero.schema";

// In-memory store - data will not persist if the server is restarted.
let superheroes: Superhero[] = [];

export const SuperheroService = {
  // Add a superhero to the superheroes array.
  create: (superhero: Superhero) => {
    superheroes.push(superhero);
    return superhero;
  },

  // Returns an array of superheroes, sorted by humility score in descending order.
  read: () => {
    const sortedSuperheroes = superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    return sortedSuperheroes
  },

  // Resets the array (for testing purposes).
  reset: () => {
    superheroes = [];
  },
};