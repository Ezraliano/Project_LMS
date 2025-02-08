
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Award, CheckCircle } from 'lucide-react';

const CourseDetails = () => {
  useParams(); // Hook to get URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Mock data for course details, typically fetched from an API or database
  const courseDetails = {
    title: "Financial Accounting Fundamentals",
    category: "Accounting",
    level: "Beginner",
    duration: "8 weeks",
    price: "$99",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    description: "Master the fundamentals of financial accounting with our comprehensive course. Learn from industry experts and gain practical skills that you can apply immediately in your career.",
    instructor: {
      name: "Sarah Johnson",
      role: "Lead Financial Instructor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      experience: "15+ years in Financial Accounting"
    },
    modules: [
      "Introduction to Financial Accounting",
      "Double-Entry Bookkeeping",
      "Financial Statements Analysis",
      "Cash Flow Management",
      "Accounting Standards and Regulations",
      "Digital Accounting Tools",
      "Business Ethics in Accounting",
      "Final Project & Assessment"
    ],
    benefits: [
      "Comprehensive understanding of accounting principles",
      "Hands-on experience with real-world cases",
      "Industry-recognized certification",
      "Lifetime access to course materials",
      "1-on-1 mentoring sessions",
      "Networking opportunities"
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
        >
          <div>
            <span className="px-3 py-1 bg-secondary text-primary text-sm rounded-full">
              {courseDetails.category}
            </span>
            <h1 className="text-4xl font-bold text-stone-800 mt-4 mb-6">
              {courseDetails.title}
            </h1>
            <p className="text-lg text-stone-600 mb-6">
              {courseDetails.description}
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>{courseDetails.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <span>{courseDetails.level}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span>Certificate</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-stone-50 p-6 rounded-lg">
              <div>
                <p className="text-stone-600">Course Price</p>
                <p className="text-3xl font-bold text-primary">{courseDetails.price}</p>
              </div>
                <button
                className="btn-primary text-lg px-8 py-3"
                onClick={() => {
                  navigate('/payment', { state: { course: courseDetails } });
                }}
                >
                Enroll Now
                </button>
            </div>
          </div>
          <div>
            <img
              src={courseDetails.image}
              alt={courseDetails.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Course Modules</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {courseDetails.modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 py-4 border-b last:border-b-0"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-stone-700">{module}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">What You'll Get</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {courseDetails.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 mb-4 last:mb-0">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-stone-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Instructor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-stone-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Meet Your Instructor</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={courseDetails.instructor.image}
              alt={courseDetails.instructor.name}
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-stone-800">
                {courseDetails.instructor.name}
              </h3>
              <p className="text-primary mb-4">{courseDetails.instructor.role}</p>
              <p className="text-stone-600 mb-4">{courseDetails.instructor.experience}</p>
              <button className="btn-primary">View Profile</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;