import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, MessageSquare, Settings, LogOut, Plus } from "lucide-react";

const LandlordDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/landlord/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HomeHub Landlord Portal</span>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties and tenant inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Properties
              </CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Listings
              </CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                New Inquiries
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/landlord/listings">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">My Listings</h3>
                <p className="text-sm text-muted-foreground">View and manage properties</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/landlord/add-listing">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Plus className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2">Add New Listing</h3>
                <p className="text-sm text-muted-foreground">Create a new property</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/landlord/inquiries">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Tenant Inquiries</h3>
                <p className="text-sm text-muted-foreground">Review messages</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/landlord/profile">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Settings className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Profile Settings</h3>
                <p className="text-sm text-muted-foreground">Update your info</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;
