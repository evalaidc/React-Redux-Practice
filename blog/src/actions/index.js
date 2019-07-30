import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
}

export const fetchPosts = () => async dispatch => {
    // dispatch - can pass actions in dispatch function - unlimited power to change data in redux - change data
    // getState - returns state of redux store - read data
    // redux thunk - allows us to return values of the inner function.
    const response = await jsonPlaceholder.get('/posts');

    return dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
};

// memoize - calls function only once and caches the list/request to be easily found
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// // allows us to memoize and have the request sent one time. - cannot recall, you will have to recreate another function if you want to call the reducer again.
// // memoize allows for it one time.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
    
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
    
// });