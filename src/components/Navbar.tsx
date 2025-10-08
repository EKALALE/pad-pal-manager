import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Home className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HomeHub
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/browse">
            <Button variant="ghost">Browse Residences</Button>
          </Link>
          <Link to="/landlord/login">
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Landlord Portal
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
