import { Bell, Globe, Shield, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Droplets className="h-8 w-8 text-water-blue" />
              <Shield className="h-4 w-4 text-health-safe absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Health Twin</h1>
              <p className="text-xs text-muted-foreground">Northeast India</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <Badge variant="secondary" className="text-xs">
              অসমীয়া / English
            </Badge>
          </div>
          
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full animate-pulse" />
          </Button>

          <div className="flex items-center gap-1 text-sm">
            <div className="h-2 w-2 bg-health-safe rounded-full animate-pulse" />
            <span className="text-muted-foreground">Live</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;