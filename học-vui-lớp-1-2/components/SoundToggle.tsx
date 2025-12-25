
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { motion } from 'framer-motion';

const SoundToggle: React.FC = () => {
  const { isMuted, toggleMute } = useSound();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMute}
      className={`p-2.5 rounded-full transition-all border shadow-sm ${
        isMuted ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-blue-50 text-blue-600 border-blue-200'
      }`}
      title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </motion.button>
  );
};

export default SoundToggle;
