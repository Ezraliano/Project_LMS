import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';

// Menambahkan Error Handling
const ErrorDisplay = ({ message }: { message: string }) => {
  if (!message) return null; // Tidak menampilkan apa-apa jika pesan kosong
  return <div className="text-red-500 text-sm mt-2">{message}</div>;
};


const Login = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  }); // State untuk menyimpan data form
  const [error, setError] = useState(''); // State untuk menyimpan pesan error
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    setError(''); // Reset error
    setIsLoading(true); // Set loading ke true

    try {
      const response = await fetch('/your-api-endpoint', { // Ganti dengan endpoint API Anda
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Mengirim data form dalam format JSON
      });

      const data = await response.json(); // Mengambil response dalam format JSON

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        // Tangani error dari server dengan lebih spesifik
        if (data && data.message) {
          setError(data.message);  // Tampilkan pesan error dari server jika ada
        } else if (response.status === 401) {
          setError("Email atau password salah."); // Contoh error handling spesifik
        } else if (response.status === 400) {
          setError("Data yang anda masukkan tidak valid");
        }
        else {
          setError('Login gagal. Silakan coba lagi.'); // Pesan error umum
        }
      }
    } catch (err) {
      console.error("Kesalahan login:", err);
      setError('Terjadi kesalahan. Silakan coba lagi nanti.'); // Pesan error umum untuk kesalahan jaringan atau lainnya
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="text-center">
          <div className="flex justify-center">
            <BookOpen className="h-12 w-12 text-primary" /> {/* Icon buku */}
          </div>
          <h2 className="mt-6 text-3xl font-bold text-stone-800">Welcome back</h2> {/* Judul */}
          <p className="mt-2 text-sm text-stone-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary-light">
              Register here
            </Link> {/* Link ke halaman register */}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <ErrorBoundary> {/* Error Boundary wraps the form */}
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-stone-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-stone-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-primary hover:text-primary-light">
                  Forgot password?
                </a>
              </div>
            </div>

            <ErrorDisplay message={error} />

            <button
              type="submit"
              className="w-full btn-primary py-3"
              disabled={isLoading}
            >
              {isLoading? 'Signing in...': 'Sign in'}
            </button>
          </ErrorBoundary>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;