import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {/* 12. displaying 6 components in Weather.js */}
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.humidity}
                {this.props.description}
            </div>
        );
    }
}

export default Weather;
