class UI
{
    constructor()
    {
        this.location = document.getElementById('w-location');
        this.temperature = document.getElementById('w-temperature');
        this.desc = document.getElementById('w-desc');
        this.country = document.getElementById('w-country');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    Populate(weather)
    {
        this.location.textContent = weather.location.name + ", " + weather.location.region;
        this.country.textContent = weather.location.country;
        this.desc.textContent = weather.current.condition.text;
        this.temperature.textContent = `Temperature : ${weather.current.temp_c}℃`;
        this.icon.setAttribute('src', weather.current.condition.icon)
        this.humidity.textContent = `Relative humidity : ${weather.current.humidity}`;
        this.feelslike.textContent = `Feels Like : ${weather.current.feelslike_c}℃`;
        this.wind.textContent = "Wind Speed : "+weather.current.wind_mph + " mph";
    }
}