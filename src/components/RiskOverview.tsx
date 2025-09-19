import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const RiskOverview = () => {
  const riskData = [
    {
      region: "Dibrugarh District",
      riskLevel: "High",
      trend: "up",
      cases: 12,
      population: 1650000,
      factors: ["Heavy rainfall", "Poor water quality", "Dense population"]
    },
    {
      region: "Tinsukia District", 
      riskLevel: "Medium",
      trend: "stable",
      cases: 4,
      population: 1300000,
      factors: ["Moderate rainfall", "Water treatment issues"]
    },
    {
      region: "Jorhat District",
      riskLevel: "Low",
      trend: "down", 
      cases: 1,
      population: 1100000,
      factors: ["Good water infrastructure", "Recent treatment"]
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high': return 'health-danger';
      case 'medium': return 'health-warning'; 
      case 'low': return 'health-safe';
      default: return 'muted';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-destructive" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-success" />;
      default: return <CheckCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Risk Assessment</h2>
        <Badge variant="outline" className="text-xs">
          Updated 2 min ago
        </Badge>
      </div>
      
      <div className="grid gap-4">
        {riskData.map((region, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${getRiskColor(region.riskLevel)}`} />
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{region.region}</CardTitle>
                <div className="flex items-center gap-2">
                  {getTrendIcon(region.trend)}
                  <Badge 
                    variant="secondary"
                    className={`bg-${getRiskColor(region.riskLevel)}/10 text-${getRiskColor(region.riskLevel)} border-${getRiskColor(region.riskLevel)}/20`}
                  >
                    {region.riskLevel} Risk
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm text-muted-foreground">Active Cases</p>
                  <p className="text-2xl font-semibold">{region.cases}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Population</p>
                  <p className="text-2xl font-semibold">{(region.population / 1000000).toFixed(1)}M</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Risk Factors:</p>
                <div className="flex flex-wrap gap-2">
                  {region.factors.map((factor, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RiskOverview;