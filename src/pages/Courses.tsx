import { useState, useEffect } from 'react'; // Tambahkan import
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mendefinisikan Interface Course
const Courses = () => {
  const navigate = useNavigate();
  interface Course {
    id: number;
    title: string;
    category: string;
    level: string;
    duration: string;
    price: string;
    image: string;
  }

  const [courses, setCourses] = useState<Course[]>([]); // State gawe data courses
  const [loading, setLoading] = useState(true); // State gawe loading
  const [error, setError] = useState<string | null>(null); // State gawe error handling

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos?_limit=6' // Aku njopok 6 item pertama
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        
        const data = await response.json();
        
        // Transformasi data API ke format yang dibutuhkan
        const transformedData = data.map((item: { id: number; title: string; albumId: number; thumbnailUrl: string }) => ({
          id: item.id,
          title: item.title,
          category: `Category ${item.albumId}`, // AlbumId dari API
          level: "Beginner", // Default value
          duration: "8 weeks", // Default value
          price: "Rp.30.000", // Default value
          image: item.thumbnailUrl,
        }));
        
        setCourses(transformedData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Terjadi kesalahan saat memuat data');
        }
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-stone-600">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading courses: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section tetap sama */}
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
              key={course.id} // Menggunakan ID dari API sebagai key
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