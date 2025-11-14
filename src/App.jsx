import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./ClientPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}
