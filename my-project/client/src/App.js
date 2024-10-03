import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming you have a Navbar component
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ViewApplications from './pages/ViewApplications';
import BulkUpload from './pages/BulkUpload'; // Import your BulkUploadPage component
import Shortlisting from './pages/Shortlisting';
import ScreeningTests from './pages/ScreeningTests';
import ResultsManagement from './pages/ResultsManagement';
import ReportsAnalytics from './pages/ReportsAnalytics';
import UserManagement from './pages/UserManagement';
import Settings from './pages/Settings';
import HelpSupport from './pages/HelpSupport';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/view-applications" element={<ViewApplications />} />
          <Route path="/bulk-upload" element={<BulkUpload />} /> {/* Updated to use BulkUpload */}
          <Route path="/shortlisting" element={<Shortlisting />} />
          <Route path="/screening-tests" element={<ScreeningTests />} />
          <Route path="/results-management" element={<ResultsManagement />} />
          <Route path="/reports-analytics" element={<ReportsAnalytics />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-support" element={<HelpSupport />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
