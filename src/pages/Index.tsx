import { useState } from "react";
import Header from "@/components/Header";
import RiskOverview from "@/components/RiskOverview";
import DataMetrics from "@/components/DataMetrics";
import AlertsPanel from "@/components/AlertsPanel";
import DashboardCharts from "@/components/DashboardCharts";
import StateSelector from "@/components/StateSelector";

const Index = () => {
  const [selectedState, setSelectedState] = useState("All States");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Smart Community Health Monitor
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered early warning system preventing water-borne diseases in Northeast India through real-time monitoring and community engagement
          </p>
        </div>

        {/* State Selector */}
        <StateSelector selectedState={selectedState} onStateChange={setSelectedState} />

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Risk Overview */}
          <div className="lg:col-span-1">
            <RiskOverview />
          </div>
          
          {/* Middle Column - Data Metrics */}
          <div className="lg:col-span-1">
            <DataMetrics />
          </div>
          
          {/* Right Column - Alerts */}
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Disease Analytics & Trends</h2>
          <DashboardCharts />
        </div>

        {/* Bottom Section - Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
          <div className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold mb-1">Community Reports</h3>
            <p className="text-sm text-muted-foreground">SMS & Voice Reports</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">🧪</div>
            <h3 className="font-semibold mb-1">Water Testing</h3>
            <p className="text-sm text-muted-foreground">Field Test Kits</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">IoT Sensors</h3>
            <p className="text-sm text-muted-foreground">Real-time Monitoring</p>
          </div>
          
          <div className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">🌧️</div>
            <h3 className="font-semibold mb-1">Weather Data</h3>
            <p className="text-sm text-muted-foreground">Rainfall & Climate</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;