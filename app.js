window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('iconoAnimado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            // console.log(position)
            lon = position.coords.longitude
            lat = position.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=87021a1955866f56c6ceca09bd4d76f9&units=metric&lang=es`

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then( data => {
                    console.log(data)

                    let temp = Math.round(data.main.temp)
                        temperaturaValor.textContent = `${temp} °C`

                    let tempDescripcion = data.weather[0].description
                        temperaturaDescripcion.textContent = tempDescripcion.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    console.log(data.weather[0].main)

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                    }
                })
                .catch( error => {
                    console.log(error)
                })
        })
          
    }
})