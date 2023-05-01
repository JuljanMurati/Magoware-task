import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getPosts = async () => {
    const response = await axios.get(`${BASE_URL}/posts`)
    return response
}

export const updatePost = async (post) => {
    const response = await axios.put(`${BASE_URL}/posts/${post.id}` , post)
    return response
}

export const deletePost = async (id) => {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`)
    return response
}

export const createPost = async (post) => {
    const response = await axios.post(`${BASE_URL}/posts` , post)
    return response
}