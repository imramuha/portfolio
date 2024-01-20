const express = require('express');
const cors = require('cors');
const db = require('./services/db');
const ProjectModel = require('./models/project-model')
const corn = cron = require('node-cron');

const app = express();
const apiPort = 3000;
const fs = require('fs');

app.use(cors());
app.use(express.json());

// check whether the db connection was successful or not
db.on('error', (error) => {
    console.log(error);
});

db.once('connected', async() => {
    console.log('Database Connected');

    try {
        // Drop the "projects" collection before seeding
        await db.dropCollection('projects');
        console.log('Collection "projects" dropped successfully');

    } catch (err) {
        console.log('Error dropping collection:', err);
    }
    // seed your database with dataProjects.json
    seedDatabase();
});

function seedDatabase() {
    // Read data from dataProjects.json
    try {
        const data = fs.readFileSync('./data/dataProjects.json', 'utf8');
        const projectsData = JSON.parse(data);

        // Insert data into the "projects" collection
        ProjectModel
            .insertMany(projectsData)
            .then((insertedProjects) => {
                console.log('Data inserted into projects collection:', insertedProjects);
            })
            .catch((insertErr) => {
                console.error('Error inserting data into projects collection:', insertErr);
            });
    } catch (err) {
        console.error('Error reading or parsing dataProjects.json:', err);
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(apiPort, () => {
    console.log(`Server is running on port: ${apiPort}`);
});

// ping server every 14minutes
cron.schedule('*/14 * * * *', () => {
    console.log('Stay awake');
    console.log(new Date().toString());
  });

// import the routes files for projects and categories
const ProjectRoutes = require('./routes/project-routes');
const CategoryRoutes = require('./routes/category-routes');

app.use('/api', ProjectRoutes);
app.use('/api', CategoryRoutes);