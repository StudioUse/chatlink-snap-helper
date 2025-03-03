
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import B2BPanel from "./pages/B2BPanel";
import B2CSites from "./pages/B2CSites";
import Whitelabels from "./pages/Whitelabels";
import AdminVideos from "./pages/AdminVideos";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16"> {/* Added top padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/b2b-panel" element={<B2BPanel />} />
            <Route path="/b2c-sites" element={<B2CSites />} />
            <Route path="/whitelabels" element={<Whitelabels />} />
            <Route path="/admin-videos" element={<AdminVideos />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
