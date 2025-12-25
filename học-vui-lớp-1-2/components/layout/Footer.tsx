
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-800 p-1.5 rounded text-white">
                <GraduationCap size={16} />
              </div>
              <span className="text-lg font-bold text-slate-800">HọcVui 1-2</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Nền tảng học tập trực tuyến sinh động, giúp học sinh tiểu học yêu thích việc học mỗi ngày.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Về chúng tôi</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Bảo mật</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
              Hệ thống học tập 2024
            </p>
            <p className="text-xs text-slate-400">
              © 2024 Học Vui 1-2. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;