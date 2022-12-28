import React from "react";
import './App.css';


import {Form, Info, Weather} from "./components";

const API_KEY = '640cfdfd11d3277e4c97d8ce40f3b2d2';

class App extends React.Component {

    state = {
        temp: undefined,
        humidity: undefined,
        pressure: undefined,
        wind: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city) {

            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);

            const sunset = data.sys.sunset*1000;
            const sunrise = data.sys.sunrise*1000;
            const date = new Date();
            const date1 = new Date();
            date.setTime(sunset);
            date1.setTime(sunrise)
            const sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            const sunrise_data = date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds();

            this.setState({
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: Math.floor(data.main.pressure*0.75006),
                wind: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_data,
                sunset: sunset_date,
                error: ''
            });
        }
    }

    render() {


        return (
            <div className="App">
                <Info/>
                <Form gettingWeather={this.gettingWeather}/>
                <Weather {...this.state}
                // temp={this.state.temp}
                // humidity={this.state.humidity}
                // pressure={this.state.pressure}
                // wind={this.state.wind}
                // city={this.state.city}
                // country={this.state.country}
                // sunrise={this.state.sunrise}
                // sunset={this.state.sunset}
                // error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
