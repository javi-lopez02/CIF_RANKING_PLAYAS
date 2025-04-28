import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./components/navbar/NavBar";
import { AuthProvider } from "./context/auth.context";
import { HeroUIProvider } from "@heroui/react";
import Page404 from "./pages/404Page";
import { Toaster } from "sonner";


function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster richColors expand={true} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Page404 />} />

            <Route element={<Navbar />}>
              
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
