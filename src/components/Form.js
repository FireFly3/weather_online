import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.gettingWeather}>
                <input type="text" name='city' placeholder='Місто'/>
                <button>Отримати погоду</button>
            </form>
        );
    }
}

export {Form};