import { useState } from "react";
import { useTitle } from '../../hooks/useTitle';

export const Employees = ({ employees, setEmployees }) => {
  useTitle('EmployeeManagement')
  const [showAddModal, setShowAddModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editEmployeeData, setEditEmployeeData] = useState(null);

  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    role: '',
    zone: '',
    contact: '',
    status: 'Active',
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleNewEmployeeChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (employee) => {
    setEditEmployeeData({ ...employee });
    setShowEditModal(true);
  };
  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEmployeeData(prev => ({ ...prev, [name]: value }));
  };
  

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) throw new Error('Failed to add employee');

      const savedEmployee = await response.json();
      setEmployees([...employees, savedEmployee]);

      setShowAddModal(false);
      setNewEmployee({
        id: '',
        name: '',
        role: '',
        zone: '',
        contact: '',
        status: 'Active',
      });
    } catch (error) {
      console.error(error);
      alert('Error adding employee');
    }
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employees/${editEmployeeData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editEmployeeData),
      });
  
      if (!response.ok) throw new Error('Failed to update employee');
  
      const updatedEmployee = await response.json();
  
      const updatedEmployees = employees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      );
  
      setEmployees(updatedEmployees);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Something went wrong while updating the employee.');
    }
  };
  

  const confirmDeleteEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:8000/employees/${employeeToDelete.id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) throw new Error("Failed to delete employee");
  
      const updatedEmployees = employees.filter(emp => emp.id !== employeeToDelete.id);
      setEmployees(updatedEmployees);
      setEmployeeToDelete(null);
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Something went wrong while deleting the employee.");
    }
  };

  // Filter employees based on search term
  const filteredEmployees = [...employees]
  .filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.zone.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    const idA = parseInt(a.id.replace('EMP-', ''));
    const idB = parseInt(b.id.replace('EMP-', ''));
    return idB - idA;
  });



  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Employee Management</h1>
        <p className="text-gray-500 text-sm">Manage your employee records</p>
      </div>

      {/* Search and Add */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search employees..."
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="bi bi-search absolute left-3 top-2.5 text-gray-400"></i>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md inline-flex items-center"
        >
          <i className="bi bi-plus-lg mr-2"></i>
          Add Employee
        </button>
      </div>

      {/* Employee Table */}
      {filteredEmployees.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <i className="bi bi-people text-gray-400 text-3xl mb-2"></i>
          <p className="text-gray-600">No employees found</p>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Zone</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Contact</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((emp, i) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{emp.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                          {emp.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{emp.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{emp.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <i className="bi bi-geo-alt text-gray-400 mr-2"></i>
                        {emp.zone}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <i className="bi bi-telephone text-gray-400 mr-2"></i>
                        {emp.contact}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-md ${
                          emp.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : emp.status === "Inactive"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-3">
                      <button
                          onClick={() => handleEditClick(emp)}
                          className="text-green-600 hover:text-green-800"
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          onClick={() => setEmployeeToDelete(emp)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {showAddModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>

      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          name="id"
          placeholder="Employee ID"
          value={newEmployee.employeeId}
          onChange={handleNewEmployeeChange }
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployee.name}
          onChange={handleNewEmployeeChange }
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newEmployee.role}
          onChange={handleNewEmployeeChange }
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="zone"
          placeholder="Zone"
          value={newEmployee.zone}
          onChange={handleNewEmployeeChange }
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={newEmployee.contact}
          onChange={handleNewEmployeeChange }
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <select
          name="status"
          value={newEmployee.status}
          onChange={handleNewEmployeeChange }
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setShowAddModal(false)}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
)}

{employeeToDelete && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl border">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Confirm Delete
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete <strong>{employeeToDelete.name}</strong>?
      </p>
      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
          onClick={() => setEmployeeToDelete(null)}
        >
          Cancel
        </button>
        <button
          className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
          onClick={confirmDeleteEmployee}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

{showEditModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-sm flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl border border-gray-100 transition-all duration-300 animate-fadeIn">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Edit Employee</h3>
      <div className="space-y-4">
        <input type="text" name="employeeId" value={editEmployeeData.employeeId} onChange={handleEditChange} placeholder="Employee ID" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
        <input type="text" name="name" value={editEmployeeData.name} onChange={handleEditChange} placeholder="Name" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
        <input type="text" name="role" value={editEmployeeData.role} onChange={handleEditChange} placeholder="Role" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
        <input type="text" name="zone" value={editEmployeeData.zone} onChange={handleEditChange} placeholder="Zone" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
        <input type="text" name="contact" value={editEmployeeData.contact} onChange={handleEditChange} placeholder="Contact" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm" />
        <select name="status" value={editEmployeeData.status} onChange={handleEditChange} className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm">
          <option>Active</option>
          <option>Inactive</option>
          <option>On Leave</option>
        </select>
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300" onClick={() => setShowEditModal(false)}>Cancel</button>
        <button className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-700" onClick={handleEditSave}>Save</button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};