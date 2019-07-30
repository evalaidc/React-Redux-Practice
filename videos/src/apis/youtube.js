import axios from 'axios';

const KEY = 'AIzaSyAgPKxDx_vuJIveMPtL8Q7GGbsVuiHyRl4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})