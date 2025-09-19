import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const diseaseData = [
  { month: "Jan", cholera: 12, typhoid: 8, gastroenteritis: 25 },
  { month: "Feb", cholera: 19, typhoid: 12, gastroenteritis: 30 },
  { month: "Mar", cholera: 15, typhoid: 15, gastroenteritis: 28 },
  { month: "Apr", cholera: 25, typhoid: 18, gastroenteritis: 35 },
  { month: "May", cholera: 22, typhoid: 20, gastroenteritis: 40 },
  { month: "Jun", cholera: 30, typhoid: 25, gastroenteritis: 45 }
];

const riskData = [
  { name: "Low Risk", value: 65, color: "hsl(var(--health-safe))" },
  { name: "Medium Risk", value: 25, color: "hsl(var(--warning))" },
  { name: "High Risk", value: 10, color: "hsl(var(--health-danger))" }
];

const stateData = [
  { state: "Assam", cases: 145 },
  { state: "Meghalaya", cases: 87 },
  { state: "Tripura", cases: 92 },
  { state: "Manipur", cases: 65 },
  { state: "Mizoram", cases: 43 },
  { state: "Nagaland", cases: 56 },
  { state: "Arunachal Pradesh", cases: 38 }
];

const chartConfig = {
  cholera: {
    label: "Cholera",
    color: "hsl(var(--health-danger))",
  },
  typhoid: {
    label: "Typhoid",
    color: "hsl(var(--warning))",
  },
  gastroenteritis: {
    label: "Gastroenteritis",
    color: "hsl(var(--primary))",
  },
};

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Disease Cases Over Time - Line Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Disease Cases Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={diseaseData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="cholera" strokeWidth={3} />
              <Line type="monotone" dataKey="typhoid" strokeWidth={3} />
              <Line type="monotone" dataKey="gastroenteritis" strokeWidth={3} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Level Distribution - Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Risk Level Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[250px]">
            <PieChart>
              <Pie
                data={riskData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Cases by State - Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Cases by State
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[250px]">
            <BarChart data={stateData}>
              <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="cases" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;