import { motion } from 'framer-motion';
import { BookOpen, Clock, BarChart, FileText, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const ongoingCourses = [
    {
      id: 1,
      title: "Advanced Financial Reporting",
      progress: 65,
      
    },
    {
      id: 2,
      title: "Audit Risk Management",
      progress: 30,
      
    }
  ];

  const quickActions = [
    { title: "Tambah Courses", icon: <BookOpen />, link: "/courses" },
    { title: "Profile", icon: <User />, link: "/profile" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Finance Learning Dashboard</h1>
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
              <div className=" p-3 rounded-full mr-4">
                <BookOpen className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Active Courses</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </motion.div>

          {/* <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className=" p-3 rounded-full mr-4">
                <Award className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Certificates Earned</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </motion.div> */}

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className=" p-3 rounded-full mr-4">
                <Clock className="text-primary" />
              </div>
              <div>
                <p className="text-stone-600">Learning Hours</p>
                <p className="text-2xl font-bold">42h</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ongoing Courses Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Ongoing Courses</h2>
            <div className="space-y-4">
              {ongoingCourses.map((course, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">{course.title}</h3>
                    <span className="text-sm text-stone-500">
                    <button className="w-full text-center btn-primary mt-4">
                    Lanjutkan
                    </button>
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right text-primary font-medium">
                    {course.progress}% Complete
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
                  <FileText className="text-primary mr-3" />
                  <span>Completed "Financial Statements Analysis" quiz</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="text-primary mr-3" />
                  <span>Earned new certificate in Audit Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-primary mr-3" />
                  <span>Upcoming deadline: Financial Reporting Course</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;