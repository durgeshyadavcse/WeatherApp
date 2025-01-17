# WeatherApp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
   <link rel="stylesheet" href="app.css">
   <script src ="app.js"></script>
</head>
<body>

    <div class="container">
        <h2>🌍 Weather App</h2>
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
    
        <div class="weather-info">
            <h3 id="cityName"></h3>
            <p id="temperature"></p>
            <p id="description"></p>
            <p id="humidity"></p>
            <p id="wind"></p>
            <p id="sunrise"></p>
            <p id="precip"></p>
        </div>
    </div>

  
</body>
</html>
