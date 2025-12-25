
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Timer, RotateCcw, Trophy } from 'lucide-react';
import { fastMathGameQuestions, wordMatchGameQuestions } from '../data/questions';
import { useAuth } from '../context/AuthContext';
import { useSound } from '../context/SoundContext';
import { ScoreRecord } from '../types';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { playSound } = useSound();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameState, setGameState] = useState<any>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadQuestion(0);
  }, [gameId, user, navigate]);

  const loadQuestion = (idx: number) => {
    if (gameId === 'speed') {
      const q = fastMathGameQuestions[idx % fastMathGameQuestions.length];
      setGameState(q);
    } else {
      const q = wordMatchGameQuestions[idx % wordMatchGameQuestions.length];
      setGameState(q);
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver && user) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isGameOver) {
      setIsGameOver(true);
      playSound('victory');
    }
  }, [timeLeft, isGameOver, user]);

  useEffect(() => {
    if (isGameOver && user) {
      // Lưu lịch sử điểm trò chơi
      const newRecord: ScoreRecord = {
        id: Math.random().toString(36).substr(2, 9),
        userName: user.name,
        subjectTitle: gameId === 'speed' ? 'TRÒ CHƠI TOÁN NHANH' : 'TRÒ CHƠI GHÉP CHỮ',
        score: score,
        total: 100, 
        date: new Date().toISOString(),
        type: 'game'
      };
      
      const existingHistory = JSON.parse(localStorage.getItem('score_history') || '[]');
      localStorage.setItem('score_history', JSON.stringify([...existingHistory, newRecord]));
    }
  }, [isGameOver]);

  if (!user) return null;

  const handleAction = (idx: number) => {
    if (idx === gameState.correctAnswer) {
      setScore(s => s + 10);
      playSound('correct');
    } else {
      setScore(s => Math.max(0, s - 5));
      playSound('wrong');
    }
    const nextIdx = currentIdx + 1;
    setCurrentIdx(nextIdx);
    loadQuestion(nextIdx);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-2xl text-center">
      <div className="flex items-center justify-between mb-12">
        <button onClick={() => { playSound('click'); navigate('/'); }} className="flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors"><ArrowLeft /> Quay lại</button>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold text-red-500"><Timer className="animate-pulse" /> {timeLeft}s</div>
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xl shadow-lg shadow-blue-100">Điểm: {score}</div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isGameOver ? (
          <motion.div key={currentIdx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 min-h-[400px] flex flex-col items-center justify-center border-4 border-blue-50">
            <h3 className="text-xl font-black text-blue-500 mb-6 tracking-widest uppercase">{gameId === 'speed' ? 'TOÁN NHANH' : 'GHÉP CHỮ'}</h3>
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-gray-800 leading-tight">
              {gameState?.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {gameState?.options.map((opt: string, i: number) => (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  key={i} 
                  onClick={() => handleAction(i)} 
                  className="bg-white border-4 border-blue-50 hover:border-blue-500 hover:bg-blue-50 text-gray-800 py-8 rounded-3xl text-4xl font-black shadow-sm transition-all"
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-12 rounded-[40px] shadow-2xl border-t-8 border-blue-500">
            <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-5xl font-black mb-6 text-gray-800">HẾT GIỜ! ⏰</h2>
            <p className="text-2xl mb-12 font-bold text-gray-600">Chúc mừng bé <b>{user.name}</b>!<br/>Tổng điểm của bé là: <span className="text-blue-600 text-5xl font-black block mt-2">{score}</span></p>
            <div className="flex flex-col gap-3">
              <button onClick={() => { playSound('click'); navigate('/history'); }} className="w-full bg-yellow-400 text-blue-900 py-4 rounded-2xl font-black text-xl hover:bg-yellow-300 shadow-xl transition-all">Xem Bảng Vàng</button>
              <div className="flex gap-4">
                <button onClick={() => { playSound('click'); window.location.reload(); }} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all"><RotateCcw /> Chơi lại</button>
                <button onClick={() => { playSound('click'); navigate('/'); }} className="flex-1 bg-gray-100 text-gray-600 py-5 rounded-2xl font-black text-xl hover:bg-gray-200 transition-all">Thoát</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamePage;
