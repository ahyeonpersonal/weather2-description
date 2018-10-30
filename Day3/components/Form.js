import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}> 
            {/* 6. when submit the button, this can get 'getWeather'*/}
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..." />
                <button>Get weather</button>
            </form>
        );
    }
}

export default Form;
