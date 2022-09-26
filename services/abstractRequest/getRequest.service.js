import axios from 'axios'

export default function getRequest(apiUrl) {
    return axios.get(apiUrl, {
        auth: {
            username: 'any-user-name',
            password: process.env.API_KEY
        }
    })
}