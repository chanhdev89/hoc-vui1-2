
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SoundProvider } from './context/SoundContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import QuizPage from './pages/QuizPage';
import GamePage from './pages/GamePage';
import ScoreHistory from './pages/ScoreHistory';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SoundProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-blue-50/30">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz/:subjectId" element={<QuizPage />} />
                <Route path="/game/:gameId" element={<GamePage />} />
                <Route path="/history" element={<ScoreHistory />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SoundProvider>
    </AuthProvider>
  );
};

export default App;
