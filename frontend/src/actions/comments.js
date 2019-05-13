import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

function getComments(comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
}

function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

function handleAddComment(comment) {

}