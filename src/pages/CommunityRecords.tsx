import { useState } from "react";
import { Search, Filter, Phone, MapPin, User, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const communityData = [
  {
    id: 1,
    name: "Amit Kumar",
    age: 34,
    symptoms: ["Diarrhea", "Fever", "Nausea"],
    place: "Guwahati, Assam",
    phone: "+91-9876543210",
    address: "123 Tea Garden Road, Guwahati",
    status: "Active",
    reportDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 28,
    symptoms: ["Stomach Pain", "Vomiting"],
    place: "Jorhat, Assam",
    phone: "+91-9876543211",
    address: "456 Market Street, Jorhat",
    status: "Recovered",
    reportDate: "2024-01-14"
  },
  {
    id: 3,
    name: "Ravi Das",
    age: 45,
    symptoms: ["Diarrhea", "Dehydration", "Fever"],
    place: "Silchar, Assam",
    phone: "+91-9876543212",
    address: "789 River View, Silchar",
    status: "Active",
    reportDate: "2024-01-16"
  },
  {
    id: 4,
    name: "Sunita Devi",
    age: 52,
    symptoms: ["Nausea", "Stomach Pain"],
    place: "Dibrugarh, Assam",
    phone: "+91-9876543213",
    address: "321 Oil Refinery Road, Dibrugarh",
    status: "Under Treatment",
    reportDate: "2024-01-13"
  },
  {
    id: 5,
    name: "Bikash Gogoi",
    age: 31,
    symptoms: ["Fever", "Headache", "Diarrhea"],
    place: "Tezpur, Assam",
    phone: "+91-9876543214",
    address: "654 University Lane, Tezpur",
    status: "Active",
    reportDate: "2024-01-17"
  }
];

const CommunityRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [placeFilter, setPlaceFilter] = useState("all");

  const filteredData = communityData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || record.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPlace = placeFilter === "all" || record.place.includes(placeFilter);
    
    return matchesSearch && matchesStatus && matchesPlace;
  });

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge variant="destructive">{status}</Badge>;
      case "recovered":
        return <Badge className="bg-health-safe text-white">{status}</Badge>;
      case "under treatment":
        return <Badge className="bg-warning text-white">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Community Health Records
          </h1>
          <p className="text-muted-foreground">
            Track and monitor community health reports and symptoms across Northeast India
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, place, or symptoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="recovered">Recovered</SelectItem>
                  <SelectItem value="under treatment">Under Treatment</SelectItem>
                </SelectContent>
              </Select>

              <Select value={placeFilter} onValueChange={setPlaceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Place" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Places</SelectItem>
                  <SelectItem value="Guwahati">Guwahati</SelectItem>
                  <SelectItem value="Jorhat">Jorhat</SelectItem>
                  <SelectItem value="Silchar">Silchar</SelectItem>
                  <SelectItem value="Dibrugarh">Dibrugarh</SelectItem>
                  <SelectItem value="Tezpur">Tezpur</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
                setPlaceFilter("all");
              }}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Records Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Community Records ({filteredData.length} records)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Person Details</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Symptoms</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Report Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((record) => (
                    <TableRow key={record.id} className="hover:bg-muted/30">
                      <TableCell>
                        <div className="font-medium">{record.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {record.address}
                        </div>
                      </TableCell>
                      <TableCell>{record.age} years</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {record.symptoms.map((symptom, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {record.place}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {record.phone}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {record.reportDate}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredData.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No records found matching your search criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CommunityRecords;