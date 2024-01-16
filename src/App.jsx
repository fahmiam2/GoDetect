import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import SpinnerPage from "./components/SpinnerPage";
// import Faqs from "./pages/Faqs";
// import ApiDoc from "./pages/Apidoc";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const ApiDoc = lazy(() => import("./pages/ApiDoc"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerPage />}>
        <NextUIProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="apis" element={<ApiDoc />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  );
}
