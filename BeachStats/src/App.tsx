import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import { HeroUIProvider } from "@heroui/react";
import Page404 from "./pages/404Page";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Beach from "./pages/Beach";
import Category from "./pages/Category";
import Evaluator from "./pages/Evaluator";
import Method from "./pages/Method";
import BeachDetails from "./pages/BeachDetails";


function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
          <Toaster richColors expand={true} />
          <Routes>
            <Route path="/*" element={<Page404 />} />
            <Route element={<Navbar />}>
              <Route path="/" element={<Home/>} />
              <Route path="/beach" element={<Beach />} />
              <Route path="/category" element={<Category />} />
              <Route path="/evaluator" element={<Evaluator />} />
              <Route path="/method" element={<Method />} />
              <Route path="/details" element={<BeachDetails/>}/>

              
            </Route>
          </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
