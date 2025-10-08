import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Home, Mail, Phone, Calendar } from "lucide-react";

const mockInquiries = [
  {
    id: "1",
    propertyTitle: "Modern Downtown Studio",
    tenantName: "John Doe",
    email: "john@example.com",
    phone: "(555) 111-2222",
    moveInDate: "2025-11-01",
    message: "I'm interested in viewing this property. Is it still available?",
    date: "2025-10-15",
  },
  {
    id: "2",
    propertyTitle: "Spacious 2BR Apartment",
    tenantName: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 333-4444",
    moveInDate: "2025-11-15",
    message: "Looking for a pet-friendly apartment. Do you allow dogs?",
    date: "2025-10-16",
  },
];

const LandlordInquiries = () => {
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tenant Inquiries</h1>
          <p className="text-muted-foreground">Manage inquiries from potential tenants</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Tenant Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Move-in Date</TableHead>
                    <TableHead>Date Received</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.propertyTitle}</TableCell>
                      <TableCell>{inquiry.tenantName}</TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <p className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {inquiry.email}
                          </p>
                          <p className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {inquiry.phone}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {inquiry.moveInDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{inquiry.date}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandlordInquiries;
