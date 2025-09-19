import { useState } from "react";
import { Brain, AlertTriangle, CheckCircle, Info, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";

const DiseasePrediction = () => {
  const [symptoms, setSymptoms] = useState("");
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (!symptoms.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock prediction logic based on symptoms
    const symptomList = symptoms.toLowerCase();
    let predictedDisease = "";
    let confidence = 0;
    let riskLevel = "Low";
    
    if (symptomList.includes("diarrhea") && symptomList.includes("vomiting")) {
      predictedDisease = "Cholera";
      confidence = 85;
      riskLevel = "High";
    } else if (symptomList.includes("fever") && symptomList.includes("diarrhea")) {
      predictedDisease = "Typhoid";
      confidence = 78;
      riskLevel = "High";
    } else if (symptomList.includes("diarrhea") || symptomList.includes("stomach")) {
      predictedDisease = "Gastroenteritis";
      confidence = 72;
      riskLevel = "Medium";
    } else if (symptomList.includes("nausea") || symptomList.includes("headache")) {
      predictedDisease = "Water-borne Infection";
      confidence = 65;
      riskLevel = "Medium";
    } else {
      predictedDisease = "General Water-borne Disease";
      confidence = 45;
      riskLevel = "Low";
    }
    
    setPrediction({
      disease: predictedDisease,
      confidence,
      riskLevel,
      symptoms: symptoms,
    });
    
    setIsLoading(false);
  };

  const getPreventiveMeasures = (disease: string) => {
    const measures = {
      "Cholera": [
        "Drink only boiled or bottled water",
        "Eat hot, fully cooked food",
        "Avoid raw vegetables and fruits unless you peel them yourself",
        "Wash hands frequently with soap and clean water",
        "Use proper sanitation facilities"
      ],
      "Typhoid": [
        "Get vaccinated if traveling to high-risk areas",
        "Drink boiled or bottled water",
        "Avoid ice unless made from safe water",
        "Eat food that is fully cooked and served hot",
        "Practice good hand hygiene"
      ],
      "Gastroenteritis": [
        "Stay hydrated with clean fluids",
        "Eat bland, easy-to-digest foods",
        "Avoid dairy products temporarily",
        "Wash hands thoroughly before eating",
        "Ensure proper food storage"
      ],
      "Water-borne Infection": [
        "Use water purification tablets or boil water",
        "Maintain good personal hygiene",
        "Avoid contaminated water sources",
        "Store water in clean containers",
        "Report water quality issues to authorities"
      ],
      "General Water-borne Disease": [
        "Ensure access to safe drinking water",
        "Practice proper sanitation",
        "Maintain good hygiene habits",
        "Seek medical attention if symptoms persist",
        "Follow local health guidelines"
      ]
    };
    
    return measures[disease as keyof typeof measures] || measures["General Water-borne Disease"];
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "high":
        return "bg-health-danger text-white";
      case "medium":
        return "bg-warning text-white";
      case "low":
        return "bg-health-safe text-white";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            AI Disease Prediction
          </h1>
          <p className="text-muted-foreground">
            Enter symptoms to get AI-powered predictions for water-borne diseases and preventive measures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Symptom Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="symptoms" className="text-sm font-medium mb-2 block">
                  Describe the symptoms you're experiencing:
                </label>
                <Textarea
                  id="symptoms"
                  placeholder="Enter symptoms such as: fever, diarrhea, vomiting, nausea, stomach pain, headache, dehydration..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              
              <Button 
                onClick={handlePredict} 
                disabled={!symptoms.trim() || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Analyzing Symptoms...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Predict Disease
                  </>
                )}
              </Button>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  This AI prediction is for informational purposes only. Please consult a healthcare professional for proper diagnosis and treatment.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Results Section */}
          {prediction && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Prediction Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Disease Prediction */}
                <div>
                  <h3 className="font-semibold mb-3">Predicted Disease:</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium">{prediction.disease}</span>
                      <Badge className={getRiskColor(prediction.riskLevel)}>
                        {prediction.riskLevel} Risk
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Confidence: {prediction.confidence}%
                    </div>
                    <div className="w-full bg-background rounded-full h-2 mt-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${prediction.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Preventive Measures */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Preventive Measures & Advice:
                  </h3>
                  <ul className="space-y-2">
                    {getPreventiveMeasures(prediction.disease).map((measure, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Emergency Contact */}
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Seek immediate medical attention if:</strong> Symptoms worsen, fever persists, severe dehydration occurs, or you experience severe abdominal pain.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Advanced machine learning algorithms analyze symptoms to predict possible water-borne diseases
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-health-safe mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Preventive Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized preventive measures and health advice based on your symptoms
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Early Warning</h3>
              <p className="text-sm text-muted-foreground">
                Early detection helps prevent disease spread and enables timely medical intervention
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DiseasePrediction;