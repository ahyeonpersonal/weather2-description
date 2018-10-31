import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {/* 12. displaying 6 components in Weather.js */}
                
                {/* 13. These 4 are still displayed without any value => Undisplay these until I press 'Search' button */}
                {/* Using condition*/}
                {this.props.city && this.props.country && <p>Location : {this.props.city} , {this.props.country}</p> }
                {this.props.temperature && <p>Temperature : {this.props.temperature}</p> }
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p> }
                {this.props.condition && <p>Condition : {this.props.description}</p> }
            </div>
        );
    }
}

export default Weather;
