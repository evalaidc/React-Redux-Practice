import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    // dispatch - can pass actions in dispatch function - unlimited power to change data in redux - change data
    // getState - returns state of redux store - read data
    // redux thunk - allows us to return values of the inner function.
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    };
};
