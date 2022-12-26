import React from "react";

export function Card({ respuesta }) {
  console.log(respuesta);
  const ICON_URL =
    "https://openweathermap.org/img/wn/" +
    respuesta.weather[0].icon +
    "@2x.png";

  function changeTemp(temperatura) {
    const celsius = temperatura - 273.15;
    return Math.round(celsius);
  }

  return (
    <>
      <div className={`w-full backdrop-blur-sm bg-slate-600 bg-opacity-10 border-gray-600 shadow-2xl rounded-lg text-black pt-5 mb-10`}>
        <div className="">
          <h1 className="mx-auto w-max text-4xl font-bold mb-5">
            {respuesta.name}
          </h1>
          <div className="w-full flex flex-col items-center">
            <div className="w-3/4 text-8xl flex justify-center items-center relative z-10">
              {changeTemp(respuesta.main.temp)}
              <span className="text-4xl">°C</span>
              <figure className="w-24 absolute bottom-0 left-0 animate-bounce-slow md:left-1/3 md:w-28">
                <img
                  src={ICON_URL}
                  alt={respuesta.weather[0].description}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
          <h1 className="italic mx-auto w-max tracking-widest mt-5 text-xl capitalize">
            {respuesta.weather[0].description}
          </h1>
          <div className="w-full">
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span>Humedad</span> <span>{respuesta.main.humidity}%</span>
            </div>
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span> Temp Max </span>
              <span>{changeTemp(respuesta.main.temp_max)}°C</span>
            </div>
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span> Temp Min </span>
              <span>{changeTemp(respuesta.main.temp_min)}°C</span>
            </div>
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span> Temp Aparente</span>
              <span>{changeTemp(respuesta.main.feels_like)}°C</span>
            </div>
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span> Presión Atmosférica</span>
              <span>{respuesta.main.feels_like} hPa</span>
            </div>
            <div className="p-4 flex gap-4 justify-between border-b-2 text-xl hover:font-semibold">
              <span> Velocidad del viento </span>
              <span>{respuesta.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
