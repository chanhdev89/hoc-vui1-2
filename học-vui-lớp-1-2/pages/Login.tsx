
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSound } from '../context/SoundContext';
import { motion } from 'framer-motion';
import AnimatedIcon from '../components/AnimatedIcon';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const { playSound } = useSound();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      playSound('start');
      login(name);
      navigate('/');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-slate-200"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-2xl">
               <AnimatedIcon type="login" size="md" color="bg-transparent" className="!shadow-none text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">Chào mừng bé học tập</h2>
          <p className="text-slate-400 font-medium">Nhập tên của bé để bắt đầu hành trình kiến thức</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-slate-700 font-bold mb-3 ml-1 text-sm uppercase tracking-wider">Tên của bé</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Bảo Nam"
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg font-bold text-slate-800"
              required
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
          >
            Bắt đầu ngay
          </button>
        </form>
        
        <p className="text-center mt-10 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
          Hệ thống học tập tiểu học 1-2
        </p>
      </motion.div>
    </div>
  );
};

export default Login;