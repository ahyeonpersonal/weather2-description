import React, { Component } from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';

const API_KEY = "18fff390d86582a57fabf47a890d2816"; //1. put my API key

class App extends Component {
  
  // 2. Calling api
  getWeather = async () => {

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid${API_KEY}=&units=metric`);
    //`` : let you to inject the variable that you defiend within your files

    //3.Convert to json file : transfer API to readable files
    const data = await api_call.json();
    console.log(data); // 4. then how can i display in Form? : Props
  }

  render() {
    return (
      <div>
        <Titles />
        <Form  getWeather={this.getWeather}/>  {/* 5. now Form.js can access to getWeather */}
        <Weather/> 
        
      </div>
    );
  }
}

export default App;
