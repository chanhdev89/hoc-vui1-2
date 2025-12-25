
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import SoundToggle from '../SoundToggle';
import { Trophy, LogIn, LogOut, Home as HomeIcon, BookOpen, GraduationCap, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { playSound } = useSound();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = () => playSound('click');

  const isActive = (path: string) => location.pathname === path;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleLinkClick();
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg text-white shadow-blue-200 shadow-lg">
             <GraduationCap size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            HọcVui <span className="text-blue-600">1-2</span>
          </span>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" onClick={handleLinkClick} className={`nav-link text-sm ${isActive('/') ? 'text-blue-600 font-bold' : ''}`}>
            Trang chủ
          </Link>
          <a href="#subjects" onClick={(e) => handleScrollTo(e, 'subjects')} className="nav-link text-sm">
            Môn học
          </a>
          <a href="#games" onClick={(e) => handleScrollTo(e, 'games')} className="nav-link text-sm flex items-center gap-1">
            Trò chơi
          </a>
          <Link to="/history" onClick={handleLinkClick} className={`nav-link text-sm ${isActive('/history') ? 'text-blue-600 font-bold' : ''}`}>
            Lịch sử học
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <SoundToggle />
          
          <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Học sinh</span>
                <span className="text-sm font-bold text-slate-700">Bé {user.name}</span>
              </div>
              <button 
                onClick={() => { playSound('click'); logout(); navigate('/'); }}
                className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                title="Đăng xuất"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              onClick={handleLinkClick}
              className="px-5 py-2 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;