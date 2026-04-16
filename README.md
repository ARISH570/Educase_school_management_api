# School Management API

## Tech Stack

* Node.js
* Express.js
* MySQL (Railway)
* Render (Deployment)

## Features

* Add School API
* List Schools sorted by proximity
* Input validation
* RESTful API design

## Setup Instructions

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file:

   ```env
   DB_HOST=localhost
   DB_USER=your_user
   DB_PASS=your_password
   DB_NAME=your_db
   DB_PORT=3306
   ```
4. Run the server:

   ```bash
   node src/server.js
   ```

## Deployment Details

Backend Hosting

* Deployed on Render
* Live API:
  https://educase-school-management-api-nvly.onrender.com

Database

* MySQL hosted on Railway
* Cloud database used for production

Environment Configuration

* Local: uses `.env` with MySQL
* Production: uses `MYSQL_PUBLIC_URL`

## API Endpoints

Add School
POST `/api/addSchool`

```json
{
  "name": "Sample School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

List Schools
GET `/api/listSchools?latitude=28.7&longitude=77.1`

## Postman Collection

* Included in repository: `postman_collection.json`

## Notes

* Distance calculated using Haversine formula
* Modular MVC structure
* Deployed and accessible online
