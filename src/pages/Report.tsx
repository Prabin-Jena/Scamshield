import { useState } from "react";
import { Button } from "../components/Button";
import { Input, Textarea } from "../components/Input";
import { Card, CardContent, CardHeader } from "../components/Card";
import { Tag } from "../components/Tag";
import { Upload, CheckCircle, AlertTriangle, Clock, User } from "lucide-react";

interface CommunityReport {
  id: string;
  phone: string;
  message: string;
  scamType: string;
  date: string;
  reporter: string;
  status: "verified" | "pending" | "flagged";
}

export function Report() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const scamTypes = [
    "Loan Scam",
    "OTP Scam",
    "Phishing",
    "Job Fraud",
    "Delivery Scam",
    "Prize/Lottery",
    "Bank Impersonation",
    "Tech Support",
    "Investment Fraud",
    "Other",
  ];

  const recentReports: CommunityReport[] = [
    {
      id: "1",
      phone: "+1 (555) 123-4567",
      message: "Claimed to be from IRS, demanded immediate payment",
      scamType: "Bank Impersonation",
      date: "2024-11-18 15:30",
      reporter: "Anonymous",
      status: "verified",
    },
    {
      id: "2",
      phone: "+1 (555) 987-6543",
      message: "Asked for OTP to verify bank account",
      scamType: "OTP Scam",
      date: "2024-11-18 14:15",
      reporter: "Community Member",
      status: "pending",
    },
    {
      id: "3",
      phone: "+1 (555) 456-7890",
      message: "Fake job offer requesting personal documents",
      scamType: "Job Fraud",
      date: "2024-11-18 12:45",
      reporter: "Verified User",
      status: "verified",
    },
  ];

  const toggleScamType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !message || selectedTypes.length === 0) return;

    setSubmitted(true);
    setTimeout(() => {
      setPhoneNumber("");
      setMessage("");
      setSelectedTypes([]);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">
            <span className="text-white">Community </span>
            <span className="text-[#00FF9D]">Reporting</span>
          </h1>
          <p className="text-xl text-gray-400">
            Help protect others by reporting scam calls and messages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Report Form */}
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-xl text-white mb-6">Report a Scam</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />

                  <Textarea
                    label="Message / Description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe what happened, what they said, and any suspicious details..."
                    rows={6}
                    required
                  />

                  <div>
                    <label className="text-sm text-gray-300 mb-3 block">Scam Type Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {scamTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleScamType(type)}
                          className={`px-3 py-1 rounded-full text-xs border transition-all ${
                            selectedTypes.includes(type)
                              ? "bg-[#00FF9D]/10 text-[#00FF9D] border-[#00FF9D]/30"
                              : "bg-[#1A2525] text-gray-300 border-[#00FF9D]/20 hover:border-[#00FF9D]/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 mb-3 block">Screenshot (Optional)</label>
                    <div className="border-2 border-dashed border-[#00FF9D]/20 rounded-lg p-8 text-center hover:border-[#00FF9D]/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={!phoneNumber || !message || selectedTypes.length === 0}
                  >
                    {submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Report Submitted!
                      </span>
                    ) : (
                      "Submit Report"
                    )}
                  </Button>
                </form>
              </CardHeader>
            </Card>
          </div>

          {/* Recent Community Reports */}
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-xl text-white mb-6">Recent Community Reports</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="p-4 bg-[#1A2525] rounded-lg border border-[#00FF9D]/10"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-[#00FF9D]" />
                          </div>
                          <div>
                            <div className="text-sm text-white">{report.reporter}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {report.date}
                            </div>
                          </div>
                        </div>
                        <Tag
                          variant={
                            report.status === "verified"
                              ? "success"
                              : report.status === "pending"
                              ? "warning"
                              : "danger"
                          }
                        >
                          {report.status}
                        </Tag>
                      </div>

                      <div className="mb-3">
                        <div className="text-[#00FF9D] mb-1">{report.phone}</div>
                        <p className="text-sm text-gray-300">{report.message}</p>
                      </div>

                      <Tag variant="danger">{report.scamType}</Tag>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-[#00FF9D]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Reporting Guidelines</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Provide accurate phone numbers</li>
                      <li>• Include relevant details and context</li>
                      <li>• Select appropriate scam type tags</li>
                      <li>• Screenshots help verify reports</li>
                      <li>• Reports are reviewed by our team</li>
                    </ul>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
