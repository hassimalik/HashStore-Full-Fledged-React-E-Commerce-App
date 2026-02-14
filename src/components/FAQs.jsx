import { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any product within 30 days of purchase for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days for domestic orders.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to selected countries worldwide. Additional charges may apply.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100 px-4">
      <div className="w-full max-w-3xl py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl font-bold text-cyan-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
