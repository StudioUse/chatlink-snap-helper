
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";
import Index from "./pages/Index";
import B2BPanel from "./pages/B2BPanel";
import Whitelabels from "./pages/Whitelabels";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animation wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/b2b-panel" element={<B2BPanel />} />
        <Route path="/b2b-sites" element={<B2BPanel />} />
        <Route path="/whitelabels" element={<Whitelabels />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageBackground>
          <Navbar />
          <main className="pt-16"> {/* Added top padding to account for fixed navbar */}
            <AnimatedRoutes />
          </main>
          <Footer />
        </PageBackground>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
