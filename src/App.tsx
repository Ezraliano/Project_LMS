
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Instructor from './pages/Instructor';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import AddCourses from './pages/AddCourses';
import VideoContent from './pages/VideoContent';
import AddMaterial from './pages/AddMaterial';
import ViewStudents from './pages/ViewStudents';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-courses" element={<AddCourses />} />
            <Route path="/video-content" element={<VideoContent />} />
            <Route path="/add-material" element={<AddMaterial />} />
            <Route path="/view-students" element={<ViewStudents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;