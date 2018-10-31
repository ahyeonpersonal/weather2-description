import React, { Component } from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';

const API_KEY = "18fff390d86582a57fabf47a890d2816"; //1. put my API key

class App extends Component {
  
  //9. we need 6 states : temperature, city, country, humidity, description, error
  state ={
    temperature : undefined,
    city : undefined,
    country: undefined,
    humidity : undefined,
    description : undefined,
    error : undefined  
    // For now, those are undefined before city , country are set : undefiend
  }
    
  
  // 2. Calling api
  getWeather = async (e) => {
    e.preventDefault(); // 7. prevent page refreshing when submit the button

    //8. Getting city & country value from 'Search' event in Form.js
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
                                  
    //`` : let you to inject the variable that you defiend within your files

    //3.Convert to json file : transfer API to readable files
    const data = await api_call.json();
    console.log(data); // 4. then how can i display in Form? : Props

    //10. getting 6states from console(log)
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error :""
    });

  }

  render() {
    return (
      <div>
        <Titles />
        <Form  getWeather={this.getWeather}/>  {/* 5. now Form.js can access to getWeather */}
        {/* 11. Giving 6 components to Weather.js : 6props able to access Weather.js */}
        <Weather 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          eror={this.state.error}
        /> 
        
      </div>
    );
  }
}

export default App;
