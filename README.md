 Task Management API Documentation
 ![Screenshot 2023-12-17 022437](https://github.com/Debiprasad2002/TaskmanagementAPI/assets/113724999/221c1776-74fd-4156-ad44-348931ddc542)


 Overview
The Task Management API enables CRUD operations on tasks, implementing user authentication. It's built utilizing Node.js, Express.js, MongoDB, and Mongoose.

 Folder Structure
TaskManagementAPI
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   └── auth.js
├── middlewares/
│   └── authenticateToken.js
├── tests/ (optional - for unit tests)
├── index.js
└── package.json
 Dependencies
- Express: `^4.18.2`
- Mongoose: `^8.0.3`
- MongoDB: `^6.3.0`
- JSON Web Token (jsonwebtoken): `^9.0.2`
- Bcrypt.js: `^2.4.3`

 Main Components

 Models
 Task Schema
- **Attributes**: Title, Description, Due Date, Status, User Reference.

 User Schema
- **Fields**: Username, Password, Admin Status.

 Routes
 Authentication Routes (`/auth`)
- **POST /register**: Registers a new user.
- **POST /login**: Authenticates a user and generates a JWT token.

 Middleware
JWT Authentication (`authenticateToken.js`)
- Validates JWT tokens.

 MongoDB Connection
- Connects to MongoDB using the provided URI.

 API Routes
 `/tasks`
- **GET**: Retrieves tasks from the Taskmanagement collection.

 Usage
1. **Start Server**: Execute `node index.js` to initiate the server.
2. **API Endpoints**:
   - `POST /auth/register`: Registers a new user.
   - `POST /auth/login`: Authenticates a user and generates a JWT token.
   - `GET /tasks`: Fetches tasks from the database.
