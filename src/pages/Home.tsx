import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader } from "../components/Card";
import { Shield, Eye, Database, BarChart3, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9D] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF9D] rounded-full blur-[120px] opacity-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 mb-6">
                <Shield className="w-4 h-4 text-[#00FF9D]" />
                <span className="text-sm text-[#00FF9D]">Real-Time Protection</span>
              </div>

              <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
                <span className="text-white">Scam Shield —</span>
                <br />
                <span className="text-[#00FF9D]">Stop Scams Before</span>
                <br />
                <span className="text-[#00FF9D]">They Reach You</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Advanced AI-powered platform that detects, flags, and reports scam calls and messages in real-time.
                Protect yourself and your community from fraud.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/analyzer">
                  <Button variant="primary">Try Live Demo</Button>
                </Link>
                <Link to="/awareness">
                  <Button variant="secondary">View Awareness Hub</Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#00FF9D]/10">
                <div>
                  <div className="text-3xl text-[#00FF9D] mb-1">50K+</div>
                  <div className="text-sm text-gray-400">Scams Blocked</div>
                </div>
                <div>
                  <div className="text-3xl text-[#00FF9D] mb-1">15K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl text-[#00FF9D] mb-1">99.9%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2VjdXJpdHklMjBtb2JpbGV8ZW58MXx8fHwxNzYzNDgzNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Phone with scam detection"
                  className="w-full rounded-3xl shadow-2xl"
                />
                {/* Floating scam detection card */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#141B1B]/90 backdrop-blur-lg border border-[#00FF9D]/30 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white">Scam Detected</div>
                      <div className="text-xs text-gray-400">+1 (555) 123-4567</div>
                    </div>
                    <div className="text-2xl text-red-400">85</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141B1B]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              <span className="text-white">How It </span>
              <span className="text-[#00FF9D]">Works</span>
            </h2>
            <p className="text-xl text-gray-400">Three simple steps to stay protected</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#00FF9D]" />
                </div>
                <h3 className="text-xl text-white mb-2">1. Submit for Analysis</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Paste suspicious messages or enter phone numbers into our analyzer. Our AI instantly begins scanning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#00FF9D]" />
                </div>
                <h3 className="text-xl text-white mb-2">2. Real-Time Detection</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Advanced algorithms analyze patterns, keywords, and behavior to determine threat level in seconds.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#00FF9D]" />
                </div>
                <h3 className="text-xl text-white mb-2">3. Take Action</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Get instant results with recommended actions: block, report, or mark as safe for the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              <span className="text-white">Powerful </span>
              <span className="text-[#00FF9D]">Features</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to stay safe</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card glowing>
              <CardHeader>
                <Shield className="w-8 h-8 text-[#00FF9D] mb-4" />
                <h3 className="text-lg text-white mb-2">Real-time Detection</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Instant analysis of messages and calls using advanced AI algorithms
                </p>
              </CardContent>
            </Card>

            <Card glowing>
              <CardHeader>
                <Database className="w-8 h-8 text-[#00FF9D] mb-4" />
                <h3 className="text-lg text-white mb-2">Phone Reputation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Comprehensive database of reported numbers with community insights
                </p>
              </CardContent>
            </Card>

            <Card glowing>
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-[#00FF9D] mb-4" />
                <h3 className="text-lg text-white mb-2">Reporting System</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Easy reporting interface to help protect the entire community
                </p>
              </CardContent>
            </Card>

            <Card glowing>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-[#00FF9D] mb-4" />
                <h3 className="text-lg text-white mb-2">Dashboard Analytics</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Track scam trends and view detailed statistics in real-time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/10 to-transparent"></div>
            <CardHeader className="relative text-center">
              <h2 className="text-3xl text-white mb-4">Ready to protect yourself?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users staying safe with ScamShield
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/analyzer">
                  <Button variant="primary">Get Started Free</Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary">Learn More</Button>
                </Link>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
