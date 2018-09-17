const axios = require('axios')


const apiKey = `1ea16d0900185861b2c28f4bc50fb6c3`
const getClima = async (lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
    
    if(resp.data.cod !== 200) {
        throw new Error(`Error desconocido ${resp.data.cod}`)
    }

    return resp.data.main.temp
}

module.exports = {
    getClima,
}