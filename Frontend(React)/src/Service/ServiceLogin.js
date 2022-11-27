import axios from 'axios'

const loginBaseUrl ='http://localhost:8080/api/faculty/verify'

const login = async (Credentials) => {
    console.log(Credentials)
    const response = await axios.post(loginBaseUrl,Credentials)
    console.log(response)
    return response
}
const exportObject ={login}
export default exportObject