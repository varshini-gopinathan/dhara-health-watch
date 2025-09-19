import { MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const states = [
  "All States",
  "Assam",
  "Arunachal Pradesh", 
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Tripura"
];

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

const StateSelector = ({ selectedState, onStateChange }: StateSelectorProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Select State</label>
            <Select value={selectedState} onValueChange={onStateChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a state..." />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateSelector;