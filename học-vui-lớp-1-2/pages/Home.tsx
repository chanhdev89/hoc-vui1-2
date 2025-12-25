
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Lock, CheckCircle, Star } from 'lucide-react';
import SubjectCard from '../components/SubjectCard';
import GameCard from '../components/GameCard';
import AnimatedIcon from '../components/AnimatedIcon';
import { SubjectInfo } from '../types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSound } from '../context/SoundContext';

const subjects: SubjectInfo[] = [
  { id: 'math-basic', title: 'Toán Cơ Bản', description: 'Cộng trừ phạm vi 20 cực vui.', color: '#3b82f6', icon: 'Calculator' },
  { id: 'math-logic', title: 'Toán Tư Duy', description: 'Rèn luyện trí thông minh logic.', color: '#10b981', icon: 'Brain' },
  { id: 'vietnamese', title: 'Tiếng Việt', description: 'Học vần và từ ngữ sinh động.', color: '#ef4444', icon: 'Pencil' },
  { id: 'reading', title: 'Tập Đọc', description: 'Đọc những câu chuyện ý nghĩa.', color: '#f59e0b', icon: 'BookOpen' },
  { id: 'spelling', title: 'Chính Tả', description: 'Viết đúng, viết đẹp mỗi ngày.', color: '#e11d48', icon: 'Type' },
  { id: 'english', title: 'Tiếng Anh', description: 'Làm quen với ngoại ngữ sớm.', color: '#8b5cf6', icon: 'Globe' },
  { id: 'science-society', title: 'Tự Nhiên & Xã Hội', description: 'Khám phá cuộc sống quanh em.', color: '#06b6d4', icon: 'Users' },
  { id: 'fun-science', title: 'Khoa Học Vui', description: 'Bí ẩn thiên nhiên kỳ thú.', color: '#059669', icon: 'Zap' },
  { id: 'life-skills', title: 'Kỹ Năng Sống', description: 'Bé tự tin, bé an toàn hơn.', color: '#d97706', icon: 'ShieldCheck' },
  { id: 'morals', title: 'Đạo Đức', description: 'Học làm người con ngoan.', color: '#9d174d', icon: 'Heart' },
  { id: 'music', title: 'Âm Nhạc', description: 'Giai điệu vui tươi yêu đời.', color: '#7c3aed', icon: 'Music' },
  { id: 'art', title: 'Mỹ Thuật', description: 'Sáng tạo sắc màu rực rỡ.', color: '#ea580c', icon: 'Palette' },
  { id: 'iq', title: 'Logic – IQ', description: 'Thử thách trí tuệ siêu đỉnh.', color: '#475569', icon: 'Lightbulb' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Home: React.FC = () => {
  const { user } = useAuth();
  const { playSound } = useSound();
  const navigate = useNavigate();

  const handleCtaClick = () => {
    playSound('click');
    if (user) {
      const element = document.getElementById('subjects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Professional Hero Section */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-bold mb-6 border border-blue-100">
              <Star size={14} />
              Ứng dụng học tập số 1 cho học sinh lớp 1-2
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Học tập thông minh <br />
              <span className="text-blue-600">Khởi đầu vững chắc</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Khám phá kho kiến thức sinh động được thiết kế riêng cho các bé từ 6-8 tuổi. Học vui mỗi ngày, tiến bộ vượt bậc.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={handleCtaClick}
                className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95"
              >
                Khám phá môn học
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>100% Miễn phí</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>Dễ sử dụng</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="flex-1 hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-blue-600/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative border border-slate-100">
                <AnimatedIcon type="star" size="xl" color="bg-blue-600" className="!text-white shadow-xl shadow-blue-200" />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 animate-bounce">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 animate-pulse">
                <span className="text-3xl">💡</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Grid Section */}
      <section id="subjects" className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Chương trình học tập</h2>
            <p className="text-slate-500 font-medium">Lựa chọn môn học để bắt đầu hành trình kiến thức</p>
          </div>
          <div className="h-px flex-grow bg-slate-200 mx-8 hidden md:block mb-4"></div>
          {!user && (
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
              <Lock size={14} className="text-blue-500" />
              <span>Đăng nhập để lưu kết quả</span>
            </div>
          )}
        </div>
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {subjects.map(s => (
            <motion.div key={s.id} variants={itemVariants}>
              <SubjectCard subject={s} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Games & Challenges Section */}
      <section id="games" className="bg-slate-100 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Vừa học vừa chơi</h2>
            <p className="text-slate-500 font-medium">Thử thách trí tuệ với các trò chơi tương tác thú vị</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GameCard id="speed" title="Toán Tuần Lộc" description="Phản xạ tính nhanh trong thời gian ngắn." gradient="from-blue-600 to-indigo-700" />
            <GameCard id="puzzle" title="Quà Tặng Ngôn Ngữ" description="Ghép chữ cái hoàn thành từ vựng." gradient="from-emerald-600 to-teal-700" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;