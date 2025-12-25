
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, Play } from 'lucide-react';
import { useSound } from '../context/SoundContext';

interface Props {
  id: string;
  title: string;
  description: string;
  gradient: string;
}

const GameCard: React.FC<Props> = ({ id, title, description, gradient }) => {
  const { playSound } = useSound();
  const navigate = useNavigate();

  const handlePlay = () => {
    playSound('click');
    navigate(`/game/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={handlePlay}
      className={`relative overflow-hidden rounded-2xl p-8 min-h-[200px] flex flex-col justify-between bg-gradient-to-br ${gradient} text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer group border border-white/10`}
    >
      {/* Decorative Subtle Background */}
      <div className="absolute -top-10 -right-10 p-4 text-white/5 group-hover:scale-125 transition-transform duration-500">
        <Gamepad2 size={240} />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-white/20">
            <Gamepad2 size={20} />
          </div>
          <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{title}</h3>
          <p className="text-white/80 text-sm font-medium max-w-[300px] leading-relaxed">{description}</p>
        </div>
        
        <div className="bg-white text-slate-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-lg self-start md:self-center">
          <Play size={16} className="fill-slate-800" />
          CHƠI NGAY
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;