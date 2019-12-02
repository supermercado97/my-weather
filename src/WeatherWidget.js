import React from 'react'

export default function WeatherWidget({data, name, city}) {
    const kelvinToFahrenheit = (temp) => {
        return Math.round((temp-273.15)*9/5 + 32)

    }

    return (
        <div>
            Howdy {name}! The current temperature in {city} is {kelvinToFahrenheit(data)} degrees Fahrenheit
        </div>
    )
}
