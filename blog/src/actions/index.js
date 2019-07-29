import jsonPlaceholder from '../apis/jsonPlaceholder';

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

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    return dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}