import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Upload } from "lucide-react";
import { toast } from "sonner";

const AddListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    amenities: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Listing published successfully!");
    navigate("/landlord/listings");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HomeHub Landlord Portal</span>
          </div>
          <Link to="/landlord/listings">
            <Button variant="outline">Back to Listings</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Add New Listing</h1>
          <p className="text-muted-foreground">Fill in the details to create a new property listing</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  required
                  placeholder="e.g., Modern Downtown Studio"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  required
                  placeholder="123 Main St, City, State"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Monthly Rent ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    required
                    placeholder="1800"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    required
                    placeholder="2"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    required
                    placeholder="1"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description & Amenities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  required
                  rows={5}
                  placeholder="Describe your property..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="amenities">Amenities (comma-separated)</Label>
                <Input
                  id="amenities"
                  placeholder="WiFi, Parking, Pet-friendly, Gym"
                  value={formData.amenities}
                  onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-2">
                  Drag and drop images here, or click to browse
                </p>
                <Button type="button" variant="outline">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Publish Listing
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate("/landlord/listings")}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
