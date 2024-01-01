import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Faqs from "./pages/Faqs";
import ApiDoc from "./pages/Apidoc";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="apis" element={<ApiDoc />} />
          <Route path="faqs" element={<Faqs />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  );
}
