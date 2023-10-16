import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'http://localhost:3000/api/',//declara a donde van a ser las peticiones siempre.(al back en el port 3000)
    headers:{
        'Content-Type':'application/json',//indica que los datos que vamos a enviar son de tipo json.
    }
})

export default axiosInstance