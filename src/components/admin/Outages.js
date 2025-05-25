import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Outages = ({ summaryData, outageReports }) => {

  const navigate = useNavigate();
 

  const [scheduledOutages, setScheduledOutages] = useState([]);
  const [newOutage, setNewOutage] = useState({
    id: '',
    area: '',
    date: '',
    startTime: '',
    endTime: '',
    reason: '',
  });
  const [editOutage, setEditOutage] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [outageToDelete, setOutageToDelete] = useState(null);

  useEffect(() => {
    const fetchScheduledOutages = async () => {
      try {
        const response = await fetch('http://localhost:8000/scheduledOutages');
        if (!response.ok) throw new Error('Failed to fetch outages');
        const data = await response.json();
        setScheduledOutages(data);
      } catch (error) {
        console.error(error);
        alert('Error fetching scheduled outages');
      }
    };

    fetchScheduledOutages();
  }, []);

  const handleNewOutageChange = (e) => {
    const { name, value } = e.target;
    setNewOutage((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditOutage((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOutage = async () => {
    try {
      const response = await fetch('http://localhost:8000/scheduledOutages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOutage),
      });

      if (!response.ok) throw new Error('Failed to add outage');

      const savedOutage = await response.json();
      setScheduledOutages([...scheduledOutages, savedOutage]);
      setShowAddModal(false);
      setNewOutage({ area: '', date: '', startTime: '', endTime: '', reason: '' });
    } catch (error) {
      console.error(error);
      alert('Error adding outage');
    }
  };

  const handleEditClick = (outage) => {
    setEditOutage(outage);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:8000/scheduledOutages/${editOutage.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editOutage),
      });

      if (!response.ok) throw new Error('Failed to update outage');

      const updatedOutages = scheduledOutages.map((o) =>
        o.id === editOutage.id ? editOutage : o
      );
      setScheduledOutages(updatedOutages);
      setShowEditModal(false);
    } catch (error) {
      console.error(error);
      alert('Error updating outage');
    }
  };

  const confirmDeleteOutage = async () => {
    try {
      const response = await fetch(`http://localhost:8000/scheduledOutages/${outageToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete outage');

      const updatedOutages = scheduledOutages.filter((o) => o.id !== outageToDelete.id);
      setScheduledOutages(updatedOutages);
      setOutageToDelete(null);
    } catch (error) {
      console.error(error);
      alert('Error deleting outage');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Outage Management</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          <i className="bi bi-plus-lg mr-1"></i> Schedule Outage
        </button>
      </div>

      {/* Active Outages */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Currently Active Outages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summaryData.activeOutages && summaryData.activeOutages.length > 0 ? (
            summaryData.activeOutages.map((outage, index) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{outage.area}</h4>
                    <p className="text-sm text-gray-600 mt-1">Reason: {outage.reason}</p>
                    <p className="text-sm text-gray-600">Affected Consumers: {outage.affectedConsumers}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Started: {outage.startTime}</p>
                    <p className="text-sm text-gray-600">Est. Resolution: {outage.estimatedResolution}</p>
                    <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Mark Resolved
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 bg-green-50 p-4 rounded-lg">
              <div className="flex">
                <i className="bi bi-check-circle text-green-500 mt-1 mr-3 text-lg"></i>
                <p>No active outages at this time.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scheduled Outages */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Scheduled Outages</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Area</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">From</th>
                <th className="py-3 px-4 text-left">To</th>
                <th className="py-3 px-4 text-left">Reason</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {scheduledOutages.length > 0 ? (
                scheduledOutages.map((outage, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4">{outage.area}</td>
                    <td className="py-3 px-4">{outage.date}</td>
                    <td className="py-3 px-4">{outage.startTime}</td>
                    <td className="py-3 px-4">{outage.endTime}</td>
                    <td className="py-3 px-4">{outage.reason}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button onClick={() => handleEditClick(outage)} className="text-blue-600 hover:text-blue-800">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button onClick={() => setOutageToDelete(outage)} className="text-red-600 hover:text-red-800">
                          <i className="bi bi-trash"></i>
                        </button>
                        <button className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 text-sm">
                          Notify
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-3 px-4 text-center">
                    No scheduled outages
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reported Outages */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Reported Issues</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Report ID</th>
                <th className="py-3 px-4 text-left">Area</th>
                <th className="py-3 px-4 text-left">Issue Type</th>
                <th className="py-3 px-4 text-left">Reported By</th>
                <th className="py-3 px-4 text-left">Reported At</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {outageReports && outageReports.length > 0 ? (
                outageReports.map((report, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4">{report.reportId}</td>
                    <td className="py-3 px-4">{report.area}</td>
                    <td className="py-3 px-4">{report.issueType}</td>
                    <td className="py-3 px-4">
                      {report.reporterName} ({report.consumerId})
                    </td>
                    <td className="py-3 px-4">{report.reportedAt}</td>
                    <td className="py-3 px-4">
                      

                      <div className="flex space-x-2">
                        <button onClick={() => navigate(`/admin-dashboard/view-details/${report.reportId}`)} 
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 text-sm">
                          View Details
                        </button>
                        <button onClick={() => navigate(`/admin-dashboard/assign-crew/${report.reportId}`)} className="bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 text-sm">
                          Assign Crew
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-3 px-4 text-center">No reported outages</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Schedule New Outage</h3>
            {['area', 'date', 'startTime', 'endTime', 'reason'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newOutage[field]}
                onChange={handleNewOutageChange}
                className="w-full mb-3 px-4 py-2 border rounded"
              />
            ))}
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded bg-gray-300">
                Cancel
              </button>
              <button onClick={handleAddOutage} className="px-4 py-2 rounded bg-green-600 text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Edit Outage</h3>
            {['area', 'date', 'startTime', 'endTime', 'reason'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={editOutage[field]}
                onChange={handleEditChange}
                className="w-full mb-3 px-4 py-2 border rounded"
              />
            ))}
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 rounded bg-gray-300">
                Cancel
              </button>
              <button onClick={handleSaveEdit} className="px-4 py-2 rounded bg-blue-600 text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {outageToDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <p className="mb-4">Are you sure you want to delete this outage?</p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setOutageToDelete(null)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={confirmDeleteOutage} className="px-4 py-2 bg-red-600 text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
