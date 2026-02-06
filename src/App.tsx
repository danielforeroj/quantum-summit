import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MediaPartners from "./pages/MediaPartners";
import MediaPartnersPressRelease from "./pages/MediaPartnersPressRelease";
import PasswordGate from "./components/PasswordGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/media-partners"
            element={
              <PasswordGate
                storageKey="qs_media_partners_authed"
                title="Media Partner Kit"
                description="Enter the media partner password to access approved event copy and assets."
              >
                <MediaPartners />
              </PasswordGate>
            }
          />
          <Route
            path="/media-partners/press-release"
            element={
              <PasswordGate
                storageKey="qs_media_partners_authed"
                title="Press Release"
                description="Enter the media partner password to access official press release files."
              >
                <MediaPartnersPressRelease />
              </PasswordGate>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
