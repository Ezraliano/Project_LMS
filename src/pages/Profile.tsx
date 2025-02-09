import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Briefcase, Edit } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Ezraliano Sachio Krishadiva',
    notelepon: '08199992943',
    email: 'krisnadiva456@gmail.com',
    headline: '',
    about: '',
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', formData);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="text-center">
          <div className="relative mx-auto w-32 h-32 rounded-full bg-stone-100 mb-6">
            <div className="w-full h-full rounded-full overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                  <span className="text-stone-500">No Photo</span>
                </div>
              )}
            </div>
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-primary p-2 rounded-full cursor-pointer hover:bg-primary-dark"
            >
              <Edit className="h-4 w-4 text-white" />
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <h2 className="text-2xl font-bold text-stone-800">Profil Pengguna</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
               Nomer Telepon
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                  value={formData.notelepon}
                  onChange={(e) => setFormData({ ...formData, notelepon: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="email"
                  disabled
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg bg-stone-100 cursor-not-allowed"
                  value={formData.email}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Headline
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Briefcase className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  placeholder="Contoh: Investor, Auditor, Tax Consultant"
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                  value={formData.headline}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Tentang Saya
              </label>
              <textarea
                placeholder="Tulis cerita singkat tentang diri Anda"
                className="appearance-none block w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary h-32"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Simpan Perubahan
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;