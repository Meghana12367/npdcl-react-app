import { useState } from "react";

export const Consumer = ({ allConsumers, setAllConsumers }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [consumerToDelete, setConsumerToDelete] = useState(null);
  const [editConsumerData, setEditConsumerData] = useState(null);

  const [newConsumer, setNewConsumer] = useState({
    consumerId: '',
    name: '',
    connectionType: 'Residential',
    area: '',
    status: 'Active',
  });

  //Handlers 

  const handleNewConsumerChange = (e) => {
    const { name, value } = e.target;
    setNewConsumer(prev => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (index) => {
    const consumerToEdit = allConsumers[index];
    setEditConsumerData({ ...consumerToEdit });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditConsumerData(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteClick = (consumer) => {
    setConsumerToDelete(consumer);
  };

  // Add Consumer

  const handleAddConsumer = async () => {
    try {
      const response = await fetch('http://localhost:8000/allConsumers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConsumer),
      });

      if (!response.ok) throw new Error('Failed to add consumer');

      const savedConsumer = await response.json();
      setAllConsumers([savedConsumer, ...allConsumers]);
      setShowAddModal(false);
      setNewConsumer({
        consumerId: '',
        name: '',
        connectionType: 'Residential',
        area: '',
        status: 'Active',
      });
    } catch (error) {
      console.error(error);
      alert('Error adding consumer');
    }
  };

  // Edit Consumer

  const handleEditSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/allConsumers/${editConsumerData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editConsumerData),
      });

      if (!response.ok) throw new Error('Failed to update consumer');

      const updatedConsumer = await response.json();
      const updatedConsumers = allConsumers.map(consumer =>
        consumer.id === editConsumerData.id ? updatedConsumer : consumer
      );

      setAllConsumers(updatedConsumers);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating consumer:', error);
      alert('Something went wrong while updating the consumer.');
    }
  };

  //Delete Consumer

  const confirmDeleteConsumer = async () => {
    try {
      const response = await fetch(`http://localhost:8000/allConsumers/${consumerToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error("Failed to delete consumer");

      const updatedConsumers = allConsumers.filter(consumer => consumer.id !== consumerToDelete.id);
      setAllConsumers(updatedConsumers);
      setConsumerToDelete(null);
    } catch (error) {
      console.error("Error deleting consumer:", error);
      alert("Something went wrong while deleting the consumer.");
    }
  };

  // Render 

  return (
    <div>
      {/* Header + Search + Add */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Consumer Management</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search consumers..."
              className="border border-gray-300 rounded-lg py-2 top-2.5 px-4 pl-10"
            />
            <i className="bi bi-search absolute left-1 top-2 text-gray-500"></i>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            <i className="bi bi-plus-lg mr-1"></i> Add Consumer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Consumer ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Connection Type</th>
              <th className="py-3 px-4 text-left">Area</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allConsumers && allConsumers.length > 0 ? (
              allConsumers.map((consumer, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{consumer.consumerId}</td>
                  <td className="py-3 px-4">{consumer.name}</td>
                  <td className="py-3 px-4">{consumer.connectionType}</td>
                  <td className="py-3 px-4">{consumer.area}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      consumer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : consumer.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {consumer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(index)}
                        className="text-green-600 hover:text-green-800"
                        title="Edit Consumer"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteClick(consumer)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-3 px-4 text-center">No consumers found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl border border-gray-100 transition-all duration-300 animate-fadeIn">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Edit Consumer</h3>
            <div className="space-y-4">
              <input type="text" name="consumerId" value={editConsumerData.consumerId} onChange={handleEditChange} placeholder="Consumer ID" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <input type="text" name="name" value={editConsumerData.name} onChange={handleEditChange} placeholder="Name" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <select name="connectionType" value={editConsumerData.connectionType} onChange={handleEditChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
              <input type="text" name="area" value={editConsumerData.area} onChange={handleEditChange} placeholder="Area" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <select name="status" value={editConsumerData.status} onChange={handleEditChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition">
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all" onClick={() => setShowEditModal(false)}>Cancel</button>
              <button className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-sm transition-all" onClick={handleEditSave}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl border border-gray-100 transition-all duration-300 animate-fadeIn">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add New Consumer</h3>
            <div className="space-y-4">
              <input type="text" name="consumerId" value={newConsumer.consumerId} onChange={handleNewConsumerChange} placeholder="Consumer ID" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <input type="text" name="name" value={newConsumer.name} onChange={handleNewConsumerChange} placeholder="Name" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <select name="connectionType" value={newConsumer.connectionType} onChange={handleNewConsumerChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
              <input type="text" name="area" value={newConsumer.area} onChange={handleNewConsumerChange} placeholder="Area" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition" />
              <select name="status" value={newConsumer.status} onChange={handleNewConsumerChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600 transition">
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 shadow-sm transition-all" onClick={handleAddConsumer}>Add</button>
            </div>
          </div>
        </div>
      )}

        {consumerToDelete && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Confirm Delete
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete <strong>{consumerToDelete.name}</strong>?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                  onClick={() => setConsumerToDelete(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
                  onClick={confirmDeleteConsumer}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

    </div>
  );
};
