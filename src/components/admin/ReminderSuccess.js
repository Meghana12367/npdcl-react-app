import { useLocation, useNavigate } from 'react-router-dom';

export const ReminderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, amount } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <i className="bi bi-check-circle-fill text-green-500 text-6xl"></i>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">
          Reminder Sent Successfully!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          A reminder has been sent to <strong>{name || 'the consumer'}</strong> about their pending bill of ₹{amount || 'N/A'}.
        </p>

        {/* Info Box */}
        <div className="bg-gray-50 rounded-md shadow-sm border border-gray-200 mb-6">
          <div className="grid grid-cols-2 gap-4 px-6 py-4 text-sm text-gray-700">
            <div className="font-medium">Consumer Name:</div>
            <div>{name || 'N/A'}</div>
            <div className="font-medium">Pending Amount:</div>
            <div>₹{amount || 'N/A'}</div>
          </div>
        </div>



        {/* Button */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            onClick={() => navigate('/admin-dashboard')}
          >
            <i className="bi bi-arrow-left"></i>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};


