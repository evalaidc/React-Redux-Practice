import axios from 'axios';

//creates instance of axios with default properties - customized instance
axios.create({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8376644ee9b97c77bd1af4155d1d5a07631a98cca889682bf2c57d303d8c14ae'
    }
})