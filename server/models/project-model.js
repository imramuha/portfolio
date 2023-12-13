const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true},
    info: { type: String, required: true },
    github: { type: String, required: true },
    frontend: { type: String, required: true },
    backend: { type: String, required: true },
    categories: {type: Array, required: false}

}, { timestamps: true }, )

module.exports = mongoose.model('project', Project)