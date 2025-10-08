import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const mockProperties = [
  {
    id: "1",
    title: "Modern Downtown Studio",
    price: 1800,
    location: "Downtown, Metropolitan City",
    bedrooms: 1,
    bathrooms: 1,
    description: "Cozy studio with stunning city views and modern amenities. Perfect for young professionals.",
    image: property1,
    amenities: ["WiFi", "Parking", "Pet-friendly", "Gym"],
    landlord: {
      name: "Sarah Johnson",
      email: "sarah@homehub.com",
      phone: "(555) 123-4567",
    },
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  {
    id: "2",
    title: "Spacious 2BR Apartment",
    price: 2500,
    location: "Uptown, Metropolitan City",
    bedrooms: 2,
    bathrooms: 2,
    description: "Bright and spacious two-bedroom apartment with hardwood floors and natural light.",
    image: property2,
    amenities: ["WiFi", "Parking", "Laundry", "Balcony"],
    landlord: {
      name: "Michael Chen",
      email: "michael@homehub.com",
      phone: "(555) 234-5678",
    },
    coordinates: { lat: 40.7829, lng: -73.9654 },
  },
  {
    id: "3",
    title: "Luxury Penthouse Suite",
    price: 4500,
    location: "Financial District, Metropolitan City",
    bedrooms: 3,
    bathrooms: 2,
    description: "Stunning penthouse with panoramic city views, modern kitchen, and premium finishes.",
    image: property3,
    amenities: ["WiFi", "Parking", "Concierge", "Rooftop Access", "Gym"],
    landlord: {
      name: "Emily Rodriguez",
      email: "emily@homehub.com",
      phone: "(555) 345-6789",
    },
    coordinates: { lat: 40.7074, lng: -74.0113 },
  },
];
