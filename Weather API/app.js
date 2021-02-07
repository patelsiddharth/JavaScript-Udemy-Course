const storage = new Storage();
const weatherLocation = storage.GetLocationData();

const weather = new Weather(weatherLocation);
const ui = new UI();
document.addEventListener('DOMContentLoaded', GetWeather);

function GetWeather()
{
    weather.GetWeather()
    .then(data => 
        {
            ui.Populate(data);
        })
    .catch(error => console.log(error));
}

document.getElementById('w-change-btn').addEventListener('click', (e) =>
{
    const city = document.getElementById('city');
    weather.ChangeLocation(city.value);
    storage.SetLocationData(city.value);
    GetWeather();
    city.value = '';
    //Close modal
    $('#locationModal').modal('hide');
})