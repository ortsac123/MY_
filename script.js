let myApiKey = "854a789a51d8be17e1e5e4e89f7df642";
const difTem = 273.15;
const urlBase1 = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("botonBusqueda").addEventListener("click", () => {
    const city = document.getElementById("ciudadEntrada").value;

    if (city) {
        traerData(city);
    }
});

function traerData(city) {
    fetch(`${urlBase1}?q=${city}&appid=${myApiKey}`)
        .then((response) => response.json())
        .then((response) => {
            mostrarDatos(response);
        });
}

function mostrarDatos(response) {
    console.log(response)
    const imagen = response.weather[0].icon
    document.getElementById("datosClima").innerHTML = ""


    const nameCity = document.createElement('h2')
    nameCity.textContent = response.name;
    document.getElementById("datosClima").appendChild(nameCity)

    const temperatura = document.createElement('p')
    temperatura.textContent = (response.main.temp - difTem).toFixed(2) + "°C";
    document.getElementById("datosClima").appendChild(temperatura)

    const humidityCity = document.createElement('p')
    humidityCity.textContent = response.weather[0].description
    document.getElementById("datosClima").appendChild(humidityCity)

    const icono = document.createElement('img')
    icono.src = `https://openweathermap.org/img/wn/${imagen}@2x.png`;
    document.getElementById("datosClima").appendChild(icono)






}
