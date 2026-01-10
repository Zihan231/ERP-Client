import React from "react";

const faqs = [
  {
    question: "How do I set up a new company in the ERP system?",
    answer: "You can set up a new company by navigating to the Administration module, selecting 'Company Setup,' and following the wizard to input your company details, fiscal year, and currency settings."
  },
  {
    question: "Can I manage inventory across multiple locations?",
    answer: "Yes, our ERP solution supports multi-warehouse management. You can track stock levels, transfer inventory between locations, and set specific reorder points for each warehouse."
  },
  {
    question: "How do I generate financial reports?",
    answer: "Financial reports can be generated in the Finance module. We offer standard templates for Balance Sheets, P&L, and Cash Flow, or you can use the custom report builder for specific needs."
  },
  {
    question: "Can I control user access and permissions?",
    answer: "Absolutely. The system uses a role-based access control (RBAC) system. Admins can define roles (e.g., Accountant, HR Manager) and assign granular permissions to view or edit specific data."
  },
  {
    question: "Is the ERP system secure for sensitive company data?",
    answer: "Security is our top priority. We use end-to-end encryption for data transmission, regular automated backups, and strict compliance with industry standards to ensure your data remains safe."
  }
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Heading --- */}
        {/* Matches the "Welcome to ERP SOLUTION" style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about the platform.
          </p>
        </div>

        {/* --- Accordion List --- */}
        <div className="join join-vertical w-full bg-white">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-arrow join-item border-b border-gray-200 rounded-none bg-white"
            >
              <input type="radio" name="my-accordion-4" defaultChecked={index === 0} /> 
              
              {/* Question */}
              <div className="collapse-title text-lg font-medium text-[#0f172a] py-6 px-4 hover:text-blue-600 transition-colors">
                {faq.question}
              </div>
              
              {/* Answer */}
              <div className="collapse-content text-gray-500 px-4">
                <p className="pb-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;