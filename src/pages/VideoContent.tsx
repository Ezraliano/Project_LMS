import React, { useState, useEffect } from 'react';
import { Video } from 'lucide-react';
import toast from 'react-hot-toast';

interface Course {
  id: string;
  title: string;
}

const VideoContent = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [title, setTitle] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  interface Video {
    course_id: string;
    title: string;
    youtube_url: string;
  }
  
  const [videos, setVideos] = useState<Video[]>([]); // State untuk menyimpan data video

  useEffect(() => {
    // Data dummy untuk courses (ganti dengan data dari sumber Anda)
    const dummyCourses: Course[] = [
      { id: '1', title: 'Audit Akuntansi' },
      { id: '2', title: 'Membenahi Laporan Keuangan' },
      { id: '3', title: 'Fraud dalam Akuntansi' },
    ];
    setCourses(dummyCourses);

    // Data dummy untuk videos (ganti dengan data dari sumber Anda)
    const dummyVideos = [
      {course_id: '1', title: 'Coba 1', youtube_url: 'https://www.youtube.com/embed/DLX6p44xYDo'},
      {course_id: '2', title: 'Coba 2', youtube_url: 'https://www.youtube.com/embed/gYJ5xStb9-o'}
    ]
    setVideos(dummyVideos);
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newVideo = {
      course_id: selectedCourse,
      title,
      youtube_url: youtubeUrl,
    };

    setVideos([...videos, newVideo]); // Menambahkan video baru ke daftar video

    toast.success('Video content added successfully!');
    setTitle('');
    setYoutubeUrl('');
    setSelectedCourse('');
    console.log("Data Video:", newVideo); // Ini akan menampilkan data video yang baru di console.
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Video className="text-primary mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Add Video Content</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Learning Module
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Video Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                YouTube Video URL
              </label>
              <input
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://youtube.com/watch?v=..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Add Video Content
            </button>
          </form>

            {/* Menampilkan daftar video */}
            <h2>Daftar Video</h2>
            <ul>
              {videos.map((video, index) => (
                <li key={index}>
                  {video.title} ({video.course_id}): <a href={video.youtube_url} target="_blank" rel="noopener noreferrer">Tonton</a>
                </li>
              ))}
            </ul>

        </div>
      </div>
    </div>
  );
};

export default VideoContent;