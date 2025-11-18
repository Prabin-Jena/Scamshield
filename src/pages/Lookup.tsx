import { useState } from "react";
import { Button } from "../components/Button";
import { SearchBar } from "../components/Input";
import { Card, CardContent, CardHeader } from "../components/Card";
import { Tag } from "../components/Tag";
import { Phone, AlertTriangle, Clock, User, TrendingUp } from "lucide-react";

interface PhoneReport {
  phone: string;
  reputation: number;
  label: string;
  reportsCount: number;
  lastReported: string;
  scamTypes: string[];
  recentReports: {
    date: string;
    message: string;
    reporter: string;
  }[];
}

export function Lookup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<PhoneReport | null>(null);

  const searchPhone = () => {
    if (!phoneNumber.trim()) return;

    setSearching(true);

    // Simulate search
    setTimeout(() => {
      // Generate mock data based on phone number
      const score = Math.floor(Math.random() * 100);
      
      let label = "";
      let scamTypes: string[] = [];
      
      if (score < 30) {
        label = "Safe";
        scamTypes = [];
      } else if (score < 70) {
        label = "Suspicious";
        scamTypes = ["Unknown Caller"];
      } else {
        label = "High Risk";
        scamTypes = ["Loan Scam", "Phishing", "Impersonation"];
      }

      const mockReports = [
        {
          date: "2024-11-18",
          message: "Called claiming to be from bank, asked for OTP",
          reporter: "Anonymous User",
        },
        {
          date: "2024-11-17",
          message: "Spam call about insurance policy",
          reporter: "Community Member",
        },
        {
          date: "2024-11-16",
          message: "Attempted to get personal information",
          reporter: "Verified User",
        },
      ];

      setResult({
        phone: phoneNumber,
        reputation: score,
        label,
        reportsCount: score > 70 ? Math.floor(Math.random() * 50) + 10 : Math.floor(Math.random() * 5),
        lastReported: "2024-11-18 14:32",
        scamTypes,
        recentReports: score > 30 ? mockReports : [],
      });

      setSearching(false);
    }, 1200);
  };

  const getReputationColor = (score: number) => {
    if (score < 30) return "text-[#00FF9D]";
    if (score < 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getReputationBg = (score: number) => {
    if (score < 30) return "bg-[#00FF9D]/10";
    if (score < 70) return "bg-yellow-500/10";
    return "bg-red-500/10";
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">
            <span className="text-white">Phone Number </span>
            <span className="text-[#00FF9D]">Reputation Lookup</span>
          </h1>
          <p className="text-xl text-gray-400">
            Check the reputation and history of any phone number
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex gap-3">
              <SearchBar
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number (e.g., +1 555-123-4567)"
                onKeyDown={(e) => e.key === "Enter" && searchPhone()}
                className="flex-1"
              />
              <Button
                variant="primary"
                onClick={searchPhone}
                disabled={!phoneNumber.trim() || searching}
              >
                {searching ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Reputation Card */}
            <Card glowing>
              <CardHeader>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#00FF9D]/10 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-[#00FF9D]" />
                    </div>
                    <div>
                      <div className="text-2xl text-white mb-1">{result.phone}</div>
                      <div className="flex items-center gap-2">
                        <Tag
                          variant={
                            result.reputation < 30
                              ? "success"
                              : result.reputation < 70
                              ? "warning"
                              : "danger"
                          }
                        >
                          {result.label}
                        </Tag>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`text-4xl ${getReputationColor(result.reputation)} mb-1`}>
                      {result.reputation}
                    </div>
                    <div className="text-sm text-gray-400">Risk Score</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#00FF9D]/10">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Reports</span>
                    </div>
                    <div className="text-2xl text-white">{result.reportsCount}</div>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Last Reported</span>
                    </div>
                    <div className="text-lg text-white">{result.lastReported}</div>
                  </div>
                </div>
              </CardHeader>

              {result.scamTypes.length > 0 && (
                <CardContent>
                  <h4 className="text-sm text-gray-400 mb-3">Reported Scam Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.scamTypes.map((type, index) => (
                      <Tag key={index} variant="danger">
                        {type}
                      </Tag>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Recent Reports */}
            {result.recentReports.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-xl text-white mb-4">Recent Community Reports</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {result.recentReports.map((report, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#1A2525] rounded-lg border border-[#00FF9D]/10"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <User className="w-4 h-4" />
                            {report.reporter}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            {report.date}
                          </div>
                        </div>
                        <p className="text-white">{report.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="primary" className="flex-1">
                Block This Number
              </Button>
              <Button variant="secondary" className="flex-1">
                Report New Incident
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!result && !searching && (
          <Card>
            <CardHeader className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#00FF9D]/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-[#00FF9D]" />
              </div>
              <h3 className="text-xl text-white mb-2">Search for a Phone Number</h3>
              <p className="text-gray-400">
                Enter a phone number above to view its reputation and community reports
              </p>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
