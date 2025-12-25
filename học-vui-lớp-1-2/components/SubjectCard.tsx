
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SubjectInfo } from '../types';
import AnimatedIcon, { IconType } from './AnimatedIcon';
import { useAuth } from '../context/AuthContext';
import { useSound } from '../context/SoundContext';
import { ArrowRight } from 'lucide-react';

interface Props {
  subject: SubjectInfo;
}

const getIconType = (id: string): IconType => {
  if (id.includes('math')) return 'math';
  if (id.includes('vietnamese') || id === 'reading' || id === 'spelling') return 'vietnamese';
  if (id === 'english') return 'english';
  if (id.includes('science')) return 'science';
  if (id === 'life-skills' || id === 'morals') return 'life-skills';
  return 'star';
};

const SubjectCard: React.FC<Props> = ({ subject }) => {
  const { user } = useAuth();
  const { playSound } = useSound();
  const navigate = useNavigate();

  const handleStart = () => {
    playSound('click');
    if (user) {
      navigate(`/quiz/${subject.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onClick={handleStart}
      className="modern-card h-full cursor-pointer group flex flex-col overflow-hidden"
      style={{ backgroundColor: subject.color }}
    >
      {/* Decorative Subtle Patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

      <div className="relative z-10 p-8 flex flex-col h-full items-center text-center">
        {/* Large Focal Icon Box */}
        <div className="icon-container-colored w-28 h-28 mb-6 shadow-2xl">
          <AnimatedIcon 
            type={getIconType(subject.id)} 
            size="lg" 
            color="bg-transparent"
            className="!shadow-none"
            style={{ filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.15))' }}
          />
        </div>
        
        {/* Title & Description */}
        <div className="flex-grow mb-8">
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight drop-shadow-md">
            {subject.title}
          </h3>
          <p className="text-white/80 text-sm font-bold leading-relaxed px-2">
            {subject.description}
          </p>
        </div>

        {/* Premium Call to Action Button */}
        <div className="btn-premium-action">
          <span className="text-sm font-black uppercase tracking-wider">
            {user ? 'BẮT ĐẦU HỌC' : 'ĐĂNG NHẬP HỌC'}
          </span>
          <div className="btn-icon-circle shadow-inner">
            <ArrowRight size={16} strokeWidth={3} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;