import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Search } from "../pages/Search";

import React from 'react'

export function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/SunLo" element={<LandingPage/>}/>
            <Route path="/SunLo/search" element={<Search/>}/>
        </Routes>
    </Router>
  )
}