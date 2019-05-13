import { showLoading, hideLoading } from 'react-redux-loading';
import { getCategories } from './categories';
import { getPosts } from './posts';
import { getInitialData } from '../utils/api';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ categories, posts }) => {
                dispatch(getCategories(categories))
                dispatch(getPosts(posts))
                dispatch(hideLoading())
            })
    }
}