
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as QuestionsData from '../data/questions';
import { Question, ScoreRecord } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSound } from '../context/SoundContext';

const QuizPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { playSound } = useSound();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    let data: Question[] = [];
    switch (subjectId as string) {
      case 'math-basic': data = QuestionsData.mathBasicQuestions; break;
      case 'math-logic': data = QuestionsData.mathLogicQuestions; break;
      case 'vietnamese': data = QuestionsData.vietnameseQuestions; break;
      case 'reading': data = QuestionsData.readingQuestions; break;
      case 'spelling': data = QuestionsData.spellingQuestions; break;
      case 'english': data = QuestionsData.englishQuestions; break;
      case 'science-society': data = QuestionsData.scienceSocietyQuestions; break;
      case 'fun-science': data = QuestionsData.funScienceQuestions; break;
      case 'life-skills': data = QuestionsData.lifeSkillQuestions; break;
      case 'morals': data = QuestionsData.moralQuestions; break;
      case 'music': data = QuestionsData.musicQuestions; break;
      case 'art': data = QuestionsData.artQuestions; break;
      case 'iq': data = QuestionsData.iqQuestions; break;
      default: navigate('/'); return;
    }
    setQuestions(data);
  }, [subjectId, navigate, user]);

  useEffect(() => {
    if (isFinished && user) {
      playSound('victory');
      // Lưu lịch sử điểm
      const newRecord: ScoreRecord = {
        id: Math.random().toString(36).substr(2, 9),
        userName: user.name,
        subjectTitle: subjectId?.toUpperCase().replace('-', ' ') || 'BÀI TẬP',
        score: score,
        total: questions.length,
        date: new Date().toISOString(),
        type: 'quiz'
      };
      
      const existingHistory = JSON.parse(localStorage.getItem('score_history') || '[]');
      localStorage.setItem('score_history', JSON.stringify([...existingHistory, newRecord]));
    }
  }, [isFinished]);

  if (!user || questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsChecked(true);
    if (isCorrect) {
      setScore(s => s + 1);
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    playSound('click');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleOptionSelect = (idx: number) => {
    if (!isChecked) {
      setSelectedOption(idx);
      playSound('click');
    }
  };

  if (isFinished) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md w-full border-t-8 border-yellow-400">
          <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-black mb-4">HOÀN THÀNH 🎉</h2>
          <p className="text-xl text-gray-600 mb-8 font-bold">Bé <b>{user.name}</b> trả lời đúng <span className="text-blue-600 text-3xl font-black">{score}/{questions.length}</span> câu!</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => { playSound('click'); navigate('/history'); }} className="w-full bg-yellow-400 text-blue-900 py-4 rounded-2xl font-black text-xl hover:bg-yellow-300 transition-all">Xem Bảng Vàng</button>
            <button onClick={() => { playSound('click'); navigate('/'); }} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all">Về Trang Chủ</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <button onClick={() => { playSound('click'); navigate('/'); }} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium">
        <ArrowLeft className="w-5 h-5" /> Quay lại
      </button>
      <div className="mb-8">
        <div className="flex justify-between text-sm font-bold text-gray-500 mb-2">
          <span>Bé đang học môn: <span className="text-blue-600">{subjectId?.toUpperCase()}</span></span>
          <span>Câu {currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} className="h-full bg-blue-500" />
        </div>
      </div>
      <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-4 border-blue-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 leading-snug">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button key={idx} disabled={isChecked} onClick={() => handleOptionSelect(idx)} className={`w-full text-left p-5 rounded-2xl text-xl font-black transition-all border-4 flex items-center justify-between ${selectedOption === idx ? isChecked ? idx === currentQuestion.correctAnswer ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700' : 'bg-blue-50 border-blue-500 text-blue-700' : isChecked && idx === currentQuestion.correctAnswer ? 'bg-green-50 border-green-500 text-green-700' : 'bg-gray-50 border-gray-100 text-gray-600 hover:border-blue-200'}`}>
              {option}
              {isChecked && idx === currentQuestion.correctAnswer && <CheckCircle2 className="w-8 h-8 text-green-600" />}
              {isChecked && selectedOption === idx && idx !== currentQuestion.correctAnswer && <XCircle className="w-8 h-8 text-red-600" />}
            </button>
          ))}
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {!isChecked ? (
          <motion.button key="check-btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleCheck} disabled={selectedOption === null} className={`w-full py-5 rounded-2xl font-black text-2xl transition-all ${selectedOption !== null ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-gray-200 text-gray-400'}`}>KIỂM TRA</motion.button>
        ) : (
          <motion.button key="next-btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleNext} className={`w-full py-5 rounded-2xl font-black text-2xl text-white shadow-xl ${isCorrect ? 'bg-green-600 shadow-green-200' : 'bg-red-600 shadow-red-200'}`}>{currentIndex < questions.length - 1 ? 'TIẾP THEO' : 'HOÀN THÀNH'}</motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizPage;
