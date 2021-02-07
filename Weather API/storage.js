class Storage
{
    constructor() 
    {
        this.city;
        this.defaultCity = 'Mumbai';
    }

    GetLocationData()
    {
        const city = localStorage.getItem('City');
        if(city === '')
        {
            return this.defaultCity;
        }
        else
        {
            return city;
        }
    }

    SetLocationData(city)
    {
        localStorage.setItem('City',city);
    }
}