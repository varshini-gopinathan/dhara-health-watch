import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Droplets, Users, Phone, Smartphone, TestTube } from "lucide-react";

const DataMetrics = () => {
  const metrics = [
    {
      title: "Water Quality",
      icon: <Droplets className="h-5 w-5 text-water-blue" />,
      value: "72%",
      subtitle: "Safe Sources", 
      progress: 72,
      status: "warning",
      detail: "3 contaminated sources detected"
    },
    {
      title: "Community Reports",
      icon: <Phone className="h-5 w-5 text-accent" />,
      value: "47",
      subtitle: "This Week",
      progress: 85,
      status: "safe", 
      detail: "15 via SMS, 32 via IVR"
    },
    {
      title: "IoT Sensors",
      icon: <TestTube className="h-5 w-5 text-primary" />,
      value: "23/25",
      subtitle: "Active",
      progress: 92,
      status: "safe",
      detail: "2 sensors need maintenance"
    },
    {
      title: "Weather Data",
      icon: <Thermometer className="h-5 w-5 text-warning" />,
      value: "127mm",
      subtitle: "Rainfall (24h)",
      progress: 78,
      status: "warning", 
      detail: "Above seasonal average"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'health-safe';
      case 'warning': return 'health-warning';
      case 'danger': return 'health-danger';
      default: return 'muted';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Live Data Sources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </div>
                <Badge 
                  variant="secondary"
                  className={`bg-${getStatusColor(metric.status)}/10 text-${getStatusColor(metric.status)} border-${getStatusColor(metric.status)}/20`}
                >
                  Live
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">{metric.subtitle}</span>
                </div>
                
                <Progress 
                  value={metric.progress} 
                  className="h-2"
                />
                
                <p className="text-sm text-muted-foreground">{metric.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <CardTitle>Community Engagement</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">2,847</div>
              <div className="text-sm text-muted-foreground">Registered Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">94%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">15</div>
              <div className="text-sm text-muted-foreground">Villages Connected</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataMetrics;