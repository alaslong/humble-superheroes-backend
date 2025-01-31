// supertest allows us to simulate HTTP requests without manually starting/stopping the server.
import request from "supertest";
import app from "../index";
import { SuperheroService } from "../services/superhero.service";

// This is a test for the /superheroes API route.
describe("/superheroes route", () => {
  // After each test, we call reset on the SuperheroService to reset the superheroes array to [].
  afterEach(() => {
    SuperheroService.reset();
  });

  // This test is for sending a POST request to /superheroes to add a new superhero.
  describe("POST /superheroes", () => {
    it("creates a superhero with valid data", async () => {
      // The data for Superman meets all validation requirements.
      const validData = {
        name: "Superman",
        superpower: "Flying",
        humilityScore: 8,
      };

      // Sending the POST request through the /superheroes route.
      const response = await request(app)
        .post("/superheroes")
        .send(validData)

        // We expect to receive a 201 status code as the request should be successful.
        .expect(201);

      // We expect the response body to also contain the data of the added superhero.
      expect(response.body).toEqual(validData);
    });

    it("rejects humility scores that aren't between 1 and 10", async () => {
      const invalidData = {
        name: "Megamind",
        superpower: "Thinking",
        humilityScore: 0, // Invalid as value is less than 1
      };

      // Sending the POST request through the /superheroes route.
      const response = await request(app)
        .post("/superheroes")
        .send(invalidData)

        // We expect to receive a 400 status code as the request should be unsuccessful.
        .expect(400);

      // We expect the response to contain the error message defined in the superhero schema.
      expect(response.body.issues).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            message: "Humility score must be at least 1.",
            path: ["humilityScore"],
          }),
        ])
      );
    });
  });

  describe("GET /superheroes", () => {
    it("returns superheroes sorted by humility in descending order", async () => {
      /* Create superheroes directly through the service to skip data validation
      Please note the order of which the superheroes are created - one with a lower humility score first, followed by another with a higher score.
      This means that within the superheroes array, they will be stored in that order. */
      SuperheroService.create({
        name: "The Joker",
        superpower: "Insanity",
        humilityScore: 3,
      });
      SuperheroService.create({
        name: "Batman",
        superpower: "Compassion",
        humilityScore: 9,
      });

      // The GET request to /superheroes calls the read function of the SuperheroService, which returns sortedSuperheroes.
      const response = await request(app).get("/superheroes").expect(200);

      // We expect the response to contain the superheroes we added earlier, but with the humility score sorted in descending order.
      expect(response.body).toEqual([
        { name: "Batman", superpower: "Compassion", humilityScore: 9 },
        { name: "The Joker", superpower: "Insanity", humilityScore: 3 },
      ]);
    });
  });
});
