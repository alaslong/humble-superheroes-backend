import express, { Request } from 'express';
import cors from 'cors';
import superheroesRoute from './routes/superheroes.route';

// Configure the Express server and superheroes route.
const app = express();
app.use(express.json());
app.use(cors<Request>())
app.use('/superheroes', superheroesRoute);

// Use port 3000 unless explicitly defined in .env file.
const port = process.env.PORT || 3000;

// Start server listning
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export app for Jest
export default app
