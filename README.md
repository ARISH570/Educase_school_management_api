1. School Management API

2. Tech Stack

* Node.js
* Express.js
* MySQL (Railway)
* Render (Deployment)

3. Features

* Add School API
* List Schools sorted by proximity
* Input validation
* RESTful API design

4. Setup Instructions

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

5. Deployment Details

Backend Hosting

* Deployed on Render
* Live API:
  Base URl : https://educase-school-management-api-nvly.onrender.com
  Test Endpoint: https://educase-school-management-api-nvly.onrender.com/api/listSchools?latitude=28.7&longitude=77.1

Database

* MySQL hosted on Railway
* Cloud database used for production

Environment Configuration

* Local: uses `.env` with MySQL
* Production: uses `MYSQL_PUBLIC_URL`

6. API Endpoints

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

7. Postman Collection

* Included in repository: `postman_collection.json`

8. Notes

* Distance calculated using Haversine formula
* Modular MVC structure
* Deployed and accessible online
