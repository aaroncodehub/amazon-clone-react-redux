import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/github-c5c88/us-central1/api'
})

export default instance;