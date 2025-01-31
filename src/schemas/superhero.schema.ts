import { z } from "zod";

// Zod schema to ensure new superheroes have a name, superpower, and humility score between 1 and 10.
export const SuperheroSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  superpower: z.string().min(1, {
    message: "Superpower is required.",
  }),
  humilityScore: z
    .number()
    .max(10, { message: "Humility score cannot be more than 10." })
    .min(1, { message: "Humility score must be at least 1." }),
});

// Export zod schema as TS type to define the Superhero object structure.
export type Superhero = z.infer<typeof SuperheroSchema>;