import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import { HeroUIProvider } from "@heroui/react";
import Page404 from "./pages/404Page";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Beach from "./pages/Beach";
import Evaluator from "./pages/Evaluator";
import Method from "./pages/Method";
import BeachDetails from "./pages/BeachDetails";
import Mediterraneo from "./pages/Top_Ten/Mediterraneo";
import Caribe from "./pages/Top_Ten/Caribe";
import Poblado from "./pages/Top_Ten/Poblado";
import Rural from "./pages/Top_Ten/Rural";
import Natural from "./pages/Top_Ten/Natural";
import AtlanticoNorte from "./pages/Top_Ten/AtlanticoNorte";
import AtlanticoSur from "./pages/Top_Ten/AtlanticoSur";
import PacificoNorte from "./pages/Top_Ten/PacificoNorte";
import PacificoSur from "./pages/Top_Ten/PacificoSur";
import Urbanas from "./pages/Top_Ten/Urbanas";
import TeamDirectory from "./pages/TeamDirectory";
import PressRoom from "./pages/PressRoom";
import Enclave from "./pages/Top_Ten/Enclave";
import School from "./pages/School";
import ContactUs from "./pages/ContactUs";
import SidebarAds from "./components/home/BannerLateral";
import RankingReportsPage from "./pages/ReportsPage";
import YearReportsPage from "./pages/ReportYear";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Toaster richColors expand={true} />
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/beach" element={<Beach />} />
            <Route path="/evaluator" element={<Evaluator />} />
            <Route path="/method" element={<Method />} />
            <Route path="/details" element={<BeachDetails />} />
            <Route path="/scientific-advisory" element={<TeamDirectory />} />
            <Route path="/pressroom" element={<PressRoom />} />
            <Route path="/school" element={<School />} />
            <Route path="/contacto" element={<ContactUs />} />
            <Route path="/report" element={<RankingReportsPage />} />
            <Route path="/report-2025" element={<YearReportsPage />} />

            <Route path="/atlantic-north" element={<AtlanticoNorte />} />
            <Route path="/atlantic-south" element={<AtlanticoSur />} />
            <Route path="/pacific-north" element={<PacificoNorte />} />
            <Route path="/pacific-south" element={<PacificoSur />} />
            <Route path="/mediterraneo" element={<Mediterraneo />} />
            <Route path="/caribean" element={<Caribe />} />
            <Route path="/poblado" element={<Poblado />} />
            <Route path="/rural" element={<Rural />} />
            <Route path="/urban" element={<Urbanas />} />
            <Route path="/natural" element={<Natural />} />
            <Route path="/enclave" element={<Enclave />} />
          </Route>
          <Route element={<SidebarAds />}></Route>
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
