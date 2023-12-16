const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// MongoDB Connection URI
const uri = 'mongodb://localhost:27017/TaskmanegementAPI'; // Update with your database name

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}


app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
  });

connectToDB();

// Define your routes and middleware here
app.use(express.json()); // Example of using JSON body parser middleware

// Define your API routes
app.get('/tasks', async (req, res) => {
  try {
    const database = client.db('TaskmanegementAPI');
    const collection = database.collection('Taskmanagement');

    // Perform MongoDB operations (e.g., find tasks, insert tasks) here

    res.status(200).json({ message: 'Tasks retrieved successfully' });
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
