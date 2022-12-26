import React from "react";
import { Nav } from "../components/Nav";
import { getWeather } from "../data/data";

export function LandingPage() {
  return (
    <>
      <main className="flex justify-evenly gap-4 items-center flex-col h-5/6 md:flex-row md:py-14 ">
        <figure className="w-screen h-3/6 md:w-4/12">
          <img src="/cloud.png" alt="" className="w-full h-full animate-spin-slow" />
        </figure>
        <div className="bg-transparent border-gray-600 shadow-2xl rounded-lg w-11/12 p-3 md:w-6/12 animate-bounce-slow">
          <p className="text-cyan-800 text-center md:text-xl">
            ¿Quieres saber cómo está el clima en tu ciudad o en cualquier otra
            parte del mundo? ¡Nuestro sitio web te lo muestra de manera rápida y
            fácil! Solo tienes que ingresar el nombre de la ciudad y obtendrás
            la información del clima en tiempo real.
          </p>
          <a href="/search" className="block mx-auto text-center mt-3 bg-slate-50 w-2/6 rounded-lg py-2 px-4 hover:bg-slate-200">Search</a>
        </div>
      </main>
    </>
  );
}
