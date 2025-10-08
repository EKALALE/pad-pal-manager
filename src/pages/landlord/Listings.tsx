import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockProperties } from "@/data/mockProperties";
import { Home, Plus, Edit, Trash2, Eye } from "lucide-react";

const LandlordListings = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HomeHub Landlord Portal</span>
          </div>
          <Link to="/landlord/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Listings</h1>
            <p className="text-muted-foreground">Manage your property listings</p>
          </div>
          <Link to="/landlord/add-listing">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Listing
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-accent">
                  Available
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-2xl font-bold text-primary mb-3">
                  ${property.price.toLocaleString()}/mo
                </p>
                <p className="text-sm text-muted-foreground mb-4">{property.location}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandlordListings;
