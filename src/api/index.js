import axios from 'axios'

const url = 'https://memories-akbar.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = newPost => axios.post(url, newPost)
export const updatePost = (id, updatingPost) => axios.patch(`${url}/${id}`, updatingPost)
export const deletePost = id => axios.delete(`${url}/${id}`)
export const likePost = id => axios.patch(`${url}/${id}/likePost`)