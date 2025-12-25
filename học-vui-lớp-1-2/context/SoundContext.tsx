
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type SoundType = 'click' | 'correct' | 'wrong' | 'victory' | 'start';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SOUND_PATHS: Record<SoundType, string> = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  correct: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  wrong: 'https://assets.mixkit.co/active_storage/sfx/256/256-preview.mp3',
  victory: 'https://assets.mixkit.co/active_storage/sfx/1433/1433-preview.mp3',
  start: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'
};

/**
 * Lưu ý: Các link trên là ví dụ hoạt động ngay. 
 * Để chạy hoàn toàn OFFLINE, hãy tải các file mp3 về 
 * và đổi đường dẫn thành '/sounds/click.mp3', v.v.
 */

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const saved = localStorage.getItem('is_muted');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('is_muted', isMuted.toString());
  }, [isMuted]);

  const toggleMute = () => setIsMuted(prev => !prev);

  const playSound = useCallback((type: SoundType) => {
    if (isMuted) return;
    
    const audio = new Audio(SOUND_PATHS[type]);
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play().catch(err => {
      // Trình duyệt chặn tự động phát âm thanh nếu người dùng chưa tương tác
      console.warn('Audio play blocked:', err);
    });
  }, [isMuted]);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) throw new Error('useSound must be used within SoundProvider');
  return context;
};
