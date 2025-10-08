import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockProperties } from "@/data/mockProperties";
import { ArrowLeft, Bed, Bath, MapPin, Mail, Phone, User, Calendar, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ResidenceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = mockProperties.find((p) => p.id === id);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveInDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/browse")}>Back to Browse</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! The landlord will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/browse")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>

          {/* Image Gallery */}
          <div className="mb-8 rounded-xl overflow-hidden h-[500px]">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="px-3 py-1">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landlord Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {property.landlord.name}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    {property.landlord.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    {property.landlord.phone}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>I'm Interested</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
                      <p className="text-muted-foreground">
                        The landlord will contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
                        <Input
                          id="moveInDate"
                          type="date"
                          required
                          value={formData.moveInDate}
                          onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Tell the landlord about yourself..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Submit Inquiry
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidenceDetails;
