const Project = require('../models/project-model')

createProject = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a Project',
            });
        }

        const project = new Project(body);

        const savedProject = await project.save();

        return res.status(201).json({
            success: true,
            id: savedProject._id,
            message: 'Project created!',
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

updateProject = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            });
        }

        const project = await Project.findOne({ _id: req.params.id });

        if (!project) {
            return res.status(404).json({
                message: 'Project not found!',
            });
        }

        project.name = body.name;
        project.info = body.info;
        project.categories = body.categories;
        console.log(project.categories);
        //project.github = body.github;

        console.log(project);
        await project.save();

        return res.status(200).json({
            success: true,
            id: project._id,
            message: 'Project updated!',
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

deleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id });

        if (!project) {
            return res.status(404).json({
                success: false,
                error: `Project not found`,
            });
        }

        return res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

getProjectById = async (req, res) => {
    try {
        const project = await Project.findById({ _id: req.params.id });

        if (!project) {
            return res.status(404).json({
                success: false,
                error: `Project not found`,
            });
        }

        return res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        if (!projects.length) {
            return res.status(404).json({ success: false, error: `Project not found` });
        }
        return res.status(200).json({ success: true, data: projects });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error.message });
    }
}

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getProjects,
    getProjectById,
}