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
    const temperatura = response.main.temp - difTem;
    document.getElementById("datosClima").innerHTML = temperatura.toFixed(2) + "°C";

    const nameCity = document.createElement('p')
    nameCity.textContent = response.name;
    document.getElementById("datosClima").appendChild(nameCity)

    const humidityCity = document.createElement('p')
    humidityCity.textContent = 'Con humedad de:' + response.main.humidity

    document.getElementById("datosClima").appendChild(humidityCity)


}
