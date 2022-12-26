import React from "react";
import { useState, useEffect } from "react";
import { getWeather } from "../data/data";

export function Form({ onWeatherReceived }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(city).then((response) => {
    onWeatherReceived(response);
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full px-5 mt-6 md:flex md:justify-center md:gap-4 md:items-stretch">
        <input
          type="text"
          name="City"
          id="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Ingrese la ciudad"
          className="w-full rounded-lg py-2 px-4 text-center md:w-96"
        />
        <input type="submit" value="Seach" className="block mx-auto text-center mt-3 bg-slate-50 hover:bg-slate-200 cursor-pointer w-2/6 rounded-lg py-2 px-4 md:mx-0 md:mt-0 md:px-2 md:w-32"/>
      </form>
    </>
  );
}
