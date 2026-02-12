import { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any product within 30 days of purchase for a full refund."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days for domestic orders."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to selected countries worldwide. Additional charges may apply."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, we will send you a tracking number via email."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-w-[70vh] min-h-[60vh] mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
