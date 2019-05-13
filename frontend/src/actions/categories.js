import { showLoading, hideLoading } from "react-redux-loading";
const endpoint = 'http://localhost:3001/categories';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories(categories) {
    return {
        type: GET_CATEGORIES,
        categories,
    }

}

export function handleGetCategories() {
    return fetch(endpoint, { headers: { 'Authorization': 'Basic dWRhY2l0eTpuYW5vZGVncmVl' } })
        .then((data) => data.json())
}