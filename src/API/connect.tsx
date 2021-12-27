import axios from 'axios';


const reservados = axios.create({
    baseURL: 'api_user',
    
});


export default reservados;