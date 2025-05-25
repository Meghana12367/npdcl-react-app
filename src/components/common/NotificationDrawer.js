import { useState } from 'react';

// Enhanced notification component with off-canvas panel
export default function EnhancedNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Scheduled Maintenance",
      content: "System maintenance scheduled for April 30th from 11PM-2AM. Some services may be unavailable.",
      date: "April 29, 2025",
      read: false,
      type: "warning"
    },
    {
      id: 2,
      title: "New Bill Payment Feature",
      content: "Pay your bills with UPI now available! Update your app to access this feature.",
      date: "April 28, 2025",
      read: false,
      type: "info"
    },
    {
      id: 3,
      title: "Power Outage Notice",
      content: "Planned outage in Warangal district on May 2nd from 9AM-1PM for infrastructure upgrades.",
      date: "April 27, 2025",
      read: false,
      type: "alert"
    }
  ]);

  // Toggle notification panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
    
    // Mark all as read when opening
    if (!isOpen) {
      const updatedNotifications = notifications.map(n => ({...n, read: true}));
      setNotifications(updatedNotifications);
      setUnreadCount(0);
    }
  };

  // Get icon based on notification type
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'warning':
        return <i className="bi bi-exclamation-triangle text-yellow-500"></i>;
      case 'info':
        return <i className="bi bi-info-circle text-green-500"></i>;
      case 'alert':
        return <i className="bi bi-exclamation-circle text-red-500"></i>;
      default:
        return <i className="bi bi-bell text-gray-500"></i>;
    }
  };

  return (
    <>
      {/* Fixed Notification Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={togglePanel}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none"
        >
          <i className="bi bi-bell text-xl"></i>
          
          {/* Notification Count Badge */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Off-canvas Panel */}
      <div 
        className={`fixed top-0 right-0 z-50 w-96 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <i className="bi bi-megaphone text-xl mr-2"></i>
            <h3 className="font-medium text-lg mt-2">Notifications</h3>
          </div>
          <button 
            onClick={togglePanel} 
            className="text-white hover:bg-green-700 p-1 rounded-full focus:outline-none"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        
        {/* Notification List */}
        <div className="divide-y divide-gray-100 overflow-y-auto max-h-screen pb-16">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 pt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.date}</span>
                    </div>
                    <p className="mt-1 text-gray-600 text-sm">{notification.content}</p>
                    <div className="mt-2 flex justify-end">
                      <button className="text-xs text-green-600 hover:text-green-800 flex items-center">
                        Details <i className="bi bi-chevron-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No notifications to display
            </div>
          )}
        </div>
        
        {/* Panel Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <button 
              className="py-2 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none transition-colors duration-200"
              onClick={() => {
                setNotifications([]);
                setUnreadCount(0);
              }}
            >
              <i className="bi bi-trash mr-1"></i> Clear All
            </button>
            <button 
              onClick={togglePanel}
              className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay (only visible when panel is open) */}
      {isOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={togglePanel}
            ></div>
          )}
    </>
  );
}