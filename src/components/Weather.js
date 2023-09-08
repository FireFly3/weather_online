import React from "react";

const Weather = (props) => {
  return (
    <div className="infoWeath">
      {props.city && (
        <div>
          <p>
            Місто: {props.city}, {props.country}
          </p>
          <p>Температура: {props.temp}</p>
          <p>Вологість: {props.humidity}%</p>
          <p>Тиск: {props.pressure}</p>
          <p>Швидкість вітру: {props.wind} м/с</p>
          <p>Схід сонця: {props.sunrise}</p>
          <p>Захід сонця: {props.sunset}</p>
        </div>
      )}
      <p className="error">{props.error}</p>
    </div>
  );
};

export { Weather };
