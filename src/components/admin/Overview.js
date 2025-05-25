import { useNavigate } from "react-router-dom";

export const Overview = ({
  summaryData,
  pendingRequests,
  complaints,
  recentPayments,
  outageReports,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div>
        <h2 className="text-xl font-semibold mb-6">Admin Dashboard Overview</h2>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            {
              title: "Total Consumers",
              value: summaryData.totalConsumers,
              icon: "bi-people",
              color: "green",
              extra: `${summaryData.newConsumersToday} new today`,
            },
            {
              title: "Revenue Today",
              value: `₹${summaryData.todayRevenue}`,
              icon: "bi-currency-rupee",
              color: "green",
              extra: `${summaryData.paymentCount} payments received`,
            },
            {
              title: "Pending Requests",
              value: pendingRequests,
              icon: "bi-hourglass-split",
              color: "orange",
              extra: "Requires attention",
            },
            {
              title: "Active Complaints",
              value: summaryData.activeComplaints,
              icon: "bi-exclamation-triangle",
              color: "red",
              extra: `${summaryData.newComplaintsToday} new today`,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`bg-${card.color}-50 p-4 rounded-lg shadow border-l-4 border-${card.color}-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-700">{card.title}</h3>
                <i className={`bi ${card.icon} text-lg text-${card.color}-500`}></i>
              </div>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
              <span className={`text-sm text-${card.color}-600`}>
                <i className="bi bi-arrow-up"></i> {card.extra}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Activity</th>
                  <th className="py-3 px-4 text-left">User</th>
                  <th className="py-3 px-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {summaryData.recentActivity ? (
                  summaryData.recentActivity.map((activity, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="py-3 px-4">{activity.time}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            activity.type === "payment"
                              ? "bg-green-100 text-green-800"
                              : activity.type === "complaint"
                              ? "bg-red-100 text-red-800"
                              : activity.type === "connection"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {activity.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">{activity.user}</td>
                      <td className="py-3 px-4">{activity.details}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-4 text-center">
                      No recent activity
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Schedule Outage",
                icon: "bi-lightning-charge",
                route: "/admin-dashboard/schedule",
              },
              {
                label: "Generate Bills",
                icon: "bi-file-earmark-text",
                route: "/admin-dashboard/generate",
              },
              {
                label: "New Connection",
                icon: "bi-person-plus",
                route: "/admin-dashboard/connections",
              },
              {
                label: "Send Notifications",
                icon: "bi-envelope",
                route: "/admin-dashboard/notifications",
              },
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={() => navigate(action.route)}
                className="bg-green-100 hover:bg-green-200 p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-md group"
              >
                <i
                  className={`bi ${action.icon} text-2xl text-green-700 mb-2 transition-transform group-hover:rotate-6`}
                ></i>
                <span className="text-green-800 font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Important Alerts</h3>
          {summaryData.alerts && summaryData.alerts.length > 0 ? (
            <div className="space-y-3">
              {summaryData.alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md ${
                    alert.severity === "high"
                      ? "bg-red-50 border-red-500"
                      : alert.severity === "medium"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-green-50 border-green-500"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <i
                        className={`bi mr-2 text-lg ${
                          alert.severity === "high"
                            ? "bi-exclamation-triangle text-red-500"
                            : alert.severity === "medium"
                            ? "bi-exclamation-circle text-yellow-500"
                            : "bi-info-circle text-green-500"
                        }`}
                      ></i>
                      <p className="font-medium mb-0">{alert.message}</p>
                    </div>
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">No critical alerts at this time</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
