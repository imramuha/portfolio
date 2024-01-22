const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
    name: { type: String },
    order: {type: Number},
    info: { type: String },
    logo: { type: String },
    year: { type: String },
    github: { type: String },
    frontend: { type: String },
    backend: { type: String},
    live: { type: String},
    status: { type: String},
    pdf: { type: String },
    media: { type: String },
    type: { type: String },
    categories: {type: Array, required: false}

}, { timestamps: true }, )

module.exports = mongoose.model('project', Project)