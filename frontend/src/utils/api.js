import { handleGetCategories } from "../actions/categories";
import { handleGetPosts } from '../actions/posts';

export function getInitialData() {
    return Promise.all([
        handleGetCategories(),
        handleGetPosts(),
    ]).then(([categories, posts]) => ({
        categories: categories.categories,
        posts
    }))
}