import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import { HeroUIProvider } from "@heroui/react";
import Page404 from "./pages/404Page";
import { Toaster } from "sonner";
import Home from "./pages/Home";


function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
          <Toaster richColors expand={true} />
          <Routes>
            <Route path="/*" element={<Page404 />} />
            <Route element={<Navbar />}>
              <Route path="/" element={<Home/>} />
              
              
            </Route>
          </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
