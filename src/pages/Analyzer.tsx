import { useState } from "react";
import { Button } from "../components/Button";
import { Textarea } from "../components/Input";
import { Card, CardContent, CardHeader } from "../components/Card";
import { RiskMeter } from "../components/RiskMeter";
import { Tag } from "../components/Tag";
import { AlertTriangle, Shield, Clock } from "lucide-react";

interface AnalysisResult {
  score: number;
  keywords: string[];
  reason: string;
  timestamp: string;
  message: string;
}

export function Analyzer() {
  const [message, setMessage] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  const analyzeMessage = () => {
    if (!message.trim()) return;

    setAnalyzing(true);

    // Simulate analysis
    setTimeout(() => {
      const keywords = [];
      const lowerMessage = message.toLowerCase();

      // Detect scam keywords
      if (lowerMessage.includes("urgent") || lowerMessage.includes("immediately")) {
        keywords.push("urgency");
      }
      if (lowerMessage.includes("money") || lowerMessage.includes("payment") || lowerMessage.includes("$")) {
        keywords.push("financial");
      }
      if (lowerMessage.includes("click") || lowerMessage.includes("link") || lowerMessage.includes("http")) {
        keywords.push("suspicious link");
      }
      if (lowerMessage.includes("prize") || lowerMessage.includes("won") || lowerMessage.includes("winner")) {
        keywords.push("prize scam");
      }
      if (lowerMessage.includes("verify") || lowerMessage.includes("account") || lowerMessage.includes("password")) {
        keywords.push("phishing");
      }

      // Calculate risk score based on keywords
      let score = Math.min(keywords.length * 20 + Math.random() * 20, 100);
      if (keywords.length === 0) {
        score = Math.random() * 30;
      }

      score = Math.round(score);

      let reason = "";
      if (score < 30) {
        reason = "Message appears legitimate. No suspicious patterns detected.";
      } else if (score < 70) {
        reason = "Message contains some concerning elements. Exercise caution and verify the sender.";
      } else {
        reason = "High probability of scam. Multiple red flags detected including urgency tactics and suspicious requests.";
      }

      const newResult: AnalysisResult = {
        score,
        keywords,
        reason,
        timestamp: new Date().toISOString(),
        message: message.substring(0, 100),
      };

      setResult(newResult);
      setHistory([newResult, ...history.slice(0, 4)]);
      setAnalyzing(false);
    }, 1500);
  };

  const clearAnalysis = () => {
    setMessage("");
    setResult(null);
  };

  const getRecommendedAction = () => {
    if (!result) return null;
    
    if (result.score < 30) {
      return (
        <div className="flex items-center gap-2 text-[#00FF9D]">
          <Shield className="w-5 h-5" />
          <span>Message appears safe</span>
        </div>
      );
    } else if (result.score < 70) {
      return (
        <div className="flex items-center gap-2 text-yellow-400">
          <AlertTriangle className="w-5 h-5" />
          <span>Proceed with caution</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2 text-red-400">
          <AlertTriangle className="w-5 h-5" />
          <span>Block and report recommended</span>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">
            <span className="text-white">Real-Time </span>
            <span className="text-[#00FF9D]">Scam Analyzer</span>
          </h1>
          <p className="text-xl text-gray-400">
            Paste any suspicious message below for instant AI-powered analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-xl text-white mb-4">Message Input</h3>
                <Textarea
                  label="Paste Suspicious Message Here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Example: URGENT! Your account has been compromised. Click this link immediately to verify your identity..."
                  rows={12}
                />
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    onClick={analyzeMessage}
                    disabled={!message.trim() || analyzing}
                    className="flex-1"
                  >
                    {analyzing ? "Analyzing..." : "Analyze Message"}
                  </Button>
                  <Button variant="ghost" onClick={clearAnalysis} disabled={analyzing}>
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Log */}
            <Card className="mt-6">
              <CardHeader>
                <h3 className="text-lg text-white mb-4">Recent Scans</h3>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-4">No scans yet</p>
                ) : (
                  <div className="space-y-3">
                    {history.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-[#1A2525] rounded-lg border border-[#00FF9D]/10"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm ${
                            item.score < 30
                              ? "bg-[#00FF9D]/10 text-[#00FF9D]"
                              : item.score < 70
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {item.score}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">{item.message}...</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                            <Clock className="w-3 h-3" />
                            {new Date(item.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Results */}
          <div>
            <Card glowing={result !== null}>
              <CardHeader>
                <h3 className="text-xl text-white mb-6">Analysis Results</h3>

                {result ? (
                  <div className="space-y-6">
                    {/* Risk Score */}
                    <div className="flex justify-center">
                      <RiskMeter score={result.score} size="lg" />
                    </div>

                    {/* Detected Keywords */}
                    <div>
                      <h4 className="text-sm text-gray-400 mb-3">Detected Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.keywords.length > 0 ? (
                          result.keywords.map((keyword, index) => (
                            <Tag key={index} variant="danger">
                              {keyword}
                            </Tag>
                          ))
                        ) : (
                          <Tag variant="success">No red flags</Tag>
                        )}
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <h4 className="text-sm text-gray-400 mb-3">Classification Reason</h4>
                      <p className="text-white text-sm leading-relaxed">{result.reason}</p>
                    </div>

                    {/* Recommended Actions */}
                    <div>
                      <h4 className="text-sm text-gray-400 mb-3">Recommended Action</h4>
                      {getRecommendedAction()}
                      <div className="flex gap-3 mt-4">
                        {result.score >= 70 && (
                          <>
                            <Button variant="primary" className="flex-1">
                              Block Sender
                            </Button>
                            <Button variant="secondary" className="flex-1">
                              Report as Scam
                            </Button>
                          </>
                        )}
                        {result.score >= 30 && result.score < 70 && (
                          <Button variant="secondary" className="flex-1">
                            Report Suspicious
                          </Button>
                        )}
                        {result.score < 30 && (
                          <Button variant="ghost" className="flex-1">
                            Mark as Safe
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#00FF9D]/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-[#00FF9D]" />
                    </div>
                    <p className="text-gray-400">
                      Paste a message and click "Analyze" to see results
                    </p>
                  </div>
                )}
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
