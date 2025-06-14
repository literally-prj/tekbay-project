
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ITCybersecurity from "./pages/ITCybersecurity";
import GeneralContracting from "./pages/GeneralContracting";
import LogisticsSolutions from "./pages/LogisticsSolutions";
import EcommerceSolutions from "./pages/EcommerceSolutions";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Add page transition class when route changes
    document.body.classList.add('page-transition');
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/it-cybersecurity" element={<ITCybersecurity />} />
            <Route path="/general-contracting" element={<GeneralContracting />} />
            <Route path="/logistics-solutions" element={<LogisticsSolutions />} />
            <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
