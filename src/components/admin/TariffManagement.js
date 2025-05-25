import { useEffect, useState } from 'react';

export const TariffManagement = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [tariffs, setTariffs] = useState({ residential: [], commercial: [], industrial: [] });
  const [loading, setLoading] = useState(true);
  const [editingTariff, setEditingTariff] = useState(null);
  const [newTariff, setNewTariff] = useState({
    name: '',
    rate: '',
    fixedCharge: '',
    applicable: '',
    status: 'active',
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const API_URL = 'http://localhost:8000/tariffs';

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTariffs(data);
      } catch (error) {
        console.error('Error fetching tariffs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  const updateServerTariffs = async (updated) => {
    try {
      await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error('Failed to update server:', err);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAddForm(false);
    setEditingTariff(null);
  };

  const handleEditTariff = (tariff) => {
    setEditingTariff({ ...tariff });
    setShowAddForm(false);
  };

  const handleUpdateTariff = () => {
    const updated = {
      ...tariffs,
      [activeTab]: tariffs[activeTab].map(t => t.id === editingTariff.id ? editingTariff : t),
    };
    setTariffs(updated);
    updateServerTariffs(updated);
    setEditingTariff(null);
  };

  const handleAddNewTariff = () => {
    const newId =
      Math.max(...Object.values(tariffs).flat().map(t => t.id), 0) + 1;
    const newTariffData = { ...newTariff, id: newId };
    const updated = {
      ...tariffs,
      [activeTab]: [...tariffs[activeTab], newTariffData],
    };
    setTariffs(updated);
    updateServerTariffs(updated);
    setNewTariff({
      name: '',
      rate: '',
      fixedCharge: '',
      applicable: '',
      status: 'active',
    });
    setShowAddForm(false);
  };

  const toggleTariffStatus = (id) => {
    const updated = {
      ...tariffs,
      [activeTab]: tariffs[activeTab].map(t =>
        t.id === id
          ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' }
          : t
      ),
    };
    setTariffs(updated);
    updateServerTariffs(updated);
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen p-6 flex items-center justify-center">
        <div className="text-gray-600 text-lg">Loading tariffs...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Tariff Management</h1>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium flex items-center"
            onClick={() => {
              setShowAddForm(true);
              setEditingTariff(null);
            }}
          >
            <i className="bi bi-plus-circle mr-2"></i> Add New Tariff
          </button>
        </div>

        <div className="flex border-b mb-6">
          {['residential', 'commercial', 'industrial'].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 font-medium ${activeTab === type ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-600'}`}
              onClick={() => handleTabChange(type)}
            >
              <i className={`bi ${type === 'residential' ? 'bi-house' : type === 'commercial' ? 'bi-shop' : 'bi-building'} mr-2`}></i>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {(showAddForm || editingTariff) && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">{editingTariff ? 'Edit Tariff' : 'Add New Tariff'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tariff Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={editingTariff ? editingTariff.name : newTariff.name}
                  onChange={(e) =>
                    editingTariff
                      ? setEditingTariff({ ...editingTariff, name: e.target.value })
                      : setNewTariff({ ...newTariff, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rate (₹/kWh)</label>
                <input
                  type="number"
                  className="w-full border rounded-md p-2"
                  value={editingTariff ? editingTariff.rate : newTariff.rate}
                  onChange={(e) =>
                    editingTariff
                      ? setEditingTariff({ ...editingTariff, rate: parseFloat(e.target.value) })
                      : setNewTariff({ ...newTariff, rate: parseFloat(e.target.value) })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fixed Charge</label>
                <input
                  type="number"
                  className="w-full border rounded-md p-2"
                  value={editingTariff ? editingTariff.fixedCharge : newTariff.fixedCharge}
                  onChange={(e) =>
                    editingTariff
                      ? setEditingTariff({ ...editingTariff, fixedCharge: parseInt(e.target.value) })
                      : setNewTariff({ ...newTariff, fixedCharge: parseInt(e.target.value) })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Applicable To</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={editingTariff ? editingTariff.applicable : newTariff.applicable}
                  onChange={(e) =>
                    editingTariff
                      ? setEditingTariff({ ...editingTariff, applicable: e.target.value })
                      : setNewTariff({ ...newTariff, applicable: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingTariff(null);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md"
                onClick={editingTariff ? handleUpdateTariff : handleAddNewTariff}
              >
                {editingTariff ? 'Update Tariff' : 'Add Tariff'}
              </button>
            </div>
          </div>
        )}

        {/* Tariff Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate (₹/kWh)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fixed Charge</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicable</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tariffs[activeTab]?.map((tariff) => (
                <tr key={tariff.id}>
                  <td className="px-6 py-4">{tariff.name}</td>
                  <td className="px-6 py-4">₹{tariff.rate.toFixed(2)}</td>
                  <td className="px-6 py-4">₹{tariff.fixedCharge}</td>
                  <td className="px-6 py-4">{tariff.applicable}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      tariff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {tariff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-900 mr-3" onClick={() => handleEditTariff(tariff)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className={`${
                        tariff.status === 'active' ? 'text-red-600' : 'text-green-600'
                      } hover:text-red-800`}
                      onClick={() => toggleTariffStatus(tariff.id)}
                    >
                      {tariff.status === 'active' ? <i className="bi bi-toggle-on"></i> : <i className="bi bi-toggle-off"></i>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
