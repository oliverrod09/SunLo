import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Search } from "../pages/Search";

import React from 'react'

export function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
    </Router>
  )
}