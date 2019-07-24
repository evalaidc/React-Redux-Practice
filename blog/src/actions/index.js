import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    // dispatch - can pass actions in dispatch function - unlimited power to change data in redux - change data
    // getState - returns state of redux store - read data
    return function(dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');
    
        return {
            type: 'FETCH_POSTS',
            payload: promise
        } 
    }
}