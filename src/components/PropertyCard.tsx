import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, MapPin } from "lucide-react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

const PropertyCard = ({
  id,
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  description,
}: PropertyCardProps) => {
  return (
    <Link to={`/residence/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            ${price.toLocaleString()}/mo
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
          <p className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            {location}
          </p>
          <div className="flex items-center gap-4 mb-3">
            <span className="flex items-center gap-1 text-sm">
              <Bed className="h-4 w-4 text-muted-foreground" />
              {bedrooms} Beds
            </span>
            <span className="flex items-center gap-1 text-sm">
              <Bath className="h-4 w-4 text-muted-foreground" />
              {bathrooms} Baths
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
