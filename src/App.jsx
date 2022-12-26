import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import { MyRoutes } from "./routers/Routes";

function App() {
  return (
    <div className="body w-full relative bg-[url('/fondo.svg')] min-h-screen overflow-hidden">
      <Nav></Nav>
      <MyRoutes></MyRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
