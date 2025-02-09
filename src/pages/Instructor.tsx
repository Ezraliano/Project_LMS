
import { motion } from 'framer-motion';
import { BookOpen,FileText, User, Upload, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Advanced Financial Reporting",
      students: 120,
      materials: 15
    },
    {
      id: 2,
      title: "Audit Risk Management",
      students: 90,
      materials: 10
    }
  ];

  const quickActions = [
    { title: "Tambah Kursus", icon: <User />, link: "/add-courses" },
    { title: "Video Content", icon: <Upload />, link: "/video-content" },
    { title: "Tulis Materi", icon: <BookOpen />, link: "/add-material" },
    { title: "View Students", icon: <Users />, link: "/view-students" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Teacher Dashboard</h1>
          <div className="flex items-center space-x-4">
            <User className="text-primary" />
            <span className="text-stone-600">John Doe</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full mr-4">
                <BookOpen className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Total Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full mr-4">
                <Users className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Total Students</p>
                <p className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.students, 0)}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full mr-4">
                <FileText className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Total Materials</p>
                <p className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.materials, 0)}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">{course.title}</h3>
                    <span className="text-sm text-stone-500">
                      Students: {course.students}
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(course.materials / 20) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right text-primary font-medium">
                    {course.materials} Materials
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32 hover:bg-[#E2CEB1] transition-colors"
                    onClick={() => navigate(action.link)}
                  >
                    <div className="text-primary mb-2">{action.icon}</div>
                    <span className="text-stone-600">{action.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                <div className="flex items-center">
                  <Upload className="text-primary mr-3" />
                  <span>Uploaded new content for "Advanced Financial Reporting"</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-primary mr-3" />
                  <span>Added new material to "Audit Risk Management"</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-primary mr-3" />
                  <span>10 new students enrolled in "Advanced Financial Reporting"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;