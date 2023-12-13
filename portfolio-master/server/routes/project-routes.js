const express = require('express')
const router = express.Router()


const ProjectController = require('../controllers/project-controller')

router.post('/project', ProjectController.createProject)
router.put('/project/:id', ProjectController.updateProject)
router.delete('/project/:id', ProjectController.deleteProject)
router.get('/project/:id', ProjectController.getProjectById)
router.get('/projects', ProjectController.getProjects)


module.exports = router