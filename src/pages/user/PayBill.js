import { useState } from "react";

export const PayBill= () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [amount, setAmount] = useState("2450");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBillDetails, setShowBillDetails] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <i className="bi bi-check-circle-fill text-3xl text-green-600"></i>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Payment Successful!</h2>
            <p className="text-gray-600 mt-2">Your electricity bill has been paid successfully</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Transaction ID</span>
              <span className="font-medium">TXN2025051500123</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Bill Number</span>
              <span className="font-medium">ELEC-9834752</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Payment Date</span>
              <span className="font-medium">15 May 2025</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium">{selectedPaymentMethod.toUpperCase()}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 mt-2 pt-2">
              <span className="font-medium">Amount Paid</span>
              <span className="font-bold text-lg">₹{amount}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
              <i className="bi bi-download"></i>
              Download Receipt
            </button>
            <button 
              onClick={() => setPaymentSuccess(false)}
              className="flex-1 border border-green-600 text-green-600 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
              <i className="bi bi-arrow-left"></i>
              Back to Payment
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            <i className="bi bi-lightning-charge-fill text-yellow-500 mr-2"></i>
            Electricity Bill Payment
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800">
              <i className="bi bi-bell text-xl"></i>
            </button>
            <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <i className="bi bi-clock"></i>
              Due: 20 May 2025
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Payment Form */}
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              {/* Progress Bar */}
              <div className="bg-gray-100 h-2">
                <div className="bg-green-500 h-full" style={{ width: "70%" }}></div>
              </div>
              
              {/* Bill Summary Banner */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Total Bill Amount</div>
                    <div className="text-2xl font-bold text-gray-800">₹{amount}</div>
                  </div>
                  <div className="mt-3 md:mt-0 flex flex-wrap gap-3">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-sm flex items-center">
                      <i className="bi bi-calendar-check text-green-600 mr-2"></i>
                      <div>
                        <div className="text-xs text-gray-500">Billing Period</div>
                        <div className="text-sm font-medium">Mar - Apr 2025</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg px-3 py-2 shadow-sm flex items-center">
                      <i className="bi bi-lightning text-yellow-500 mr-2"></i>
                      <div>
                        <div className="text-xs text-gray-500">Consumption</div>
                        <div className="text-sm font-medium">320 kWh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6">
                {/* Consumer Details Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium text-gray-800">Consumer Details</h3>
                    <button 
                      type="button"
                      className="flex items-center gap-1 text-green-600 text-sm"
                      onClick={() => {}}
                    >
                      <i className="bi bi-pencil"></i>
                      Edit
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Consumer Number</div>
                      <div className="font-medium text-gray-700 flex items-center">
                        E-45678902
                        <i className="bi bi-check-circle-fill text-green-500 ml-2"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Consumer Name</div>
                      <div className="font-medium text-gray-700">Rajesh Kumar</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">Connection Type</div>
                      <div className="font-medium text-gray-700">Domestic</div>
                    </div>
                  </div>
                </div>

                {/* Bill Details Section */}
                <div className="mb-6">
                  <div 
                    className="flex items-center justify-between mb-3 cursor-pointer"
                    onClick={() => setShowBillDetails(!showBillDetails)}
                  >
                    <h3 className="text-lg font-medium text-gray-800">Bill Details</h3>
                    <button type="button">
                      <i className={`bi ${showBillDetails ? 'bi-chevron-up' : 'bi-chevron-down'} text-gray-500`}></i>
                    </button>
                  </div>
                  
                  {showBillDetails && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Bill Number</div>
                          <div className="font-medium text-gray-700">ELEC-9834752</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Bill Date</div>
                          <div className="font-medium text-gray-700">10 Apr 2025</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">Bill Amount (₹)</div>
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Energy Charges</span>
                          <span>₹1800</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Fixed Charges</span>
                          <span>₹320</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Taxes & Duties</span>
                          <span>₹330</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-100 mt-2 pt-2 font-medium">
                          <span>Total Amount</span>
                          <span>₹{amount}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Methods Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Payment Method</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div
                      onClick={() => setSelectedPaymentMethod("upi")}
                      className={`border rounded-lg p-4 cursor-pointer text-center transition-all ${
                        selectedPaymentMethod === "upi"
                          ? "border-green-500 bg-green-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <i className="bi bi-phone text-2xl text-green-600 mb-2 block"></i>
                      <p className="font-medium">UPI</p>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentMethod("card")}
                      className={`border rounded-lg p-4 cursor-pointer text-center transition-all ${
                        selectedPaymentMethod === "card"
                          ? "border-green-500 bg-green-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <i className="bi bi-credit-card text-2xl text-green-600 mb-2 block"></i>
                      <p className="font-medium">Card</p>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentMethod("netbanking")}
                      className={`border rounded-lg p-4 cursor-pointer text-center transition-all ${
                        selectedPaymentMethod === "netbanking"
                          ? "border-green-500 bg-green-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <i className="bi bi-bank text-2xl text-green-600 mb-2 block"></i>
                      <p className="font-medium">Netbanking</p>
                    </div>
                    <div
                      onClick={() => setSelectedPaymentMethod("wallet")}
                      className={`border rounded-lg p-4 cursor-pointer text-center transition-all ${
                        selectedPaymentMethod === "wallet"
                          ? "border-green-500 bg-green-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <i className="bi bi-wallet2 text-2xl text-green-600 mb-2 block"></i>
                      <p className="font-medium">Wallet</p>
                    </div>
                  </div>

                  {/* Payment Method Details */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    {selectedPaymentMethod === "upi" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                          <div className="flex">
                            <input
                              type="text"
                              placeholder="yourname@bank"
                              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button
                              type="button"
                              className="bg-green-600 text-white px-4 py-2 rounded-r-lg"
                            >
                              <i className="bi bi-qr-code"></i>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Google Pay */}
                            <button type="button" className="flex-1 flex flex-col items-center border border-gray-300 rounded-lg p-3 hover:shadow-md hover:bg-gray-50">
                              <img src="https://img.icons8.com/color/512/google-pay.png" alt="GPay" className="h-8 mb-1" />
                              <span className="text-sm text-gray-800 font-medium">Google Pay</span>
                            </button>

                            {/* PhonePe */}
                            <button type="button" className="flex-1 flex flex-col items-center border border-gray-300 rounded-lg p-3 hover:shadow-md hover:bg-gray-50">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1y9bRtwN4tkv5dwh33YdbbnJIBj-PRHmWg&s" alt="PhonePe" className="h-8 mb-1" />
                              <span className="text-sm text-gray-800 font-medium">PhonePe</span>
                            </button>

                            {/* Bank */}
                            <button type="button" className="flex-1 flex flex-col items-center border border-gray-300 rounded-lg p-3 hover:shadow-md hover:bg-gray-50">
                              <img src="https://seeklogo.com/images/P/paytm-logo-092D33ED90-seeklogo.com.png" alt="paytm" className="h-8 mb-1" />
                              <span className="text-sm text-gray-800 font-medium">Paytm</span>
                            </button>
                          </div>
                        </div>
                    )}

                    {selectedPaymentMethod === "card" && (
                      <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        
                        {/* Card Number */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2">Card Number</label>
                          <input
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        {/* Expiry and CVV */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">CVV</label>
                            <input
                              type="text"
                              placeholder="XXX"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        {/* Save card */}
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="saveCard"
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <label htmlFor="saveCard" className="ml-2 text-sm text-gray-600">
                            Save card for future payments
                          </label>
                        </div>
                      </div>
                    )}


                    {selectedPaymentMethod === "netbanking" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Bank</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <img src="https://www.shutterstock.com/image-vector/state-bank-india-sbi-indian-260nw-2359928535.jpg" alt="sbi" className="h-8 mb-1 ml-8" />
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <img src="https://logohistory.net/wp-content/uploads/2023/08/HDFC-Bank-Limited-Symbol.png" alt="hdfc" className="h-8 mb-1 ml-8" />
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s" alt="icici" className="h-8 mb-1 ml-8" />
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                            <img src="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1720244490" alt="axis" className="h-8 mb-1 ml-8" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                            <option>Select Other Bank</option>
                            <option>Kotak Mahindra Bank</option>
                            <option>Punjab National Bank</option>
                            <option>Bank of Baroda</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {selectedPaymentMethod === "wallet" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Wallet</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <i className="bi bi-wallet2 text-xl text-gray-700 mb-1 block"></i>
                              <div className="font-medium text-gray-700">Paytm</div>
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <i className="bi bi-wallet2 text-xl text-gray-700 mb-1 block"></i>
                              <div className="font-medium text-gray-700">PhonePe</div>
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <i className="bi bi-wallet2 text-xl text-gray-700 mb-1 block"></i>
                              <div className="font-medium text-gray-700">Amazon Pay</div>
                            </button>
                            <button type="button" className="border border-gray-300 rounded-lg p-3 text-center hover:bg-gray-50">
                              <i className="bi bi-wallet2 text-xl text-gray-700 mb-1 block"></i>
                              <div className="font-medium text-gray-700">Google Pay</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-3">Payment Summary</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Bill Amount</span>
                      <span className="font-medium">₹{amount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Convenience Fee</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="border-t-2 border-gray-200 mt-2 pt-2 flex justify-between">
                      <span className="font-medium">Total Amount</span>
                      <span className="font-bold text-lg">₹{amount}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 relative"
                >
                  {isProcessing ? (
                    <>
                      <i className="bi bi-arrow-repeat animate-spin"></i>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-lock-fill"></i>
                      Pay Securely ₹{amount}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Additional Info */}
          <div className="lg:w-1/3 space-y-6">
            {/* Payment Protection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-50 p-3 border-b border-green-100">
                <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                  <i className="bi bi-shield-check text-green-600"></i>
                  Payment Protection
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
                    <p className="text-sm text-gray-600">Your payment is 100% secure with end-to-end encryption</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
                    <p className="text-sm text-gray-600">Instant payment confirmation sent to your registered mobile</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle-fill text-green-600 mt-1"></i>
                    <p className="text-sm text-gray-600">No hidden charges or convenience fees on any payment method</p>
                  </li>
                </ul>
              </div>
            </div>

            

            
            {/* Customer Support */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full text-green-600">
                  <i className="bi bi-headset text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Need help with your payment?</h4>
                  <p className="text-sm text-gray-600 mb-3">Our customer support team is available 24/7</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a href="#" className="bg-white text-green-600 font-medium text-sm py-2 px-3 rounded-lg border border-green-200 flex items-center justify-center gap-1 hover:bg-green-50">
                      <i className="bi bi-chat-dots-fill"></i>
                      <span>Live Chat</span>
                    </a>
                    <a href="#" className="bg-white text-green-600 font-medium text-sm py-2 px-3 rounded-lg border border-green-200 flex items-center justify-center gap-1 hover:bg-green-50">
                      <i className="bi bi-telephone-fill"></i>
                      <span>Call Support</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}