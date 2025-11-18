import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Analyzer } from "./pages/Analyzer";
import { Lookup } from "./pages/Lookup";
import { Report } from "./pages/Report";
import { Dashboard } from "./pages/Dashboard";
import { Awareness } from "./pages/Awareness";
import { About } from "./pages/About";
import { Quiz } from "./pages/Quiz";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0F0F] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/lookup" element={<Lookup />} />
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}