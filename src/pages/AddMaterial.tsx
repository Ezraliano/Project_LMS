import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

interface Course {
  id: string;
  title: string;
}

const AddMaterial = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  interface Material {
    course_id: string;
    title: string;
    content: string;
  }
  
  const [materials, setMaterials] = useState<Material[]>([]); // State untuk menyimpan data materi

  useEffect(() => {
    // Data dummy untuk courses (ganti dengan data dari sumber Anda)
    const dummyCourses: Course[] = [
      { id: '1', title: 'Pengenalan React' },
      { id: '2', title: 'React Lanjutan' },
      { id: '3', title: 'Belajar Javascript' },
    ];
    setCourses(dummyCourses);

    // Data dummy untuk materials (ganti dengan data dari sumber Anda)
    const dummyMaterials = [
      {course_id: '1', title: 'Instalasi React', content: 'Cara menginstall React...'},
      {course_id: '2', title: 'Komponen React', content: 'Penjelasan tentang komponen...'}
    ]
    setMaterials(dummyMaterials);
  },);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMaterial = {
      course_id: selectedCourse,
      title,
      content,
    };

    setMaterials([...materials, newMaterial]); // Menambahkan materi baru ke daftar materi

    toast.success('Learning material added successfully!');
    setTitle('');
    setContent('');
    setSelectedCourse('');
    console.log("Data Materi:", newMaterial);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="text-primary mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Add Learning Material</h1>
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
                Material Title
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
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Add Learning Material
            </button>
          </form>

          {/* Menampilkan daftar materi */}
          <h2>Daftar Materi</h2>
          <ul>
            {materials.map((material, index) => (
              <li key={index}>
                <strong>{material.title}</strong> ({material.course_id}):<br/>
                {material.content}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default AddMaterial;