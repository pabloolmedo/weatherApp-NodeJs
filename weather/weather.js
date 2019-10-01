const axios = require('axios');

const getWeather = async(lat, lon) => {
    const encodedUrl = encodeURI()
    const apiKey = '667b3badbca59f33cecf7ca17ccb22dc';

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

    return res.data.main.temp;
}

module.exports = {
    getWeather
}