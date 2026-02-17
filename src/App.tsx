import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const isCartorioSubfolder =
  window.location.pathname === "/Cartorio_Alvarenga" ||
  window.location.pathname.startsWith("/Cartorio_Alvarenga/");

const routerBasename = isCartorioSubfolder ? "/Cartorio_Alvarenga" : "/";

const App = () => (
  <TooltipProvider>
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
