import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Switch from "./Switch";
const App= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Switch />} >
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App