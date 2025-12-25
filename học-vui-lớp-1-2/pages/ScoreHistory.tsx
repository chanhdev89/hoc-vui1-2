
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Calendar, Trophy, Gamepad2 } from 'lucide-react';
import { ScoreRecord } from '../types';
import AnimatedIcon from '../components/AnimatedIcon';

const ScoreHistory: React.FC = () => {
  const [history, setHistory] = useState<ScoreRecord[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = localStorage.getItem('score_history');
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      // Sắp xếp mới nhất lên đầu
      setHistory(parsed.sort((a: ScoreRecord, b: ScoreRecord) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ));
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm('Bé có muốn xóa hết lịch sử điểm không?')) {
      localStorage.removeItem('score_history');
      setHistory([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600">
          <ArrowLeft /> Quay lại
        </button>
        {history.length > 0 && (
          <button 
            onClick={clearHistory}
            className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-all"
          >
            <Trash2 size={18} /> Xóa hết
          </button>
        )}
      </div>

      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-yellow-100 rounded-3xl mb-4">
          <AnimatedIcon type="star" size="md" color="bg-yellow-400" />
        </div>
        <h1 className="text-4xl font-black text-gray-800">Bảng Vàng Thành Tích</h1>
        <p className="text-gray-500 font-medium mt-2">Nơi lưu giữ những nỗ lực tuyệt vời của bé!</p>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {history.length > 0 ? (
            history.map((record) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[32px] p-6 shadow-xl border-2 border-blue-50 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className={`p-4 rounded-2xl ${record.type === 'quiz' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                    {record.type === 'quiz' ? <Trophy size={32} /> : <Gamepad2 size={32} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-800">{record.subjectTitle}</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm font-bold mt-1">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(record.date).toLocaleDateString('vi-VN')}</span>
                      <span className="text-blue-500">Bé: {record.userName}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-2xl w-full md:w-auto justify-center">
                  <span className="text-gray-400 font-bold">Kết quả:</span>
                  <span className="text-3xl font-black text-blue-600">{record.score}</span>
                  <span className="text-xl font-bold text-gray-300">/ {record.total}</span>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 bg-white rounded-[40px] shadow-inner border-4 border-dashed border-gray-100"
            >
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-300">Chưa có kết quả nào được lưu.</h3>
              <p className="text-gray-400 mt-2">Bé hãy bắt đầu học để thấy thành tích ở đây nhé!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScoreHistory;
