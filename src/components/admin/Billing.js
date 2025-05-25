import { useNavigate } from "react-router-dom";

export const Billing = ({ summaryData, recentPayments }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Generate Bills Card */}
        <div
          className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500
                     transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate('/admin-dashboard/generate')}
        >
          <div className="flex justify-between items-center mb-3 ">
            <h3 className="font-medium text-gray-700 ">Generate Bills</h3>
            <i className="bi bi-receipt text-lg text-green-500"></i>
          </div>
          <p className="text-sm text-gray-600 mb-4">Generate monthly electricity bills for all active consumers</p>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('/admin-dashboard/generate'); }}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Generate Monthly Bills
          </button>
        </div>

        {/* Payment Summary Card */}
        <div
          className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500
                     transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate('./payment-summary')}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-700">Payment Summary</h3>
            <i className="bi bi-currency-rupee text-lg text-green-500"></i>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-sm">
              <span>Total Billed:</span>
              <span className="font-medium">₹{summaryData.totalBilled || '0'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Collected:</span>
              <span className="font-medium">₹{summaryData.totalCollected || '0'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pending:</span>
              <span className="font-medium text-red-600">₹{summaryData.totalPending || '0'}</span>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('./payment-summary'); }}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            View Full Report
          </button>
        </div>

        {/* Tariff Management Card */}
        <div
          className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500
                     transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate('/admin-dashboard/tariff-management')}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-700">Tariff Management</h3>
            <i className="bi bi-cash-stack text-lg text-green-500"></i>
          </div>
          <p className="text-sm text-gray-600 mb-4">Update electricity tariffs for different consumer categories</p>
          <button
            onClick={(e) => { e.stopPropagation(); navigate('/admin-dashboard/tariff-management'); }}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Manage Tariffs
          </button>
        </div>
      </div>

      {/* Recent Payments */}
      <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Payments</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">Consumer</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Mode</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentPayments && recentPayments.length > 0 ? (
              recentPayments.map((payment, index) => (
                <tr
                  key={index}
                  className="transition transform hover:-translate-y-0.5 hover:shadow-md hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-3 px-4">{payment.transactionId}</td>
                  <td className="py-3 px-4">{payment.consumerName} ({payment.consumerId})</td>
                  <td className="py-3 px-4">₹{payment.amount}</td>
                  <td className="py-3 px-4">{payment.date}</td>
                  <td className="py-3 px-4">{payment.paymentMode}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      payment.status === 'Success' ? 'bg-green-100 text-green-800' :
                      payment.status === 'Failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-3 px-4 text-center">No recent payments</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Unpaid Bills */}
      <h3 className="text-lg font-medium text-gray-700 mt-8 mb-4">Defaulters List</h3>
      <div className="bg-red-50 p-4 rounded-lg mb-4">
        <div className="flex">
          <i className="bi bi-exclamation-triangle text-red-500 mt-1 mr-3 text-lg"></i>
          <div>
            <p className="font-medium text-red-800">Payment Default Summary</p>
            <p className="text-sm text-gray-700 mt-1">
              There are <span className="font-bold">{summaryData.defaulters || '0'}</span> consumers with outstanding bills for more than 30 days.
            </p>
          </div>
        </div>
      </div>

      {/* Defaulters Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Consumer ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Amount Due</th>
              <th className="py-3 px-4 text-left">Due Since</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {summaryData.defaultersList && summaryData.defaultersList.length > 0 ? (
              summaryData.defaultersList.map((defaulter, index) => (
                <tr
                  key={index}
                  className="transition transform hover:-translate-y-0.5 hover:shadow-md hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{defaulter.consumerId}</td>
                  <td className="py-3 px-4">{defaulter.name}</td>
                  <td className="py-3 px-4">₹{defaulter.amountDue}</td>
                  <td className="py-3 px-4">{defaulter.dueSince}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                        onClick={() => navigate('/admin-dashboard/reminder-success', {
                          state: {
                            name: defaulter.name,
                            amount: defaulter.amountDue,
                          },
                        })}
                      >
                        Send Reminder
                      </button>

                      <button className="bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200">
                        Disconnect
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center">No defaulters found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
