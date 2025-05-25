import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTitle } from "../../hooks/useTitle";

export const UserDashBoard = () => {

  useTitle('Userdashboard');

  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Separate state for each data type
  const [userData, setUserData] = useState(null);
  const [lastPayment, setLastPayment] = useState(null);
  const [connectionDetails, setConnectionDetails] = useState(null);
  const [usageHistory, setUsageHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [appliances, setAppliances] = useState([]);

  // Function to fetch data from a specific endpoint
  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(`http://localhost:8000/${endpoint}`);
      const data = await response.json();
      setter(data);
      return data;
    } catch (error) {
      console.error(`Error fetching ${endpoint} data:`, error);
      return null;
    }
  };

  useEffect(() => {
    // Initial data loading function
    async function loadDashboardData() {
      try {
        setIsLoading(true);
        
        // Fetch user data first
        const userResponse = await fetchData("user", setUserData);
        
        // Only proceed if user data was successfully fetched
        if (userResponse) {
          // Fetch all other data in parallel
          await Promise.all([
            fetchData("lastPayment", setLastPayment),
            fetchData("connectionDetails", setConnectionDetails),
            fetchData("usageHistory", setUsageHistory),
            fetchData("notifications", setNotifications),
            fetchData("appliances", setAppliances)
          ]);
        }
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadDashboardData();
  }, []);

  // Calculate unread notifications whenever notifications change
  useEffect(() => {
    if (notifications.length > 0) {
      const unreadCount = notifications.filter(n => !n.isRead).length;
      setUnreadNotifications(unreadCount);
    }
  }, [notifications]);

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center">
        <div className="text-green-700 text-xl">Loading dashboard...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center">
        <div className="text-red-700 text-xl">Failed to load user data. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <header className="bg-white rounded-lg text-white p-4 shadow-md flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl text-green-700 font-bold">NPDCL Electricity</h1>
          <p className="text-green-700">👋 Welcome, <span className="font-semibold">{user?.name || user?.email || 'user'}</span></p>
        </div>
        <div className="mt-3 md:mt-0 flex items-center">
          <span className="mr-4 text-green-700">ID: {userData.consumerId}</span>
          <button className="relative bg-green-600 hover:bg-green-800 py-2 px-4 rounded-lg flex items-center">
            <i className="bi bi-bell text-lg"></i>
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </button>
        </div>
      </header>
      
      {/* Navigation Tabs */}
      <div className="flex mb-6 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'overview' ? 'bg-white text-green-700 border-t-2 border-green-700 shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('consumption')}
          className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'consumption' ? 'bg-white text-green-700 border-t-2 border-green-700 shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          Consumption
        </button>
        <button 
          onClick={() => setActiveTab('energy-insights')}
          className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'energy-insights' ? 'bg-white text-green-700 border-t-2 border-green-700 shadow-md' : 'bg-gray-100 text-gray-600'}`}
        >
          Energy Insights
        </button>
        <button 
          onClick={() => setActiveTab('notifications')}
          className={`px-6 py-3 font-medium text-sm rounded-t-lg ${activeTab === 'notifications' ? 'bg-white text-green-700 border-t-2 border-green-700 shadow-md' : 'bg-gray-100 text-gray-600'} flex items-center`}
        >
          Notifications
          {unreadNotifications > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadNotifications}
            </span>
          )}
        </button>
      </div>
      
      {/* Dashboard Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Current Bill Card */}
              <div className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-700">Current Bill</h3>
                  <i className="bi bi-credit-card text-lg text-green-500"></i>
                </div>
                <p className="text-2xl font-bold mt-2">₹{userData.currentBillAmount || '0'}</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Due Date: {userData.dueDate || 'N/A'}</span>
                  <span className={`font-medium ${userData.billStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                    {userData.billStatus || 'Pending'}
                  </span>
                </div>
                <button onClick={() => navigate('/user-dashboard/paybill')} className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Pay Now
                </button>
              </div>
              
              {/* Last Payment Card */}
              <div className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-700">Last Payment</h3>
                  <i className="bi bi-check-circle text-lg text-green-500"></i>
                </div>
                <p className="text-2xl font-bold mt-2">
                  ₹{lastPayment?.amount || '0'}
                </p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Date: {lastPayment?.date || 'N/A'}</span>
                  <span className="text-gray-600 truncate">#{lastPayment?.receiptNo || 'N/A'}</span>
                </div>
                <button onClick={() => navigate('/user-dashboard/viewbill')}className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  Download Receipt
                </button>
              </div>
              
              {/* Connection Details Card */}
              <div className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-700">Connection Details</h3>
                  <i className="bi bi-lightning-charge text-lg text-green-500"></i>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Meter No:</span>
                    <span className="font-medium">{connectionDetails?.meterNo || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{connectionDetails?.category || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sanctioned Load:</span>
                    <span className="font-medium">{connectionDetails?.sanctionedLoad || 'N/A'}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button onClick={() => navigate('/user-dashboard/paybill')} className="bg-green-100 hover:bg-green-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <i className="bi bi-credit-card text-2xl text-green-700 mb-2"></i>
                  <span className="text-green-800 font-medium">Pay Bill</span>
                </button>
                <button onClick={() => navigate('/user-dashboard/viewbill')} className="bg-green-100 hover:bg-green-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <i className="bi bi-file-text text-2xl text-green-700 mb-2"></i>
                  <span className="text-green-800 font-medium">View Bill</span>
                </button>
                <button onClick={() => navigate('/user-dashboard/payment-history')} className="bg-green-100 hover:bg-green-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <i className="bi bi-clock-history text-2xl text-green-700 mb-2"></i>
                  <span className="text-green-800 font-medium">Payment History</span>
                </button>
                <button onClick={() => navigate('/user-dashboard/report')} className="bg-green-100 hover:bg-green-200 p-4 rounded-lg flex flex-col items-center justify-center">
                  <i className="bi bi-exclamation-circle text-2xl text-green-700 mb-2"></i>
                  <span className="text-green-800 font-medium">Report Issue</span>
                </button>
              </div>
            </div>
            
            {/* Latest Notifications */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Latest Updates</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                {notifications && notifications.length > 0 ? (
                  notifications.slice(0, 2).map(notification => (
                    <div key={notification.id} className="py-2 border-b border-gray-200 last:border-b-0">
                      <div className="flex justify-between">
                        <p className="text-gray-800">{notification.message}</p>
                        <span className="text-sm text-gray-500">{notification.date}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No notifications available</p>
                )}
                <button 
                  onClick={() => setActiveTab('notifications')} 
                  className="mt-2 text-green-600 text-sm hover:underline"
                >
                  View all notifications
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'consumption' && ( 
          <div>
            <h2 className="text-xl font-semibold mb-6">Consumption Details</h2>
            
            {/* Current Month */}
            <div className="bg-green-50 p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Current Month</h3>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                  <span className="text-gray-600">Units Consumed</span>
                  <p className="text-3xl font-bold text-green-700">{userData.currentUnits || '0'} units</p>
                </div>
                <div>
                  <span className="text-gray-600">Bill Amount</span>
                  <p className="text-3xl font-bold text-green-700">₹{userData.currentBillAmount || '0'}</p>
                </div>
              </div>
            </div>
            
            {/* Usage History Table */}
            <div className="overflow-x-auto mt-6">
              <h3 className="font-medium text-gray-700 mb-3">Consumption History</h3>
              {usageHistory && usageHistory.length > 0 ? (
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Month</th>
                      <th className="py-3 px-4 text-left">Units</th>
                      <th className="py-3 px-4 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {usageHistory.slice().reverse().map((item, index) => (
                      <tr key={index}>
                        <td className="py-3 px-4">{item.month} 2025</td>
                        <td className="py-3 px-4">{item.units} units</td>
                        <td className="py-3 px-4">₹{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-600">No usage history available</p>
              )}
            </div>
            
            {/* Tips */}
            <div className="mt-8 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <div className="flex">
                <i className="bi bi-lightbulb text-lg text-green-500 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium">Energy Saving Tips</p>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Turn off lights and fans when not in use</li>
                    <li>• Use energy-efficient LED bulbs</li>
                    <li>• Set AC temperature to 24-26°C for optimal efficiency</li>
                    <li>• Unplug electronic devices when not in use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
         {activeTab === 'energy-insights' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Energy Insights</h2>
            
            {/* Usage Pattern */}
            <div className="bg-green-50 p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <i className="bi bi-graph-up text-green-600 mr-2"></i>
                Usage Pattern
              </h3>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600 mb-1">Peak Usage Time</p>
                    <div className="flex items-center">
                      <i className="bi bi-clock-history text-amber-500 mr-2"></i>
                      <span className="font-medium text-gray-800">7:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Off-Peak Usage Time</p>
                    <div className="flex items-center">
                      <i className="bi bi-clock text-green-500 mr-2"></i>
                      <span className="font-medium text-gray-800">11:00 PM - 6:00 AM</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                  <p>
                    <i className="bi bi-info-circle text-blue-500 mr-2"></i>
                    Shifting some of your usage to off-peak hours could reduce your energy costs by up to 20%.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Appliance Energy Usage */}
            <div className="bg-green-50 p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <i className="bi bi-plug text-green-600 mr-2"></i>
                Appliance Energy Usage
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Appliance</th>
                      <th className="py-3 px-4 text-left">Avg. Consumption (W)</th>
                      <th className="py-3 px-4 text-left">Energy Class</th>
                      <th className="py-3 px-4 text-left">Tips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {appliances.map((appliance, index) => (
                      <tr key={index}>
                        <td className="py-3 px-4">{appliance.name}</td>
                        <td className="py-3 px-4">{appliance.avgConsumption} W</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 ${
                            appliance.energyClass.startsWith('5') ? 'bg-green-100 text-green-800' : 
                            appliance.energyClass.startsWith('4') ? 'bg-teal-100 text-teal-800' :
                            appliance.energyClass.startsWith('3') ? 'bg-yellow-100 text-yellow-800' :
                            'bg-orange-100 text-orange-800'
                          } rounded-full text-xs`}>
                            {appliance.energyClass}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{appliance.tips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            
            
            {/* Energy Conservation Program */}
            <div className="bg-green-50 p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <i className="bi bi-award text-green-600 mr-2"></i>
                Energy Conservation Program
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <div className="mb-4 md:mb-0">
                    <p className="text-xl font-bold text-green-700">Save Energy, Earn Rewards</p>
                    <p className="text-gray-600">Join our conservation program to earn points and redeem them for discounts.</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg">
                    Join Now
                  </button>
                </div>
                
                <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium mb-2">How it works:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <i className="bi bi-1-circle text-green-600 mr-2"></i>
                      Reduce your monthly consumption below your average
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-2-circle text-green-600 mr-2"></i>
                      Earn 10 points for every unit saved compared to last month
                    </li>
                    <li className="flex items-center">
                      <i className="bi bi-3-circle text-green-600 mr-2"></i>
                      Redeem points for bill discounts or eco-friendly products
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Community Comparison */}
            <div className="bg-green-50 p-4 rounded-lg shadow">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <i className="bi bi-people text-green-600 mr-2"></i>
                Community Comparison
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-full text-center">
                    <p className="text-gray-600 mb-2">Your energy usage compared to similar households in your area</p>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-xs font-semibold inline-block text-green-600">
                            You are using 15% less energy
                          </span>
                        </div>
                      </div>
                      <div className="flex h-4 mb-4 rounded bg-gray-200">
                        <div className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-4/5 rounded"></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Less than average</span>
                        <span>Neighborhood average</span>
                        <span>More than average</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Your monthly average</span>
                    <span className="font-medium">350 units</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Neighborhood average</span>
                    <span className="font-medium">412 units</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Top 10% efficient homes</span>
                    <span className="font-medium">290 units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
            
            
        
        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-4">
              {notifications && notifications.length > 0 ? (
                notifications.map(notification => (
                  <div key={notification.id} className={`p-4 rounded-lg border-l-4 ${notification.isRead ? 'bg-gray-50 border-gray-300' : 'bg-green-50 border-green-500'}`}>
                    <div className="flex justify-between">
                      <p className={`font-medium ${notification.isRead ? 'text-gray-700' : 'text-green-800'}`}>
                        {notification.message}
                      </p>
                      <span className="text-sm text-gray-500">{notification.date}</span>
                    </div>
                    {!notification.isRead && (
                      <button className="mt-2 text-sm text-green-600 hover:underline">Mark as read</button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No notifications available</p>
              )}
            </div>
            
            {/* Notification Settings */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Notification Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Bill Generation</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Payment Reminders</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Power Outage Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};