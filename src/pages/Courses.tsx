
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define the Courses component
const Courses = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Financial Accounting Fundamentals",
      category: "Accounting",
      level: "Beginner",
      duration: "8 weeks",
      price: "$99",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Advanced Auditing Techniques",
      category: "Auditing",
      level: "Advanced",
      duration: "10 weeks",
      price: "$149",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Corporate Finance Mastery",
      category: "Finance",
      level: "Intermediate",
      duration: "12 weeks",
      price: "$129",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Tax Planning Strategies",
      category: "Accounting",
      level: "Intermediate",
      duration: "6 weeks",
      price: "$79",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Risk Management in Banking",
      category: "Finance",
      level: "Advanced",
      duration: "8 weeks",
      price: "$119",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "Internal Controls & Compliance",
      category: "Auditing",
      level: "Intermediate",
      duration: "10 weeks",
      price: "$139",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with title and search/filter options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-6 md:mb-0">Our Courses</h1>
          
          <div className="flex space-x-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-3 top-2.5 text-stone-400 h-5 w-5" />
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-secondary text-primary text-sm rounded-full">
                    {course.category}
                  </span>
                  <span className="text-primary font-semibold">{course.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center text-stone-600 mb-4">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.level}</span>
                </div>
                <button 
                  className="w-full btn-primary"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;