import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [courses, setCourses] = useState<{ title: string; description: string; price: number }[]>([]); // State untuk menyimpan data course

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCourse = {
      title,
      description,
      price: parseFloat(price),
    };

    // Update state courses dengan data baru
    setCourses([...courses, newCourse]);

    // Bersihkan form setelah submit
    setTitle('');
    setDescription('');
    setPrice('');

    // Tampilkan pesan sukses (gunakan alert atau toast library jika mau)
    alert('Course added successfully!'); 
    console.log("Data Course:", newCourse); // Ini akan menampilkan data course yang baru di console.
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <PlusCircle className="text-primary mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Add New Course</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... (input fields for title, description, and price - same as before) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Title
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
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 pl-7 pr-12 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="0.00"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;