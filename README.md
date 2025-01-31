# Humble Superheroes API

A simple RESTful API completed as part of the Humble Superheroes assignment for my application to eJam for the role of Fullstack Node.js Engineer, built with Express.js and TypeScript.

The API allows you to add new superheroes and retrieve a list of existing superheroes. I implemented Zod for data validation as I noticed it was mentioned in the job description.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Team Player Attitude](#team-player-attitude)
- [If I Had More Time](#if-i-had-more-time)

## Features

- **Add Superhero**: Create a new superhero with a name, superpower, and humility score.
- **List Superheroes**: Retrieve a list of superheroes sorted by humility score in descending order.
- **Data Validation**: Ensures that all inputs meet the required criteria using Zod.
- **Testing**: Tests using Jest to ensure API reliability.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alaslong/humble-superheroes-backend.git
   cd humble-superheroes-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

   The server will be running at [http://localhost:3000](http://localhost:3000).
    *Note: To start the server on a different port, create an env file and define PORT*

## Usage

Once the server is running, you can interact with the API using a tool such as [Postman](https://www.postman.com/) or via the [frontend](https://github.com/alaslong/humble-superheroes-frontend.git).

## API Endpoints

### `POST /superheroes`

**Description:** Adds a new superhero to the in-memory store.

**Request Body:**

- `name` (string, required): The name of the superhero.
- `superpower` (string, required): The superhero's superpower.
- `humilityScore` (number, required): A score between 1 and 10 representing the superhero's humility.

**Responses:**

- `201 Created`: Successfully created the superhero.
- `400 Bad Request`: Validation failed or unexpected error.

**Example:**

```json
{
  "name": "Batman",
  "superpower": "Compassion",
  "humilityScore": 9
}
```

### `GET /superheroes`

**Description:** Retrieves a list of all superheroes sorted by humility score in descending order.

**Responses:**

- `200 OK`: Successfully retrieved the list.

**Example Response:**

```json
[
  {
    "name": "Batman",
    "superpower": "Compassion",
    "humilityScore": 9
  },
  {
    "name": "The Joker",
    "superpower": "Insanity",
    "humilityScore": 3
  }
]
```

## Testing

The project includes tests written with Jest and Supertest to ensure the API behaves as expected.

### Running Tests

```bash
npm test
```

**Test Coverage:**

- **POST /superheroes**
  - Successfully creates a superhero with valid data.
  - Rejects humility scores that aren't between 1 and 10.
- **GET /superheroes**
  - Returns superheroes sorted by humility in descending order.

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript.
- **Zod**: Schema validation library.
- **Jest**: JavaScript testing framework.
- **Supertest**: For testing Express applications without manually running server.

## Team Player Attitude

Collaboration is key to successful project development. To improve or expand this task with a teammate, I would:

- **Persistent Storage**: Integrate a database like MongoDB or PostgreSQL to persist superhero data.
- **Filtering**: Add filtering queries to the `GET /superheroes` endpoint, e.g return superheroes with a humility score of less than 5.
- **Paired Programming**: Work on complex features together to encourage knowledge sharing and leverage each other's strengths.
- **Clear Communication**: Use tools like Notion or Jira to track and delegate tasks.

## If I Had More Time

Things I'd like to do:

- **Nest.js**: I'd try and rebuild the project using Nest.js as it was the suggested framework. I used Express as I am more familiar with it and wanted to complete the project faster.
- **Sorting**: Add sorting queries to the `GET /superheroes` endpoint, e.g return superheroes with names in alphabetical order.
- **Superhero IDs**: Implement IDs for each superhero object to enable PUT and DELETE functionality.