// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

// Import public components
import { FixedNavigation } from "./components/fixed-navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { EventsSection } from "./components/events-section"
import { TeamSection } from "./components/team-section"
import { GallerySection } from "./components/gallery-section"
import { ContactSection } from "./components/contact-section"
import { FAQSection } from "./components/faq-section"
import { FooterSection } from "./components/footer-section"
import { ThemeProvider } from "./components/theme-provider"

// Import admin components
import AdminLayout from './components/admin/AdminLayout';
import Login from './components/admin/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import EventManagement from './pages/admin/EventManagement';
import MessageManagement from './pages/admin/MessageManagement'; // Import the new component
import EventForm from './components/admin/EventForm';

// A simple authentication check
const isAuthenticated = () => {
    return localStorage.getItem('x-admin-key') === 'supersecretkey';
};

// A component to protect routes
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return isAuthenticated() ? (
        <React.Fragment>{children}</React.Fragment>
    ) : (
        <Navigate to="/admin/login" />
    );
};

// Public Layout Component
const PublicLayout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="gdgoc-theme">
      <div className="min-h-screen bg-background text-foreground grid-pattern">
        <FixedNavigation />
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <EventsSection />
          <TeamSection />
          <ContactSection />
          <FAQSection />
        </main>
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

// Main application component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        
        {/* Admin Login Route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
              <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="events" element={<EventManagement />} />
          <Route path="messages" element={<MessageManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}