async function getCityData(cityName) {
  const response = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${cityName}`);
  const data = await response.json();
 console.log(data);
}

getCityData("400040")