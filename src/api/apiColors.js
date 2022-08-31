import axios from 'axios'

async function apiColors () {
    const response = await axios.get('/api/colores')
    return response.data
}

export default apiColors