import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LawFirmsCarousel from './components/LawFirmsCarousel';
import SMSAlertSection from './components/SMSAlertSection';
import ReadAboutUs from './components/ReadAboutUs';
import Newsletter from './components/Newsletter';
import InterviewPrepBanner from './components/InterviewPrepBanner';
import TestimonialCards from './components/TestimonialCards';
import FeaturesSection from './components/FeaturesSection';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// New Pages
import JobsPage from './pages/JobsPage';
import LawFirmsPage from './pages/LawFirmsPage';
import ClerkshipsPage from './pages/ClerkshipsPage';
import PatentJobsPage from './pages/PatentJobsPage';
import AlertsPage from './pages/AlertsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogPage from './pages/BlogPage';
import NewsletterPage from './pages/NewsletterPage';
import AboutPage from './pages/AboutPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <LawFirmsCarousel />
      <SMSAlertSection />
      <ReadAboutUs />
      <Newsletter />
      <InterviewPrepBanner />
      <TestimonialCards />
      <FeaturesSection />
      <MissionSection />
    </>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/law-firms" element={<LawFirmsPage />} />
          <Route path="/clerkships" element={<ClerkshipsPage />} />
          <Route path="/patent-jobs" element={<PatentJobsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
