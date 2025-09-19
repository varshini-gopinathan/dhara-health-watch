import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, CheckCircle, Clock, Send, Volume2 } from "lucide-react";

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Water Contamination Alert",
      location: "Dibrugarh - Sector 7",
      time: "2 min ago",
      message: "E.coli detected in community well. Immediate action required.",
      status: "active",
      sentTo: 1247,
      language: "Assamese"
    },
    {
      id: 2, 
      type: "warning",
      title: "Heavy Rainfall Warning",
      location: "Tinsukia District",
      time: "15 min ago", 
      message: "Flood risk increased. Boil water before consumption advised.",
      status: "sent",
      sentTo: 3421,
      language: "Bengali"
    },
    {
      id: 3,
      type: "info",
      title: "Water Quality Improvement",
      location: "Jorhat - Central",
      time: "1 hour ago",
      message: "Water treatment plant restored. Safe water supply resumed.",
      status: "resolved",
      sentTo: 892,
      language: "Hindi"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'warning': return <Clock className="h-4 w-4 text-warning" />;
      case 'info': return <Info className="h-4 w-4 text-primary" />;
      default: return <CheckCircle className="h-4 w-4 text-success" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'destructive';
      case 'sent': return 'outline';
      case 'resolved': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Active Alerts</h2>
        <Button size="sm" className="gap-2">
          <Send className="h-4 w-4" />
          New Alert
        </Button>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <Card key={alert.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getAlertIcon(alert.type)}
                  <div>
                    <CardTitle className="text-base">{alert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{alert.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(alert.status)}>
                    {alert.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span>👥 {alert.sentTo.toLocaleString()} people notified</span>
                    <div className="flex items-center gap-1">
                      <Volume2 className="h-3 w-3" />
                      <span>{alert.language}</span>
                    </div>
                  </div>
                  
                  {alert.status === 'active' && (
                    <Button variant="outline" size="sm">
                      Send Update
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-destructive">3</div>
              <div className="text-xs text-muted-foreground">Critical Active</div>
            </div>
            <div>
              <div className="text-xl font-bold text-warning">7</div>
              <div className="text-xs text-muted-foreground">Warnings Sent</div>
            </div>
            <div>
              <div className="text-xl font-bold text-success">23</div>
              <div className="text-xs text-muted-foreground">Resolved Today</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">8.9k</div>
              <div className="text-xs text-muted-foreground">Total Reached</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsPanel;