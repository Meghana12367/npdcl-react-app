import { useNavigate } from 'react-router-dom';

export const Services = () => {

    const navigate = useNavigate();

    const handleBillManagementClick = () => {
    navigate('/bill-management');
    }

    const handleFinanceClick = () => {
    navigate('/finance');  
    }

    const handleBudgetClick = () => {
    navigate('/budget');  
    }

    const handleExpenditureClick = () => {
    navigate('/expenditure');  
    }

    const handleAuditClick = () => {
    navigate('/auditlog');  
    }

    const handleFundClick = () => {
    navigate('/fundtransfer');  
    }

    const handleRevenueClick = () => {
    navigate('/revenue');  
    }

    const handleInvoiceClick = () => {
    navigate('/invoice');  
    }


  return (
    <section className="bg-white py-18 px-6" id="finance-services">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-10">Our Finance Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {/* Single Service Box */}
            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleBillManagementClick}
>
              <i className="bi bi-cash-stack text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Bill Management</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleFinanceClick}>

              <i className="bi bi-credit-card-2-back-fill text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Finance Dashboard</h3>
            </div>


            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleBudgetClick}>
                
              <i className="bi bi-bank text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Budget Allocation</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleExpenditureClick}>
                
              <i className="bi bi-clipboard-data-fill text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Expenditure Reports</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleAuditClick}>
                
             <i className="bi bi-file-earmark-bar-graph text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Audit Logs</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleFundClick}>
                
              <i className="bi bi-wallet-fill text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Fund Transfers</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleRevenueClick}>

              <i className="bi bi-pie-chart-fill text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Revenue Analysis</h3>
            </div>

            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleInvoiceClick}>
                
              <i className="bi bi-receipt-cutoff text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Invoice Generation</h3>
            </div>
            </div>
        </div>
        </section>
  )
}
