import React from 'react';
import { Routes, Route} from 'react-router-dom';

import { BillManagement, Finance, BudgetAllocation, Expenditure, AuditLog, FundTransfer, Revenue, Invoice} from '../pages/common';
import { UserDashBoard, AdminDashBoard} from "../pages/dashboard";
import { PayBill, ViewBill, PaymentHistory, ReportIssue   } from "../pages/user";
import { ScheduleOutage, GenerateBills, NewConnections, SendNotifications } from '../pages/admin';
import { Home, Login, AboutPage, Register } from "../pages";
import { ReminderSuccess } from "../components/admin/ReminderSuccess";
import { PaymentSummary, TariffManagement } from '../components/admin';
import { ViewDetails, AssignCrew } from '../components/admin';
import { Outages } from '../components/admin';

import { ProtectedRoutes } from './ProtectedRoutes';



export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<Register /> } />
        
        <Route path="/bill-management" element={<BillManagement />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/budget" element={<BudgetAllocation />} />
        <Route path="/expenditure" element={<Expenditure />} />
        <Route path="/auditlog" element={<AuditLog />} />
        <Route path="/fundtransfer" element={<FundTransfer />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/invoice" element={<Invoice />} />

        <Route path="/user-dashboard" element={<ProtectedRoutes><UserDashBoard /></ProtectedRoutes>} />
        <Route path="/admin-dashboard" element={<ProtectedRoutes><AdminDashBoard /></ProtectedRoutes>} />
        

        <Route path="/user-dashboard/paybill" element={<ProtectedRoutes><PayBill /></ProtectedRoutes>} />
        <Route path="/user-dashboard/viewbill" element={<ProtectedRoutes><ViewBill /></ProtectedRoutes>} />
        <Route path="/user-dashboard/payment-history" element={<ProtectedRoutes><PaymentHistory /></ProtectedRoutes>} />
        <Route path="/user-dashboard/report" element={<ProtectedRoutes><ReportIssue /></ProtectedRoutes>} />

        <Route path="/admin-dashboard/schedule" element={<ProtectedRoutes><ScheduleOutage/></ProtectedRoutes>} />
        <Route path="/admin-dashboard/generate" element={<ProtectedRoutes><GenerateBills/></ProtectedRoutes>} />
        <Route path="/admin-dashboard/connections" element={<ProtectedRoutes><NewConnections/></ProtectedRoutes>} />
        <Route path="/admin-dashboard/notifications" element={<ProtectedRoutes><SendNotifications/></ProtectedRoutes>} />

        <Route path="/admin-dashboard/reminder-success" element={<ProtectedRoutes><ReminderSuccess /></ProtectedRoutes>} />
        <Route path="/admin-dashboard/payment-summary" element={<ProtectedRoutes><PaymentSummary /></ProtectedRoutes>} />
        <Route path="/admin-dashboard/tariff-management" element={<ProtectedRoutes><TariffManagement /></ProtectedRoutes>} />

        <Route path="/admin-dashboard/view-details/:reportId" element={<ProtectedRoutes><ViewDetails /></ProtectedRoutes>} />
        <Route path="/admin-dashboard/assign-crew/:reportId" element={<ProtectedRoutes><AssignCrew /></ProtectedRoutes>} />

        <Route path="/admin-dashboard/outages" element={<Outages />} />

      </Routes>
  )
}
