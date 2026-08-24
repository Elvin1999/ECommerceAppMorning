import axios from "axios";

const api=axios.create({
    baseURL:"https://localhost:7098/api"
});

export default api;