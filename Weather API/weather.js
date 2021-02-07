class Weather
{
    constructor(city)
    {
        this.apiKey = 'fd348c40bfe94277af4142736210401';
        this.city = city;
    }
    async GetWeather()
    {
        const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }

    ChangeLocation(city)
    {
        this.city = city;
    }
}

