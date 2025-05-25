import React from "react";

export const Invoice = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg mt-10 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        🧾 Understanding Your NPDCL Invoice
      </h2>

      <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        Your invoice from <span className="font-medium">NPDCL (Northern Power Distribution Company Ltd)</span> includes all charges related to your monthly electricity usage. Here’s what each section means:
      </p>

      <div className="space-y-4 text-sm md:text-base">
        <div className="flex items-start gap-2">
          <span className="text-blue-600">⚡</span>
          <p>
            <strong>Electricity Charges:</strong> Calculated based on your energy consumption in kilowatt-hours (kWh) for the billing period.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-yellow-600">📦</span>
          <p>
            <strong>Fixed Charges:</strong> A standard monthly fee for meter connection, maintenance, and infrastructure.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-green-600">💰</span>
          <p>
            <strong>Taxes & Duties:</strong> Includes VAT (7.5%) and other regulatory charges mandated by law.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-purple-600">📅</span>
          <p>
            <strong>Billing Period:</strong> Covers electricity usage from the previous month. For example, May invoices are for April usage.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-red-600">⏳</span>
          <p>
            <strong>Due Date:</strong> Please make payment by the specified date to avoid late fees or disconnection.
          </p>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">💳 How to Pay</h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Pay online via our <span className="font-medium">website</span>, <span className="font-medium">mobile app</span>, or through any <span className="font-medium">authorized payment center</span>. You can also use mobile banking or USSD. Keep your payment receipt for reference.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">📞 Need Help?</h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          For billing queries, incorrect readings, or technical issues, contact <strong>NPDCL Customer Support</strong>:
        </p>
        <ul className="mt-2 ml-4 list-disc text-gray-700 text-sm md:text-base space-y-1">
          <li>Call: <strong>1800-425-0025</strong></li>
          <li>Email: <strong>support@npdcl.in</strong></li>
          <li>Available: 24/7 for emergencies and service issues</li>
        </ul>
      </div>
    </section>
  );
};


