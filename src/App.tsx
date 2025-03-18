import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Trang chủ
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import IntegrationPage from './pages/IntegrationPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'

// Component ScrollToTop sẽ được tạo trong file riêng
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/integration" element={<IntegrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
