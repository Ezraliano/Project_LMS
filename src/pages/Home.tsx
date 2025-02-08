
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => { // Mendefinisikan komponen functional Home
  const navigate = useNavigate(); // Menginisialisasi fungsi navigasi dari react-router-dom
  
  const popularCourses = [ // Data kursus populer (sementara hardcoded, idealnya diambil dari API)
    {
      id: 1,
      title: "Financial Accounting Fundamentals",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
      price: "Rp.50.000",
      duration: "8 moduls"
    },
    {
      id: 2,
      title: "Advanced Auditing Techniques",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
      price: "Rp.75.000",
      duration: "10 moduls"
    },
    {
      id: 3,
      title: "Corporate Finance Mastery",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      price: "Rp.100.000",
      duration: "12 moduls"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Jadilah Seorang Ahli Keuangan Profesional di Indonesia
            </h1>
            <p className="text-xl mb-8 text-stone-100">
             Belajar dari pakar industri dan tingkatkan karir Anda di bidang keuangan
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors">
              Start Learning Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section (bagian fitur-fitur) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry-Relevant</h3>
              <p className="text-stone-600">
                Curriculum designed with input from leading financial institutions
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Courses</h3>
              <p className="text-stone-600">
                Get certified and boost your professional credentials
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
              <p className="text-stone-600">
                Learn from experienced professionals in the field
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {popularCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center text-stone-600">
                    <span>{course.duration}</span>
                    <span className="text-primary font-semibold">{course.price}</span>
                  </div>
                  <button 
                    className="w-full btn-primary mt-4"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Join thousands of successful professionals who have transformed their careers with us</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;