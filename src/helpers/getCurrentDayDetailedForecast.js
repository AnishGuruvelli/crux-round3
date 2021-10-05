const currentDayForecast = data => [
    {
        name: 'precipitation',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    }
];

export default currentDayForecast;
