import { React, useState } from "react";
import { Form } from "../components/Form";
import { Card } from "../components/Card";

export function Search() {
  const [respuesta, setRespuesta] = useState("");
  function onWeatherReceived(respuestaForm) {
    setRespuesta(respuestaForm);
  }
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8">
      <Form onWeatherReceived={onWeatherReceived}></Form>
      {respuesta ? (
        <Card respuesta={respuesta}></Card>
      ) : (
        <div className="flex gap-5 flex-col mt-5">
            <figure className="w-6/12 mx-auto md:w-2/12">
                <img src="/cloud.png" alt="cloud" className="w-full h-full animate-spin-slow"/>
            </figure>
          <p className="text-lg text-center mx-auto bg-transparent border-gray-600 shadow-2xl rounded-lg w-11/12 p-3 md:w-6/12 animate-bounce-slow">Aún no has ingresado una ciudad</p>
        </div>
      )}
    </div>
  );
}
