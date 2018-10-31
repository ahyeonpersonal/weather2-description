import React from "react";

//UPDATE1 : GET RID OF 'CLASS'
//17. Weather.js doesn't contain any state = DO NOT require any class

const Weather = (props)=> { //18
        return(
            <div>
                {/* 
                Since we delete 'class' we can't use 'this' keywords anymore not in the return state at least 
                17. delete 'this'
                18. mention 'props' 
                */}
                {props.city && props.country && <p>Location : {props.city} , {props.country}</p> }
                {props.temperature && <p>Temperature : {props.temperature}</p> }
                {props.humidity && <p>Humidity : {props.humidity}</p> }
                {props.condition && <p>Condition : {props.description}</p> }
                {props.error && <p>{props.error}</p>}
            </div>
        );    
}


/*
class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && this.props.country && <p>Location : {this.props.city} , {this.props.country}</p> }
                {this.props.temperature && <p>Temperature : {this.props.temperature}</p> }
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p> }
                {this.props.condition && <p>Condition : {this.props.description}</p> }
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}
*/

export default Weather;
