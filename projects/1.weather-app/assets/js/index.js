const apiKey = "c3e8b1e07f6d22d026c92c6046c29361";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./assets/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./assets/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./assets/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./assets/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./assets/images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}

function triggerCheckWeather() {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", () => {
  triggerCheckWeather();
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    triggerCheckWeather();
  }
});

checkWeather(city);

//  https://api.openweathermap.org/data/2.5/weather?q=salvador&appid=c3e8b1e07f6d22d026c92c6046c29361&units=metric
