import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Admin from "./components/admin/admin";
import Remate from "./components/footer/remate";
import Error from "./components/error/error";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <Remate />
      </BrowserRouter>
    </div>
  );
}
export default App;
