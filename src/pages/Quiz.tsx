import { useState } from "react";
import { Card, CardHeader } from "../components/Card";
import { Button } from "../components/Button";
import { Star, Zap, Flame, Trophy, Award, Shield, CheckCircle2, XCircle, ChevronRight } from "lucide-react";

type QuizMode = "beginner" | "intermediate" | "expert" | null;
type QuizState = "mode-selection" | "quiz-active" | "quiz-complete";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  points: number;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

export function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>("mode-selection");
  const [selectedMode, setSelectedMode] = useState<QuizMode>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([
    { id: "phishing", name: "Phishing Hunter", description: "Complete all phishing questions", icon: "🎯", earned: false },
    { id: "otp", name: "OTP Guardian", description: "Master OTP scam detection", icon: "🔐", earned: false },
    { id: "loan", name: "Loan Scam Breaker", description: "Identify loan scams perfectly", icon: "💰", earned: false },
    { id: "master", name: "Scam-Proof Master", description: "Score 45 or higher", icon: "🏆", earned: false },
  ]);

  // All 50 questions organized by difficulty
  const allQuestions: Question[] = [
    // LEVEL 1 - EASY (15 Questions)
    { id: 1, question: "A message says you won a prize and must click a link. Scam or safe?", options: ["Safe", "Scam", "Need more info", "Click to verify"], correctAnswer: 1, explanation: "Unsolicited prize messages are classic scams designed to steal your data or money.", difficulty: "easy", points: 1 },
    { id: 2, question: "Someone asks for your OTP. Scam or safe?", options: ["Safe if they're from bank", "Always a scam", "Safe if urgent", "Depends on caller ID"], correctAnswer: 1, explanation: "Never share your OTP with anyone. Banks never ask for OTPs.", difficulty: "easy", points: 1 },
    { id: 3, question: "A stranger sends a loan offer with 0% interest. What is it likely to be?", options: ["Great opportunity", "Probably a scam", "Bank promotion", "Government scheme"], correctAnswer: 1, explanation: "Unrealistic loan offers with no interest are typically scams to collect your personal information.", difficulty: "easy", points: 1 },
    { id: 4, question: "A message asks for your bank account details. What should you do?", options: ["Share if urgent", "Never share via message", "Call them first", "Share only last 4 digits"], correctAnswer: 1, explanation: "Never share bank details through messages. Banks never request this information via SMS.", difficulty: "easy", points: 1 },
    { id: 5, question: "You get a delivery message with no tracking ID. Scam or safe?", options: ["Safe delivery notice", "Likely a scam", "Contact seller", "Click the link"], correctAnswer: 1, explanation: "Legitimate delivery notifications always include tracking IDs. This is a phishing attempt.", difficulty: "easy", points: 1 },
    { id: 6, question: "A caller says \"Your ATM card will be blocked in 2 hours unless...\" — scam?", options: ["Urgent, act now", "Definitely a scam", "Call bank to verify", "Share CVV to prevent"], correctAnswer: 1, explanation: "This is a pressure tactic used by scammers. Banks never threaten immediate card blocking via calls.", difficulty: "easy", points: 1 },
    { id: 7, question: "A job offer promises ₹50,000/day for no work. Scam or safe?", options: ["Dream job", "Obvious scam", "Try it out", "Legitimate work from home"], correctAnswer: 1, explanation: "No legitimate job pays such amounts for no work. This is a scam to collect registration fees.", difficulty: "easy", points: 1 },
    { id: 8, question: "You get an SMS from \"BANK-ALERT\" with a shady link. Safe?", options: ["Safe, it's from bank", "Scam - fake sender ID", "Click to check", "Forward to verify"], correctAnswer: 1, explanation: "Scammers can spoof sender IDs. Always verify through official bank apps or websites.", difficulty: "easy", points: 1 },
    { id: 9, question: "A message says: \"Click here to verify your Google account.\" Scam?", options: ["Must verify immediately", "Phishing scam", "Google security", "Safe to click"], correctAnswer: 1, explanation: "Google never asks for verification via random links. This is a phishing attempt.", difficulty: "easy", points: 1 },
    { id: 10, question: "Someone asks you to pay for a \"processing fee\" to claim a lottery. Scam?", options: ["Normal procedure", "Classic scam", "Pay to win", "Legitimate lottery"], correctAnswer: 1, explanation: "You never need to pay to receive a legitimate prize. This is a fee scam.", difficulty: "easy", points: 1 },
    { id: 11, question: "A friend's WhatsApp number is asking for money urgently. What do you check first?", options: ["Send immediately", "Call them directly to verify", "Ask for details", "Check their status"], correctAnswer: 1, explanation: "Accounts get hacked. Always verify through a direct phone call before sending money.", difficulty: "easy", points: 1 },
    { id: 12, question: "A delivery company asks for ₹10 to release a package. Scam or safe?", options: ["Pay to receive", "Likely a scam", "Common practice", "Contact support first"], correctAnswer: 1, explanation: "Legitimate delivery services don't ask for small payments via messages. This is a data theft scam.", difficulty: "easy", points: 1 },
    { id: 13, question: "You receive an SMS with spelling mistakes asking for your details. Red flag?", options: ["Typo happens", "Major red flag - scam", "Legitimate", "Ignore it"], correctAnswer: 1, explanation: "Professional organizations don't send messages with errors. Scammers often have poor grammar.", difficulty: "easy", points: 1 },
    { id: 14, question: "You're asked to send an ID photo to receive a reward. Scam?", options: ["Safe verification", "Identity theft scam", "Standard procedure", "Required by law"], correctAnswer: 1, explanation: "Sending ID documents to unknown sources can lead to identity theft. Never share without verification.", difficulty: "easy", points: 1 },
    { id: 15, question: "A stranger offers a SIM upgrade via SMS link. Should you click it?", options: ["Yes, free upgrade", "No - verify with provider first", "Click to see offer", "Safe from telecom"], correctAnswer: 1, explanation: "Verify such offers directly with your service provider. Links in messages can be malicious.", difficulty: "easy", points: 1 },
    
    // LEVEL 2 - MEDIUM (20 Questions)
    { id: 16, question: "An email domain says \"support-bank-security.com\". Legit or suspicious?", options: ["Legitimate bank", "Suspicious - likely fake", "Official support", "Safe to use"], correctAnswer: 1, explanation: "Scammers create similar-looking domains. Always check the official bank website for correct domains.", difficulty: "medium", points: 2 },
    { id: 17, question: "A job recruiter asks for an upfront registration fee. Scam?", options: ["Normal recruitment", "Recruitment scam", "Investment in career", "Refundable fee"], correctAnswer: 1, explanation: "Legitimate employers never charge fees to apply or register. This is a common job scam.", difficulty: "medium", points: 2 },
    { id: 18, question: "A QR code is sent asking for payment verification. Safe?", options: ["Modern verification", "QR code scam", "Secure method", "Bank approved"], correctAnswer: 1, explanation: "Scanning unknown QR codes can initiate unauthorized payments. Never scan QR codes from messages.", difficulty: "medium", points: 2 },
    { id: 19, question: "A message claims your electricity will be cut in 30 minutes if you don't pay. Scam?", options: ["Urgent payment needed", "Pressure tactic scam", "Utility company notice", "Pay immediately"], correctAnswer: 1, explanation: "Utility companies provide proper notices, not threatening messages. This is a pressure scam.", difficulty: "medium", points: 2 },
    { id: 20, question: "A caller asks you to screen-share your banking app. What do you do?", options: ["Help them help you", "Refuse immediately - scam", "Only show part", "Safe if bank employee"], correctAnswer: 1, explanation: "Never screen-share banking apps. Scammers can see your credentials and OTPs.", difficulty: "medium", points: 2 },
    { id: 21, question: "A delivery fee SMS asks you to fill out card info. Safe?", options: ["Pay for delivery", "Card theft scam", "COD alternative", "Safe payment"], correctAnswer: 1, explanation: "Legitimate delivery services don't collect card details via SMS links. This steals your card info.", difficulty: "medium", points: 2 },
    { id: 22, question: "Someone claims they are from \"Cyber Crime Department\" and wants your Aadhaar. Scam?", options: ["Cooperate with authority", "Impersonation scam", "Legal requirement", "Provide copy"], correctAnswer: 1, explanation: "Real cyber crime officials don't ask for documents via calls. This is impersonation fraud.", difficulty: "medium", points: 2 },
    { id: 23, question: "You receive an Amazon refund link asking for bank info. Scam?", options: ["Process refund", "Phishing scam", "Amazon policy", "Safe if order exists"], correctAnswer: 1, explanation: "Amazon processes refunds through the app, never via SMS links asking for bank details.", difficulty: "medium", points: 2 },
    { id: 24, question: "A Paytm KYC verification SMS wants your password. Scam?", options: ["Complete KYC", "Never share password - scam", "Regulatory requirement", "Safe verification"], correctAnswer: 1, explanation: "KYC never requires passwords. Paytm will never ask for your password via SMS.", difficulty: "medium", points: 2 },
    { id: 25, question: "A message says your PAN is blocked, click here. Scam or safe?", options: ["Urgent action needed", "Scam - verify with IT dept", "Government notice", "Click to unblock"], correctAnswer: 1, explanation: "The Income Tax department never sends blocking notifications via SMS. Check official portal.", difficulty: "medium", points: 2 },
    { id: 26, question: "A scammer uses a number similar to your bank's. What's this called?", options: ["Bank branch", "Caller ID spoofing", "New number", "Regional office"], correctAnswer: 1, explanation: "Caller ID spoofing allows scammers to display fake numbers that look like legitimate ones.", difficulty: "medium", points: 2 },
    { id: 27, question: "An SMS says you owe a tax payment of ₹125 immediately. Scam?", options: ["Pay to avoid penalty", "Tax scam", "Government notice", "Small amount, safe"], correctAnswer: 1, explanation: "Tax departments send formal notices, not SMS demands. Small amounts are used to seem credible.", difficulty: "medium", points: 2 },
    { id: 28, question: "A link looks like: \"paytm-refund-secure.xyz\". Safe?", options: ["Secure refund link", "Fake domain - scam", "Paytm subdomain", "Click to verify"], correctAnswer: 1, explanation: "The .xyz domain and hyphenated name indicate a fake website designed to look like Paytm.", difficulty: "medium", points: 2 },
    { id: 29, question: "A caller asks you to install a screen-sharing app. Scam?", options: ["Customer support tool", "Remote access scam", "Safe if from company", "Modern support"], correctAnswer: 1, explanation: "Scammers use screen-sharing to view your device and steal information. Never install on request.", difficulty: "medium", points: 2 },
    { id: 30, question: "Job offer asks you to \"complete one paid task first.\" Legit?", options: ["Trial task", "Advance fee scam", "Standard procedure", "Skills test"], correctAnswer: 1, explanation: "This is a task scam where you pay for training/tasks but never get the job or payment.", difficulty: "medium", points: 2 },
    { id: 31, question: "You see a premium number calling multiple times. Red flag?", options: ["Important call", "Premium rate scam", "Business number", "Call back"], correctAnswer: 1, explanation: "Premium rate scams profit from you calling back. Don't return calls to unknown premium numbers.", difficulty: "medium", points: 2 },
    { id: 32, question: "Someone sends a suspicious UPI collect request. Scam?", options: ["Accept if small amount", "Never accept unknown requests", "Verify first", "Safe UPI transaction"], correctAnswer: 1, explanation: "Only accept UPI requests from people you know. Scammers send fraudulent collect requests.", difficulty: "medium", points: 2 },
    { id: 33, question: "A dating app match asks for money. Scam or safe?", options: ["Help if emergency", "Romance scam", "Genuine need", "Test of trust"], correctAnswer: 1, explanation: "Romance scams build fake relationships then ask for money. Never send money to online matches.", difficulty: "medium", points: 2 },
    { id: 34, question: "Fraudster sends fake transaction screenshot. What's this tactic called?", options: ["Proof of payment", "Screenshot scam", "Payment confirmation", "Bank receipt"], correctAnswer: 1, explanation: "Screenshots are easily faked. Always verify payments in your actual bank/payment app.", difficulty: "medium", points: 2 },
    { id: 35, question: "A message says \"verify your Aadhaar to avoid account freeze.\" Safe?", options: ["Urgent compliance", "Aadhaar phishing scam", "UIDAI notice", "Click to verify"], correctAnswer: 1, explanation: "UIDAI never sends such threats. This is a scam to steal your Aadhaar details.", difficulty: "medium", points: 2 },
    
    // LEVEL 3 - HARD (15 Questions)
    { id: 36, question: "A scam message uses correct grammar & branding. What technique is this?", options: ["Legitimate message", "Sophisticated phishing", "Official communication", "Standard format"], correctAnswer: 1, explanation: "Advanced scammers copy branding and use proper language to appear legitimate. Always verify sources.", difficulty: "hard", points: 3 },
    { id: 37, question: "A fraudster uses emotional manipulation to gain trust. Name the method.", options: ["Persuasion", "Social engineering", "Marketing", "Sales technique"], correctAnswer: 1, explanation: "Social engineering exploits human psychology and emotions to manipulate victims into sharing information.", difficulty: "hard", points: 3 },
    { id: 38, question: "OTP bypass scam typically starts how?", options: ["Asking directly", "Fake verification call", "Email request", "SMS link"], correctAnswer: 1, explanation: "Scammers call pretending to verify accounts, then trick victims into sharing OTPs during the call.", difficulty: "hard", points: 3 },
    { id: 39, question: "Caller ID spoofing allows scammers to do what?", options: ["Hide identity", "Display fake trusted numbers", "Block tracking", "Increase call volume"], correctAnswer: 1, explanation: "Spoofing lets scammers display legitimate-looking numbers like banks or government agencies.", difficulty: "hard", points: 3 },
    { id: 40, question: "SIM swap attack purpose?", options: ["Upgrade SIM", "Take over phone number to bypass 2FA", "Network improvement", "Change provider"], correctAnswer: 1, explanation: "Scammers port your number to their SIM to receive OTPs and access your accounts.", difficulty: "hard", points: 3 },
    { id: 41, question: "Whale phishing targets which group?", options: ["General public", "High-profile executives/VIPs", "Young people", "Senior citizens"], correctAnswer: 1, explanation: "Whaling targets senior executives and high-value individuals for larger financial gains.", difficulty: "hard", points: 3 },
    { id: 42, question: "You receive a message with a shortened URL (bit.ly). What should you check?", options: ["Click to see", "Expand URL first to verify destination", "Safe if from contact", "Short links are secure"], correctAnswer: 1, explanation: "Shortened URLs hide the real destination. Use URL expanders to check where they lead before clicking.", difficulty: "hard", points: 3 },
    { id: 43, question: "Fraudsters ask for \"remote access\" to phone. Why?", options: ["Tech support", "Complete control to steal data/money", "Faster problem solving", "Safe diagnostic"], correctAnswer: 1, explanation: "Remote access gives scammers full control to access banking apps, passwords, and sensitive data.", difficulty: "hard", points: 3 },
    { id: 44, question: "A scammer claims to be from RBI. How do you verify?", options: ["Trust caller ID", "Contact RBI through official website only", "Ask for ID number", "Believe if detailed"], correctAnswer: 1, explanation: "Never trust unsolicited calls. Always contact organizations through their official verified channels.", difficulty: "hard", points: 3 },
    { id: 45, question: "A link uses a Unicode domain to look like a real bank website. What is this attack called?", options: ["Domain spoofing", "Homograph attack", "URL hijacking", "DNS poisoning"], correctAnswer: 1, explanation: "Homograph attacks use similar-looking Unicode characters to create fake domains that appear real.", difficulty: "hard", points: 3 },
    { id: 46, question: "Someone wants you to \"verify identity\" using your face + ID. Possible scam type?", options: ["Secure verification", "Deepfake/identity theft setup", "KYC requirement", "Biometric security"], correctAnswer: 1, explanation: "Scammers collect face data and IDs to create deepfakes or commit identity fraud.", difficulty: "hard", points: 3 },
    { id: 47, question: "A scammer sends OTP before you even initiated a login. What does this indicate?", options: ["System error", "They're attempting unauthorized access", "Pre-verification", "Security check"], correctAnswer: 1, explanation: "Receiving unexpected OTPs means someone is trying to access your account. Never share these OTPs.", difficulty: "hard", points: 3 },
    { id: 48, question: "Fake customer care number on Google search — what fraud is this?", options: ["SEO mistake", "Search engine manipulation scam", "Ad placement", "Google error"], correctAnswer: 1, explanation: "Scammers pay for ads or manipulate SEO to show fake support numbers at the top of search results.", difficulty: "hard", points: 3 },
    { id: 49, question: "Caller claims they inserted money into your account by mistake. Classic scam name?", options: ["Bank error", "Accidental transfer scam", "Refund request", "System glitch"], correctAnswer: 1, explanation: "This scam tricks victims into 'returning' money that was never actually deposited.", difficulty: "hard", points: 3 },
    { id: 50, question: "A scammer sends crypto investment returns screenshot. What scam is this?", options: ["Proof of profit", "Ponzi/pyramid scheme", "Successful trading", "Investment opportunity"], correctAnswer: 1, explanation: "Fake screenshots lure victims into crypto pyramid schemes where early investors are paid with new victims' money.", difficulty: "hard", points: 3 },
  ];

  // Filter questions based on mode
  const getQuestionsForMode = () => {
    if (selectedMode === "beginner") {
      return allQuestions.filter(q => q.difficulty === "easy");
    } else if (selectedMode === "intermediate") {
      return allQuestions.filter(q => q.difficulty === "medium");
    } else if (selectedMode === "expert") {
      return allQuestions.filter(q => q.difficulty === "hard");
    }
    return [];
  };

  const currentQuestions = getQuestionsForMode();
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;

  const startQuiz = (mode: QuizMode) => {
    setSelectedMode(mode);
    setQuizState("quiz-active");
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCorrectStreak(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showFeedback) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + currentQuestion.points);
      setCorrectStreak(correctStreak + 1);
      
      // Check for streak badge
      if (correctStreak + 1 >= 5) {
        const newBadges = [...badges];
        const streakBadge = newBadges.find(b => b.id === "phishing");
        if (streakBadge && !streakBadge.earned) {
          streakBadge.earned = true;
          setBadges(newBadges);
        }
      }
    } else {
      setCorrectStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz complete
      checkFinalBadges();
      setQuizState("quiz-complete");
    }
  };

  const checkFinalBadges = () => {
    const newBadges = [...badges];
    const maxScore = totalQuestions * (selectedMode === "expert" ? 3 : selectedMode === "intermediate" ? 2 : 1);
    
    if (score >= maxScore * 0.9) {
      const masterBadge = newBadges.find(b => b.id === "master");
      if (masterBadge) masterBadge.earned = true;
    }
    
    setBadges(newBadges);
  };

  const getRank = () => {
    const maxScore = totalQuestions * (selectedMode === "expert" ? 3 : selectedMode === "intermediate" ? 2 : 1);
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 90) return { title: "Scam-Proof Master", color: "text-[#00FF9D]", icon: Trophy };
    if (percentage >= 70) return { title: "Cyber Defender", color: "text-blue-400", icon: Shield };
    if (percentage >= 40) return { title: "Aware Citizen", color: "text-yellow-400", icon: Award };
    return { title: "At Risk – Learn More", color: "text-red-400", icon: XCircle };
  };

  const resetQuiz = () => {
    setQuizState("mode-selection");
    setSelectedMode(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCorrectStreak(0);
    setBadges(badges.map(b => ({ ...b, earned: false })));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 mb-6">
            <Trophy className="w-4 h-4 text-[#00FF9D]" />
            <span className="text-sm text-[#00FF9D]">Test Your Knowledge</span>
          </div>
          
          <h1 className="text-5xl mb-4">
            <span className="text-white">Scam Awareness </span>
            <span className="text-[#00FF9D]">Quiz</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Test your knowledge. Level up your scam detection skills.
          </p>
        </div>

        {/* Mode Selection */}
        {quizState === "mode-selection" && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-center mb-8 text-white">Choose Your Challenge Level</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Beginner Mode */}
              <Card className="group hover:border-[#00FF9D] transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">⭐</div>
                  <h3 className="text-2xl text-white mb-2">Beginner Mode</h3>
                  <p className="text-[#00FF9D] mb-4">Level 1 - Easy</p>
                  <p className="text-gray-400 mb-6">Basic scam identification</p>
                  <div className="text-sm text-gray-500 mb-6">15 Questions • 1 point each</div>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => startQuiz("beginner")}
                  >
                    Start Level 1
                  </Button>
                </CardHeader>
              </Card>

              {/* Intermediate Mode */}
              <Card className="group hover:border-[#00FF9D] transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl text-white mb-2">Intermediate Mode</h3>
                  <p className="text-[#00FF9D] mb-4">Level 2 - Medium</p>
                  <p className="text-gray-400 mb-6">Realistic scam scenarios</p>
                  <div className="text-sm text-gray-500 mb-6">20 Questions • 2 points each</div>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => startQuiz("intermediate")}
                  >
                    Start Level 2
                  </Button>
                </CardHeader>
              </Card>

              {/* Expert Mode */}
              <Card className="group hover:border-[#00FF9D] transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <h3 className="text-2xl text-white mb-2">Expert Mode</h3>
                  <p className="text-[#00FF9D] mb-4">Level 3 - Hard</p>
                  <p className="text-gray-400 mb-6">Advanced fraud detection challenges</p>
                  <div className="text-sm text-gray-500 mb-6">15 Questions • 3 points each</div>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => startQuiz("expert")}
                  >
                    Start Level 3
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Quiz Active */}
        {quizState === "quiz-active" && currentQuestion && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Quiz Panel */}
            <div className="lg:col-span-2">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-[#00FF9D]">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                </div>
                <div className="h-2 bg-[#141B1B] rounded-full overflow-hidden border border-[#00FF9D]/20">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00FF9D] to-[#00FF9D]/50 transition-all duration-500"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-xs text-[#00FF9D] mb-4">
                        {selectedMode === "beginner" ? "Easy" : selectedMode === "intermediate" ? "Medium" : "Hard"} • {currentQuestion.points} {currentQuestion.points === 1 ? "point" : "points"}
                      </div>
                      <h2 className="text-2xl text-white mb-6 leading-relaxed">
                        {currentQuestion.question}
                      </h2>
                    </div>
                  </div>

                  {/* Answer Options */}
                  <div className="space-y-3 mb-6">
                    {currentQuestion.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === currentQuestion.correctAnswer;
                      const showCorrect = showFeedback && isCorrect;
                      const showWrong = showFeedback && isSelected && !isCorrect;

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showFeedback}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            showCorrect
                              ? "border-green-500 bg-green-500/10"
                              : showWrong
                              ? "border-red-500 bg-red-500/10"
                              : isSelected
                              ? "border-[#00FF9D] bg-[#00FF9D]/10"
                              : "border-[#1F2A2A] bg-[#141B1B] hover:border-[#00FF9D]/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white">{option}</span>
                            {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                            {showWrong && <XCircle className="w-5 h-5 text-red-500" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback */}
                  {showFeedback && (
                    <div className={`p-4 rounded-lg mb-6 border-2 ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-red-500/30 bg-red-500/5"
                    }`}>
                      <div className="flex items-start gap-3">
                        {selectedAnswer === currentQuestion.correctAnswer ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className={`mb-2 ${
                            selectedAnswer === currentQuestion.correctAnswer ? "text-green-400" : "text-red-400"
                          }`}>
                            {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect"}
                          </p>
                          <p className="text-gray-300 text-sm">{currentQuestion.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {!showFeedback ? (
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={handleNextQuestion}
                    >
                      {currentQuestionIndex < totalQuestions - 1 ? (
                        <>
                          Next Question
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </>
                      ) : (
                        "View Results"
                      )}
                    </Button>
                  )}
                </CardHeader>
              </Card>
            </div>

            {/* Right Side - Score & Rewards Sidebar */}
            <div className="lg:col-span-1">
              {/* Current Score */}
              <Card className="mb-6">
                <CardHeader>
                  <h3 className="text-lg text-gray-400 mb-2">Current Score</h3>
                  <div className="text-4xl text-[#00FF9D] mb-4">{score}</div>
                  <div className="text-sm text-gray-400">
                    Level {selectedMode === "beginner" ? "1" : selectedMode === "intermediate" ? "2" : "3"} • {
                      selectedMode === "beginner" ? "Beginner" : selectedMode === "intermediate" ? "Intermediate" : "Expert"
                    }
                  </div>
                </CardHeader>
              </Card>

              {/* Progress Ring */}
              <Card className="mb-6">
                <CardHeader>
                  <h3 className="text-lg text-white mb-4">Mastery Progress</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#1F2A2A"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#00FF9D"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - (currentQuestionIndex + 1) / totalQuestions)}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl text-[#00FF9D]">
                          {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg text-white mb-4">Rewards & Badges</h3>
                  <div className="space-y-3">
                    {badges.map((badge) => (
                      <div
                        key={badge.id}
                        className={`p-3 rounded-lg border transition-all ${
                          badge.earned
                            ? "border-[#00FF9D]/50 bg-[#00FF9D]/5"
                            : "border-[#1F2A2A] bg-[#141B1B] opacity-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{badge.icon}</div>
                          <div className="flex-1">
                            <div className={`text-sm mb-1 ${badge.earned ? "text-[#00FF9D]" : "text-gray-400"}`}>
                              {badge.name}
                            </div>
                            <div className="text-xs text-gray-500">{badge.description}</div>
                          </div>
                          {badge.earned && (
                            <CheckCircle2 className="w-5 h-5 text-[#00FF9D]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Quiz Complete - Results */}
        {quizState === "quiz-complete" && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="mb-6">
                  {(() => {
                    const rank = getRank();
                    const RankIcon = rank.icon;
                    return (
                      <>
                        <RankIcon className={`w-20 h-20 mx-auto mb-4 ${rank.color}`} />
                        <h2 className="text-3xl text-white mb-2">Quiz Complete!</h2>
                        <p className={`text-xl mb-6 ${rank.color}`}>{rank.title}</p>
                      </>
                    );
                  })()}
                </div>

                <div className="bg-[#141B1B] rounded-lg p-8 mb-8">
                  <div className="text-5xl text-[#00FF9D] mb-2">{score}</div>
                  <div className="text-gray-400">
                    out of {totalQuestions * (selectedMode === "expert" ? 3 : selectedMode === "intermediate" ? 2 : 1)} points
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    {totalQuestions} questions • Level {selectedMode === "beginner" ? "1" : selectedMode === "intermediate" ? "2" : "3"}
                  </div>
                </div>

                {/* Earned Badges */}
                <div className="mb-8">
                  <h3 className="text-xl text-white mb-6">Earned Badges</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {badges.filter(b => b.earned).map((badge) => (
                      <div
                        key={badge.id}
                        className="p-6 rounded-lg border-2 border-[#00FF9D]/50 bg-[#00FF9D]/5"
                      >
                        <div className="text-4xl mb-3">{badge.icon}</div>
                        <div className="text-lg text-[#00FF9D] mb-2">{badge.name}</div>
                        <div className="text-sm text-gray-400">{badge.description}</div>
                      </div>
                    ))}
                    {badges.filter(b => b.earned).length === 0 && (
                      <div className="col-span-2 text-gray-500 text-center py-8">
                        No badges earned this time. Try again to earn rewards!
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" onClick={resetQuiz}>
                    Retake Quiz
                  </Button>
                  <Button variant="secondary" onClick={() => window.location.hash = "#/awareness"}>
                    Learn in Awareness Hub
                  </Button>
                  <Button variant="ghost">
                    Download Certificate
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
