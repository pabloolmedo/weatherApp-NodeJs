const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }

    })
    .argv;

const getInfo = async(direccion) => {

    try {
        const coords = await place.getPlaceLatLng(direccion);
        const temp = await weather.getWeather(coords.lat, coords.lon);



        return `La temperatura de ${coords.ciudad} es de: ${temp}`

    } catch (err) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`, err);
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


// place.getPlaceLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err)
//     });

// weather.getWeather(-34.6100013, -58.369999)
//     .then(res => console.log(res))
//     .catch(console.log);