import { Card, CardContent, CardHeader } from "../components/Card";
import { Button } from "../components/Button";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Shield, AlertTriangle, Activity, Download } from "lucide-react";
import { Tag } from "../components/Tag";

export function Dashboard() {
  const kpiData = [
    {
      title: "Total Reports",
      value: "12,847",
      change: "+23%",
      icon: Shield,
      trend: "up",
    },
    {
      title: "Active Scam Numbers",
      value: "3,421",
      change: "+15%",
      icon: AlertTriangle,
      trend: "up",
    },
    {
      title: "Last 24h Activity",
      value: "892",
      change: "-8%",
      icon: Activity,
      trend: "down",
    },
    {
      title: "Blocked Attempts",
      value: "45,291",
      change: "+31%",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const trendData = [
    { date: "Nov 5", reports: 420, blocked: 380 },
    { date: "Nov 6", reports: 380, blocked: 360 },
    { date: "Nov 7", reports: 510, blocked: 480 },
    { date: "Nov 8", reports: 470, blocked: 440 },
    { date: "Nov 9", reports: 550, blocked: 520 },
    { date: "Nov 10", reports: 490, blocked: 470 },
    { date: "Nov 11", reports: 620, blocked: 590 },
    { date: "Nov 12", reports: 580, blocked: 560 },
    { date: "Nov 13", reports: 640, blocked: 610 },
    { date: "Nov 14", reports: 710, blocked: 680 },
    { date: "Nov 15", reports: 690, blocked: 660 },
    { date: "Nov 16", reports: 750, blocked: 720 },
    { date: "Nov 17", reports: 820, blocked: 790 },
    { date: "Nov 18", reports: 892, blocked: 850 },
  ];

  const scamTypeData = [
    { type: "Loan Scam", count: 2840 },
    { type: "OTP Scam", count: 2120 },
    { type: "Phishing", count: 1890 },
    { type: "Job Fraud", count: 1650 },
    { type: "Bank Impersonation", count: 1420 },
    { type: "Other", count: 2927 },
  ];

  const topNumbers = [
    {
      phone: "+1 (555) 123-4567",
      score: 98,
      reports: 247,
      lastReported: "2 hours ago",
      type: "Loan Scam",
    },
    {
      phone: "+1 (555) 987-6543",
      score: 95,
      reports: 189,
      lastReported: "5 hours ago",
      type: "OTP Scam",
    },
    {
      phone: "+1 (555) 456-7890",
      score: 92,
      reports: 156,
      lastReported: "8 hours ago",
      type: "Phishing",
    },
    {
      phone: "+1 (555) 321-9876",
      score: 89,
      reports: 134,
      lastReported: "12 hours ago",
      type: "Job Fraud",
    },
    {
      phone: "+1 (555) 789-0123",
      score: 87,
      reports: 112,
      lastReported: "1 day ago",
      type: "Bank Impersonation",
    },
  ];

  const recentEvents = [
    {
      type: "high",
      message: "New scam pattern detected: Fake delivery notifications",
      time: "5 minutes ago",
    },
    {
      type: "medium",
      message: "Phone number +1 (555) 123-4567 flagged by 15 users",
      time: "23 minutes ago",
    },
    {
      type: "low",
      message: "Daily scam report generated and archived",
      time: "1 hour ago",
    },
    {
      type: "high",
      message: "Surge in loan scam attempts detected",
      time: "2 hours ago",
    },
    {
      type: "medium",
      message: "Community report verified and added to database",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl mb-2">
              <span className="text-white">Analytics </span>
              <span className="text-[#00FF9D]">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-400">Real-time scam detection insights</p>
          </div>
          <Button variant="secondary">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} glowing>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#00FF9D]" />
                    </div>
                    <span
                      className={`text-sm ${
                        kpi.trend === "up" ? "text-[#00FF9D]" : "text-red-400"
                      }`}
                    >
                      {kpi.change}
                    </span>
                  </div>
                  <div className="text-3xl text-white mb-1">{kpi.value}</div>
                  <div className="text-sm text-gray-400">{kpi.title}</div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Trend Chart */}
          <Card>
            <CardHeader>
              <h3 className="text-xl text-white mb-6">14-Day Scam Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A2525" />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#141B1B",
                      border: "1px solid rgba(0, 255, 157, 0.2)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#9CA3AF" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="reports"
                    stroke="#00FF9D"
                    strokeWidth={2}
                    dot={{ fill: "#00FF9D", r: 4 }}
                    name="Reports"
                  />
                  <Line
                    type="monotone"
                    dataKey="blocked"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", r: 4 }}
                    name="Blocked"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardHeader>
          </Card>

          {/* Scam Types Chart */}
          <Card>
            <CardHeader>
              <h3 className="text-xl text-white mb-6">Scam Types Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={scamTypeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1A2525" />
                  <XAxis dataKey="type" stroke="#9CA3AF" fontSize={12} angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#141B1B",
                      border: "1px solid rgba(0, 255, 157, 0.2)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#9CA3AF" }}
                  />
                  <Bar dataKey="count" fill="#00FF9D" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardHeader>
          </Card>
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top Reported Numbers */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h3 className="text-xl text-white mb-6">Top Reported Numbers</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#00FF9D]/10">
                      <th className="text-left py-3 text-sm text-gray-400">Phone Number</th>
                      <th className="text-left py-3 text-sm text-gray-400">Score</th>
                      <th className="text-left py-3 text-sm text-gray-400">Reports</th>
                      <th className="text-left py-3 text-sm text-gray-400">Type</th>
                      <th className="text-left py-3 text-sm text-gray-400">Last Reported</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topNumbers.map((number, index) => (
                      <tr key={index} className="border-b border-[#00FF9D]/5 hover:bg-[#1A2525]/50">
                        <td className="py-4 text-sm text-white">{number.phone}</td>
                        <td className="py-4">
                          <span className="text-red-400">{number.score}</span>
                        </td>
                        <td className="py-4 text-sm text-gray-300">{number.reports}</td>
                        <td className="py-4">
                          <Tag variant="danger" className="text-xs">
                            {number.type}
                          </Tag>
                        </td>
                        <td className="py-4 text-sm text-gray-400">{number.lastReported}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardHeader>
          </Card>

          {/* Recent Events Timeline */}
          <Card>
            <CardHeader>
              <h3 className="text-xl text-white mb-6">Recent Events</h3>
              <div className="space-y-4">
                {recentEvents.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          event.type === "high"
                            ? "bg-red-400"
                            : event.type === "medium"
                            ? "bg-yellow-400"
                            : "bg-[#00FF9D]"
                        }`}
                      ></div>
                      {index < recentEvents.length - 1 && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-full bg-[#00FF9D]/10"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white mb-1">{event.message}</p>
                      <p className="text-xs text-gray-400">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
