# Wanderlust

Wanderlust is a full-stack travel listing web application inspired by Airbnb. Users can browse stays, view listing details, sign up or log in, create and manage their own listings, upload listing images, and leave reviews with ratings.

## Features

- Browse all travel listings
- View detailed listing pages with image, location, price, host, reviews, and map
- User authentication with signup, login, and logout
- Create, edit, and delete listings
- Upload listing images using Cloudinary
- Add and delete reviews with star ratings
- Authorization checks for listing owners and review authors
- Flash messages for success and error feedback
- Server-side validation using Joi
- MongoDB session storage with `connect-mongo`
- Map display using Mapbox

## Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- EJS and EJS Mate
- Bootstrap
- Passport.js
- Passport Local Mongoose
- Cloudinary
- Multer
- Mapbox
- Joi

## Project Structure

```text
WANDERLUST/
|-- app.js
|-- cloudConfig.js
|-- middleware.js
|-- schema.js
|-- controllers/
|-- models/
|-- routes/
|-- views/
|-- public/
|   |-- css/
|   `-- js/
|-- init/
|-- .env.example
`-- package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd WANDERLUST
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your environment file

Create a `.env` file in the project root. You can copy the keys from `.env.example`.

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
```

### 4. Start the server

```bash
npm start
```

The app runs on:

```text
http://localhost:8080
```

## Main Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/listings` | Show all listings |
| GET | `/listings/new` | Show new listing form |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Show listing details |
| GET | `/listings/:id/edit` | Show edit listing form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |
| POST | `/listings/:id/reviews` | Add a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |
| GET | `/signup` | Show signup form |
| POST | `/signup` | Create a user account |
| GET | `/login` | Show login form |
| POST | `/login` | Log in a user |
| GET | `/logout` | Log out a user |

## Environment Variables

This project requires the following environment variables:

| Variable | Purpose |
| --- | --- |
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token |

Do not commit your `.env` file. Use `.env.example` to show required keys without exposing secrets.

## Security Notes

- Rotate any secret that was ever pushed to GitHub.
- Keep `.env` ignored by Git.
- Use strong values for `SECRET`.
- Restrict third-party API keys where possible.

## Author

Built by Binay Bhusan Mohanta.
