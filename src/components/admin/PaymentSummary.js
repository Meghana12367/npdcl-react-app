import { useState } from 'react';

export const PaymentSummary = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  // Sample data
  const summaryData = {
    totalBilled: 87500000,
    totalCollected: 74250000,
    pending: 13250000
  };

  const paymentMethods = [
    { method: 'UPI', count: 7845, amount: 35680000 },
    { method: 'Net Banking', count: 2155, amount: 25760000 },
    { method: 'Credit Card', count: 980, amount: 9850000 },
    { method: 'Debit Card', count: 270, amount: 2960000 }
  ];

  const areaWiseCollection = [
    { area: 'North Zone', totalBilled: 28500000, collected: 24225000 },
    { area: 'South Zone', totalBilled: 22750000, collected: 18200000 },
    { area: 'East Zone', totalBilled: 18250000, collected: 16425000 },
    { area: 'West Zone', totalBilled: 18000000, collected: 15400000 }
  ];

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Payment Summary Report</h1>
        
        <div className="flex gap-2">
          <select 
            className="border rounded px-2 py-1 text-sm"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            <i className="bi bi-download mr-1"></i>
            Export
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-green-50 border p-3 rounded">
          <p className="text-sm text-gray-600">Total Billed</p>
          <p className="text-lg font-bold">₹{(summaryData.totalBilled / 10000000).toFixed(2)} Cr</p>
        </div>
        
        <div className="bg-blue-50 border p-3 rounded">
          <p className="text-sm text-gray-600">Collected</p>
          <p className="text-lg font-bold">₹{(summaryData.totalCollected / 10000000).toFixed(2)} Cr</p>
        </div>
        
        <div className="bg-yellow-50 border p-3 rounded">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-lg font-bold">₹{(summaryData.pending / 10000000).toFixed(2)} Cr</p>
        </div>
      </div>
      
      {/* Collection Statistics */}
      <div className="mb-4">
        <h2 className="text-md font-semibold mb-2">
          <i className="bi bi-graph-up text-blue-600 mr-1"></i>
          Collection Statistics
        </h2>
        
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Area</th>
              <th className="p-2 text-right">Billed (₹)</th>
              <th className="p-2 text-right">Collected (₹)</th>
              <th className="p-2 text-right">Collection %</th>
            </tr>
          </thead>
          <tbody>
            {areaWiseCollection.map((area, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{area.area}</td>
                <td className="p-2 text-right">{(area.totalBilled/1000000).toFixed(2)}M</td>
                <td className="p-2 text-right">{(area.collected/1000000).toFixed(2)}M</td>
                <td className="p-2 text-right">
                  {((area.collected / area.totalBilled) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Payment Methods */}
      <div>
        <h2 className="text-md font-semibold mb-2">
          <i className="bi bi-credit-card text-purple-600 mr-1"></i>
          Payment Methods
        </h2>
        
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Method</th>
              <th className="p-2 text-right">Count</th>
              <th className="p-2 text-right">Amount (₹)</th>
              <th className="p-2 text-right">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((method, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">
                  <i className={`bi bi-${
                    method.method === 'UPI' ? 'phone' : 
                    method.method === 'Net Banking' ? 'bank' : 
                    'credit-card'
                  } mr-1 text-gray-600`}></i>
                  {method.method}
                </td>
                <td className="p-2 text-right">{method.count}</td>
                <td className="p-2 text-right">{(method.amount/1000000).toFixed(2)}M</td>
                <td className="p-2 text-right">
                  {((method.amount / summaryData.totalCollected) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}