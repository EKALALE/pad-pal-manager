import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import ResidenceDetails from "./pages/ResidenceDetails";
import LandlordLogin from "./pages/landlord/Login";
import LandlordDashboard from "./pages/landlord/Dashboard";
import LandlordListings from "./pages/landlord/Listings";
import AddListing from "./pages/landlord/AddListing";
import LandlordInquiries from "./pages/landlord/Inquiries";
import LandlordProfile from "./pages/landlord/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/residence/:id" element={<ResidenceDetails />} />
          <Route path="/landlord/login" element={<LandlordLogin />} />
          <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
          <Route path="/landlord/listings" element={<LandlordListings />} />
          <Route path="/landlord/add-listing" element={<AddListing />} />
          <Route path="/landlord/inquiries" element={<LandlordInquiries />} />
          <Route path="/landlord/profile" element={<LandlordProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
