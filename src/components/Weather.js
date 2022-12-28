import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.city &&
                    <div>
                        <p>Місто: {props.city}, {props.country}</p>
                        <p>Температура: {props.temp}</p>
                        <p>Вологість: {props.humidity}%</p>
                        <p>Тиск: {props.pressure}</p>
                        <p>Швидкість вітру: {props.wind} м/с</p>
                        <p>Схід сонця: {props.sunrise}</p>
                        <p>Захід сонця: {props.sunset}</p>
                    </div>
                }
                <p>{props.error}</p>
        </div>
    );
};

export {Weather};


// import React, {Component} from 'react';
//
// class Weather extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city &&
//                     <div>
//                         <p>Місто: {this.props.city}, {this.props.country}</p>
//                         <p>Температура: {this.props.temp}</p>
//                         <p>Вологість: {this.props.humidity}%</p>
//                         <p>Тиск: {this.props.pressure}</p>
//                         <p>Швидкість вітру: {this.props.wind} м/с</p>
//                         <p>Схід сонця: {this.props.sunrise}</p>
//                         <p>Захід сонця: {this.props.sunset}</p>
//                     </div>
//                 }
//                 <p>{this.props.error}</p>
//             </div>
//         );
//     }
// }
//
// export {Weather};