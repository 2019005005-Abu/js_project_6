//r
function Get_weather() {  
    let city_input = document.getElementById('city_input').value;  
    let api_key = 'd38aa473a32ff4dfec599f5ac422edd5';  
    
    if (!city_input) {  
        console.error("Please enter a city name.");  
        return;  
    }  
    
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_input}&appid=${api_key}&units=metric`;  
    fetching_data(api_url);   
    console.log(city_input);  
}  

function fetching_data(api) {  
    fetch(api)  
    .then((res) => {  
        if (!res.ok) {  
            throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);  
        }  
        return res.json();  
    })  
    .then((data) => {  
        console.log(data);   
        let weather_info = document.getElementById('weather_info');  
        const description = data.weather[0].description;  
        const temperature = data.main.temp;  
        const humidity = data.main.humidity;  
        const windspeed = data.wind.speed;  
        weather_info.innerHTML = weather_details(description, temperature, humidity, windspeed);  
    })  
    .catch((error) => {  
        console.error("Error fetching data:", error);   
        let weather_info = document.getElementById('weather_info');  
        weather_info.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;  
    });  
}  

function weather_details(description, temperature, humidity, windspeed) {  
    return `<div style="display: flex;flex-direction:column;">  
                <p>Description: ${description}</p>  
                <p>Temperature: ${temperature} °C</p>  
                <p>Humidity: ${humidity} %</p>  
                <p>Wind Speed: ${windspeed} m/s</p>  
            </div>`;  
}