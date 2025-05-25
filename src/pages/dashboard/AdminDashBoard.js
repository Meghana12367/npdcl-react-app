import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { AdminHeader } from "../../components/admin/AdminHeader";
import { Overview } from "../../components/admin";
import { Employees } from "../../components/admin";
import { Consumer } from "../../components/admin/Consumer";
import { Billing } from "../../components/admin/Billing";
import { Outages } from "../../components/admin";
import { SystemInformation } from "../../components/admin/SystemInformation";
import { Tabs } from "../../components/admin";


export const AdminDashBoard = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);


  // States for different data types
  const [summaryData, setSummaryData] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [pendingConnectionRequests, setPendingConnectionRequests] = useState([]);
  const [outageReports, setOutageReports] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [allConsumers, setAllConsumers] = useState([]);
  const [employees, setEmployees] = useState([]); 
  
  
  
  // Load dashboard data on mount

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await fetch(`http://localhost:8000/${endpoint}`);
      const data = await response.json();
      setter(data);
      return data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return null;
    }
  };


  useEffect(() => {
    async function loadDashboardData() {
      try {
        setIsLoading(true);

        // ✅ Correct key based on your db.json
        const summaryResponse = await fetchData("summaryData", setSummaryData);

        if (summaryResponse) {
          await Promise.all([
            fetchData("usersList", setUsersList),
            fetchData("outageReports", setOutageReports),
            fetchData("recentPayments", setRecentPayments),
            fetchData("complaints", setComplaints),
            fetchData("allConsumers", setAllConsumers),
            fetchData("employees", setEmployees)
          ]);
        }
      } catch (error) {
        console.error("Dashboard load failed:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  
  // Loading state
  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-green-700 text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  // Error state
  if (!summaryData) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-red-700 text-xl">Failed to load admin data. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <AdminHeader
        summaryData={summaryData}
        pendingRequests={pendingConnectionRequests.length}
      />
            
     {/* Navigation of Tabs */}
     <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />


      {/* Dashboard Tabs */}
      {activeTab === "overview" && (
          <Overview
            summaryData={summaryData}
            pendingConnectionRequests={0}
            complaints={complaints}
            recentPayments={recentPayments}
            outageReports={outageReports}
          />
        )}
      
      <div className="bg-white rounded-lg shadow-md p-6">

    
      {activeTab === 'employees' && (
        <Employees employees={employees} setEmployees={setEmployees} />
      )}

      
      {activeTab === 'consumers' && (
        <Consumer allConsumers={allConsumers} setAllConsumers={setAllConsumers} />
      )}
      
        
      {activeTab === 'billing' && (
          <Billing 
          summaryData={summaryData}
          recentPayments={recentPayments}
          />
        )}
        
      {activeTab === 'outages' && (
          <Outages 
          summaryData={summaryData}
          outageReports={outageReports}
          />
        )}
        
      {activeTab === 'systeminformation' && (
          <SystemInformation 
          />
        )}
      </div>
    </div>
  );
};