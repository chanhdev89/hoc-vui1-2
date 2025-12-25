
import React from 'react';
import { motion } from 'framer-motion';

export type IconType = 
  | 'math' 
  | 'vietnamese' 
  | 'english' 
  | 'science' 
  | 'life-skills' 
  | 'games' 
  | 'login' 
  | 'logout'
  | 'star';

interface AnimatedIconProps {
  type: IconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap: Record<IconType, string> = {
  math: '🧮',
  vietnamese: '📝',
  english: '🔤',
  science: '🧪',
  'life-skills': '🛡️',
  games: '🎮',
  login: '🔑',
  logout: '🚪',
  star: '⭐'
};

const sizeMap = {
  sm: 'text-xl w-8 h-8',
  md: 'text-3xl w-14 h-14',
  lg: 'text-5xl w-20 h-20',
  xl: 'text-7xl w-28 h-28'
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  type, 
  size = 'md', 
  color = 'bg-white',
  className = '',
  style
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.15, 
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.85 }}
      style={style}
      className={`
        icon-container 
        flex items-center justify-center rounded-3xl
        ${sizeMap[size]} 
        ${color} 
        shadow-sm 
        animate-idle-pulse 
        ${className}
      `}
    >
      <span className="animate-idle-shake select-none neon-text-glow">
        {iconMap[type]}
      </span>
    </motion.div>
  );
};

export default AnimatedIcon;
