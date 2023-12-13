import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getProjects = () => api.get(`/projects`)
export const getProject = id => api.get(`/project/${id}`)
export const getCategories = () => api.get(`/categories`)
export const getCategory = id => api.get(`/category/${id}`)

const apis = {
    getProjects,
    getProject,
    getCategories,
    getCategory,
}

export default apis