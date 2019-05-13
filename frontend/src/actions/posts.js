import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
const endpoint = 'http://localhost:3001/posts';

export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post) {

}

export function handleGetPosts() {
    return fetch(endpoint, { headers: { 'Authorization': 'Basic dWRhY2l0eTpuYW5vZGVncmVl' } })
        .then((data) => data.json())
}