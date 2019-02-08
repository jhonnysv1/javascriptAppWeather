export class Weather {


    constructor(city, countryCode) {
        this.apikey = '0df5070c39e656e505698b5d9765c7c0';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }

}