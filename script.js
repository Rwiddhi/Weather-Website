document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = 'a00c00dad8cf452a983100528242407';  // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-info').innerHTML = `<p>${data.error.message}</p>`;
            } else {
                const weatherInfo = `
                    <h2>${data.location.name}</h2>
                    <p>${data.current.condition.text}</p>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Humidity: ${data.current.humidity}%</p>
                    <p>Wind Speed: ${data.current.wind_kph} km/h</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-info').innerHTML = `<p>Something went wrong!</p>`;
        });
});
