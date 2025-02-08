
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course; // Mengambil data kursus dari state navigasi

  // Jika tidak ada data kursus, arahkan kembali ke halaman sebelumnya
  if (!course) {
    navigate(-1);
    return null;
  }

  const handlePayment = () => {
    // Simulasikan proses pembayaran
    alert('Payment successful! Redirecting to course...');
    navigate(`/course/${course.id}`); // Arahkan ke halaman kursus setelah pembayaran berhasil
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-stone-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Course
        </button>

        {/* Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-stone-800 mb-6">Payment Details</h1>

          {/* Course Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Course Summary</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{course.title}</h3>
                <p className="text-stone-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl font-bold">{course.price}</span>
                  <span className="text-stone-500">One-time payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Payment Information</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-stone-700 mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 mb-2">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Confirmation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-stone-600">Secure Payment</span>
            </div>
            <button
              onClick={handlePayment}
              className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
            >
              <CreditCard className="h-5 w-5" />
              Pay Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;