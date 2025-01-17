async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "432ab803ea163c8ce65384c8c859c5e3"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log("Full API Response:", data);

        if (data.cod === 200) {
            document.getElementById("cityName").innerText = `📍 Location: ${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
            document.getElementById("description").innerText = `🌤 Condition: ${data.weather[0].description}`;

            
            if (data.main && data.main.humidity !== undefined) {
                document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            } else {
                document.getElementById("humidity").innerText = "💧 Humidity: Data not available";
            }

            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
        } else {
            alert(`Error: ${data.message}`);
            document.getElementById("cityName").innerText = "";
            document.getElementById("temperature").innerText = "";
            document.getElementById("description").innerText = "";
            document.getElementById("humidity").innerText = "";
            document.getElementById("wind").innerText = "";
            document.getElementById("weatherrain").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Error fetching data. Please check your internet connection.");
    }
}
