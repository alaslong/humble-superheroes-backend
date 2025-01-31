import { Router, Request, Response } from "express";
import { SuperheroSchema } from "../schemas/superhero.schema";
import { SuperheroService } from "../services/superhero.service";

// Setting up superhero route using Router.
const router = Router();
// POST /superheroes - Adds a superhero to the superheroes array.
router.post("/", (req: Request, res: Response) => {

  try {
    // Validate the request body to ensure the data meets the requirements of the schema.
    const validatedData = SuperheroSchema.parse(req.body);

    // If successful, add the data to the superheroes array.
    const newHero = SuperheroService.create(validatedData); // 👈 Use service

    // Send a success response including the data added.
    res.status(201).json(newHero);

  // If unsuccessful, handle error response.
  } catch (error: unknown) {
    if (error instanceof Error) {

      // If error is from Zod, due to the schema validation, return the error as is.
      if (error.name === "ZodError") {
        res.status(400).json(error);

      // If the error is not from Zod, return unexpected error message.
      } else {
        res.status(400).json({ error: "An unexpected error occurred" });
      }
    }
  }

});

// GET /superheroes - Returns superheroes in the superheroes array.
router.get("/", (req: Request, res: Response) => {
  const sortedSuperheroes = SuperheroService.read();
  res.json(sortedSuperheroes);
});

export default router;
