const axios = require('axios');

const getPlaceLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,

        headers: { 'x-rapidapi-key': '64ec7fbcc4mshccc661e727e38e4p1ba32ejsn68ef6d90ee15' }
    });

    const res = await instance.get();

    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
        return;

    }
    const data = res.data.Results[0];
    const ciudad = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        ciudad,
        lat,
        lon
    }

}

module.exports = {
    getPlaceLatLng
}