import { Card, CardContent, CardHeader } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Lock,
  Mail,
  Briefcase,
  Package,
  Gift,
  Phone,
  CreditCard,
  Users,
  Home,
  Car,
  Heart,
} from "lucide-react";

export function Awareness() {
  const scamCards = [
    {
      icon: DollarSign,
      title: "Loan Scam",
      description:
        "Fraudsters offer instant loans with minimal documentation, then ask for upfront processing fees or steal personal information.",
      color: "#F59E0B",
      tips: ["Never pay advance fees", "Verify lender credentials", "Check official licenses"],
    },
    {
      icon: Lock,
      title: "OTP Scam",
      description:
        "Scammers pose as bank officials or service providers to trick victims into sharing their One-Time Passwords (OTPs).",
      color: "#EF4444",
      tips: ["Never share OTPs", "Banks never ask for OTP", "Verify caller identity"],
    },
    {
      icon: Mail,
      title: "Phishing",
      description:
        "Fake emails and messages that mimic legitimate companies to steal login credentials, financial information, or personal data.",
      color: "#8B5CF6",
      tips: ["Check sender address", "Don't click suspicious links", "Enable 2FA"],
    },
    {
      icon: Briefcase,
      title: "Job Fraud",
      description:
        "Fake job offers promising high salaries for minimal work, often requesting fees for training, equipment, or registration.",
      color: "#06B6D4",
      tips: ["Research company thoroughly", "No legitimate job charges fees", "Verify job posting"],
    },
    {
      icon: Package,
      title: "Delivery Scam",
      description:
        "Fraudulent messages claiming failed package deliveries with links to fake tracking pages that steal personal information.",
      color: "#10B981",
      tips: ["Verify with courier directly", "Check tracking on official site", "Don't click SMS links"],
    },
    {
      icon: Gift,
      title: "Prize/Lottery Scam",
      description:
        "Notifications claiming you've won a prize or lottery you never entered, requesting fees or personal details to claim it.",
      color: "#F59E0B",
      tips: ["You can't win what you didn't enter", "No fees for legitimate prizes", "Verify independently"],
    },
    {
      icon: CreditCard,
      title: "Bank Impersonation",
      description:
        "Scammers pretend to be from your bank, claiming suspicious activity and asking for card details or account credentials.",
      color: "#EF4444",
      tips: ["Banks never ask for full credentials", "Call bank directly", "Don't share card details"],
    },
    {
      icon: Phone,
      title: "Tech Support Scam",
      description:
        "Fake tech support claiming your device has issues, then charging for unnecessary services or installing malware.",
      color: "#8B5CF6",
      tips: ["Legitimate companies don't cold call", "Don't allow remote access", "Use official channels"],
    },
    {
      icon: Users,
      title: "Investment Fraud",
      description:
        "Promises of high returns with low risk through fake investment schemes, cryptocurrency, or trading platforms.",
      color: "#06B6D4",
      tips: ["If it's too good, it's false", "Research investment thoroughly", "Check regulatory status"],
    },
    {
      icon: Home,
      title: "Rental Scam",
      description:
        "Fake property listings with unrealistic prices, requesting deposits before viewing or for non-existent properties.",
      color: "#10B981",
      tips: ["Always view property first", "Verify ownership", "Use secure payment methods"],
    },
    {
      icon: Car,
      title: "Vehicle Scam",
      description:
        "Fraudulent vehicle sales with below-market prices, non-existent vehicles, or fake ownership documents.",
      color: "#F59E0B",
      tips: ["Verify vehicle history", "Meet in person", "Check documentation thoroughly"],
    },
    {
      icon: Heart,
      title: "Romance Scam",
      description:
        "Scammers create fake romantic relationships online to gain trust, then request money for emergencies or travel.",
      color: "#EF4444",
      tips: ["Be cautious with online relationships", "Never send money", "Video call to verify identity"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl mb-4">
            <span className="text-white">Scam </span>
            <span className="text-[#00FF9D]">Awareness Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn about common scams and how to protect yourself. Knowledge is your first line of defense.
          </p>
        </div>

        {/* Quiz CTA Banner */}
        <Card className="mb-12 bg-gradient-to-r from-[#00FF9D]/10 to-transparent border-[#00FF9D]/30">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl text-white mb-2">Test Your Scam Detection Skills</h2>
                <p className="text-gray-400">
                  Take our interactive quiz to assess your knowledge and earn badges!
                </p>
              </div>
              <Link to="/quiz">
                <Button variant="primary" className="whitespace-nowrap">
                  Take the Quiz →
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scamCards.map((scam, index) => {
            const Icon = scam.icon;
            return (
              <Card key={index} className="hover:border-[#00FF9D]/30 transition-all group">
                <CardHeader>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${scam.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: scam.color }} />
                  </div>
                  <h3 className="text-xl text-white mb-3">{scam.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{scam.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-400 mb-2">Protection Tips:</div>
                    {scam.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00FF9D] mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full text-sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* General Safety Tips */}
        <Card className="bg-gradient-to-br from-[#00FF9D]/5 to-transparent border-[#00FF9D]/20">
          <CardHeader>
            <h2 className="text-3xl text-white mb-6 text-center">General Safety Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">1</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Verify Before Trusting</h4>
                    <p className="text-gray-400 text-sm">
                      Always verify the identity of callers and senders through official channels before sharing any
                      information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">2</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Protect Personal Information</h4>
                    <p className="text-gray-400 text-sm">
                      Never share passwords, OTPs, card numbers, or account details over phone, email, or text messages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">3</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Be Skeptical of Urgency</h4>
                    <p className="text-gray-400 text-sm">
                      Scammers create urgency to pressure quick decisions. Take time to think and verify.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">4</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Use Official Channels</h4>
                    <p className="text-gray-400 text-sm">
                      Contact companies directly using official website numbers, not numbers from suspicious messages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">5</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Report Suspicious Activity</h4>
                    <p className="text-gray-400 text-sm">
                      Report scams to ScamShield and local authorities to help protect others in the community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FF9D]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00FF9D]">6</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Trust Your Instincts</h4>
                    <p className="text-gray-400 text-sm">
                      If something feels wrong or too good to be true, it probably is. Trust your gut feeling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}