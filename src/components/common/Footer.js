import { useState } from 'react';

// Individual FAQ Item Component
export const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-green-200 p-8">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-green-800">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-green-600">
          {isOpen ? (
            <i className="bi bi-chevron-up text-xl"></i>
          ) : (
            <i className="bi bi-chevron-down text-xl"></i>
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Modal Component
export const FaqModal = ({ isOpen, onClose }) => {
  const faqs = [
    {
      question: "What are the terms of service for using the NPDCL portal?",
      answer: "By using the NPDCL portal, you agree to maintain the confidentiality of your login credentials, use the system only for authorized purposes, and comply with all applicable electricity regulations and policies. Unauthorized access or misuse of the portal may result in termination of access and potential legal action."
    },
    {
      question: "What are the data privacy policies?",
      answer: "NPDCL respects your privacy and protects your personal information. We collect only necessary data for service delivery, secure it with industry-standard protocols, and never share it with unauthorized third parties. All data handling complies with applicable privacy laws and regulations."
    },
    {
      question: "What are the payment terms and conditions?",
      answer: "Payments made through the portal are processed securely. Refunds for erroneous payments require verification and approval. Late payments may incur additional charges as per regulatory guidelines. All transaction records are maintained for a period of 7 years as required by law."
    },
    {
      question: "What are the terms for service requests and complaints?",
      answer: "Service requests submitted through the portal will be acknowledged within 24 hours and addressed according to the priority level. Complaints are resolved as per regulatory timelines. All communication regarding your request will be sent to your registered email or mobile number."
    },
    {
      question: "What are the terms for account deactivation?",
      answer: "Account deactivation requests must be submitted through the appropriate channel with proper authorization. Upon deactivation, access to services will be discontinued, though historical data will be retained as per regulatory requirements. Reactivation may require administrative approval and verification."
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-90 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-green-700">Frequently Asked Questions</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <i className="bi bi-x-lg text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="divide-y divide-green-200">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer component with FAQ link
export const Footer = () => {
  const [showFaq, setShowFaq] = useState(false);
  
  return (
    <footer className="bg-green-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 mt-2 md:mb-0">
            <p className='mb-2'>© 2025 Northern Power Distribution Company Ltd. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-green-200">Privacy Policy</a>
            <a href="#" className="text-white hover:text-green-200">Contact Us</a>
            <button 
              onClick={() => setShowFaq(true)}
              className="flex items-center hover:text-green-200 focus:outline-none"
            >
              <i className="bi bi-question-circle mr-2"></i>
              FAQ & Terms
            </button>
          </div>
        </div>
      </div>
      
      {/* FAQ Modal */}
      <FaqModal 
        isOpen={showFaq} 
        onClose={() => setShowFaq(false)} 
      />
    </footer>
  );
};

// Standalone FAQ Link Component (for using outside the Footer)
 const FaqLink = () => {
  const [showFaq, setShowFaq] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setShowFaq(true)}
        className="flex items-center text-white hover:text-green-200 focus:outline-none"
      >
        <i className="bi bi-question-circle mr-2"></i>
        FAQ & Terms
      </button>
      
      <FaqModal 
        isOpen={showFaq} 
        onClose={() => setShowFaq(false)} 
      />
    </>
  );
};
