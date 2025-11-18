import { Card, CardHeader } from "../components/Card";
import { Shield, Target, Eye, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Protection First",
      description: "User safety is our top priority. We're committed to building the most robust scam detection system.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Our AI-driven algorithms continuously improve to maintain the highest detection accuracy.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication about how we detect scams and protect user data.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Empowering users to contribute and protect each other through shared reporting.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 mb-6">
            <Shield className="w-4 h-4 text-[#00FF9D]" />
            <span className="text-sm text-[#00FF9D]">About ScamShield</span>
          </div>
          
          <h1 className="text-5xl mb-6">
            <span className="text-white">Building a </span>
            <span className="text-[#00FF9D]">Safer Digital World</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ScamShield was born from a mission to protect people from the growing threat of digital fraud. 
            We combine cutting-edge AI technology with community-driven reporting to create a comprehensive 
            defense against scams.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-[#00FF9D]/5 to-transparent">
            <CardHeader>
              <h2 className="text-2xl text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower individuals and communities with advanced tools for real-time scam detection, 
                making digital communication safe and trustworthy for everyone. We believe that through 
                technology and collaboration, we can significantly reduce fraud and protect vulnerable populations.
              </p>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-[#00FF9D]/5 to-transparent">
            <CardHeader>
              <h2 className="text-2xl text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                A world where everyone can communicate digitally without fear of scams. We envision a 
                future where AI-powered protection is accessible to all, and communities work together 
                to identify and eliminate fraud before it causes harm.
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">
            <span className="text-white">Our </span>
            <span className="text-[#00FF9D]">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#00FF9D]" />
                    </div>
                    <h3 className="text-lg text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <Card className="bg-gradient-to-r from-[#00FF9D]/10 to-transparent">
            <CardHeader>
              <h2 className="text-3xl text-center text-white mb-8">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl text-[#00FF9D] mb-2">50K+</div>
                  <div className="text-gray-400">Scams Detected</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-[#00FF9D] mb-2">15K+</div>
                  <div className="text-gray-400">Protected Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-[#00FF9D] mb-2">99.9%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl text-[#00FF9D] mb-2">24/7</div>
                  <div className="text-gray-400">Monitoring</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
