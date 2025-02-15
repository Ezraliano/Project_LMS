
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">EduFinance</span>
            </div>
            <p className="text-stone-300">
            Belajar dari pakar industri dan tingkatkan karir Anda di bidang keuangan
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-300">
              <li><a href="/courses" className="hover:text-secondary transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/login" className="hover:text-secondary transition-colors">Login</a></li>
              <li><a href="/register" className="hover:text-secondary transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-stone-300">
              <li>KAP.MTD@gmail.com</li>
              <li>081229451575</li>
              <li>Jl. Dorowati No.8, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-300">
          <p>&copy; 2024 EduFinance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;