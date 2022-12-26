export const getWeather = (city) => {
  const key = "8467c1dda006b84efe21e7fe63f976cc";
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=es`
  ).then((response) => response.json());
};
