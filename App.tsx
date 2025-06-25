import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Messages } from "./components/Messages";
import { MinistryPartnership } from "./components/MinistryPartnership";
import { CommunityService } from "./components/CommunityService";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/ministry-partnership" element={<MinistryPartnership />} />
            <Route path="/community-service" element={<CommunityService />} />
            {/* Catch-all route - redirects any unmatched routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}