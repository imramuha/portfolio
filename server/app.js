const express = require('express');
const cors = require('cors');
const db = require('./services/db')

const app = express();
const apiPort = 3000

app.use(cors());
app.use(express.json());

// check whether the db connection was succesful or not
db.on('error', (error) => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected');
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(apiPort, () => {
    console.log(`Server is running on port: ${apiPort}`);
});


// import the routes files for projects and categories
const ProjectRoutes = require('./routes/project-routes')
const CategoryRoutes = require('./routes/category-routes')

app.use('/api', ProjectRoutes)
app.use('/api', CategoryRoutes)
