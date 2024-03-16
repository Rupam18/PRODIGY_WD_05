const apiKey = "69dd2124c36eedaf40c4e03ee20653d7";

const btn = document.querySelector("#search");

btn.addEventListener("click", () => {
  const city = document.querySelector("#city").value;
  console.log(city);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(url);
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  getData();
});

function setData(data) {
  const temp = document.querySelector("#temp");
  const cityName = document.querySelector("#cityName");
  const humidity = document.querySelector("#humidity-value");
  const wind = document.querySelector("#wind");
  const image = document.querySelector("#image");

  temp.textContent = data.main.temp + "°C";
  cityName.textContent = `${data.name},${data.sys.country}`;
  humidity.textContent = data.main.humidity;
  wind.textContent = "wind:" + data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    image.src = "/img/clouds.png";
  } 
 else if (data.weather[0].main == "Mist") {
    image.src = "/img/mist.png";
  } 
 else if (data.weather[0].main == "Rain") {
    image.src = "/img/rain.png";
  } 
}
