
import React from "react";

export default function Questions() {
  const Data = [
    {
      question: "What services does Tiny Steps A Day offer?",
      answer:
        "We offer a range of services including one-on-one mentorship, group coaching, career guidance, mental health support, and digital courses focused on personal growth and transformation.",
    },
    {
      question: "How do I schedule a mentorship session?",
      answer:
        "You can schedule a mentorship session by visiting our Programs page, selecting the type of mentorship you're interested in, and following the booking process. Alternatively, you can contact us directly through this form.",
    },
    {
      question: "What is the cost of mentorship programs?",
      answer:
      "Our mentorship programs vary in cost depending on the type, duration and intensity. We offer starter packages, deep dive options, and full transformation journeys. Details about pricing can be found on our Programs page.",
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer:
    "Yes, we offer a satisfaction guarantee. If you are not completely satisfied with your first session, we'll offer a full refund . For ongoing programs, we handle refund requests on a case-by-case basis. ",
    },
    {
      question: "How long does a mentoship program typically last?",
      answer:
        "The duration varies based on your goals and the programs you choose. Our programs range from single sessions to 3 months, 6 months and 12 months journeys. We 'll help you determine the best fit during your initial consultation",
    },
 {
      question: "Can I change mentors if I don't feel it's the right fit?",
      answer:
        "Absolutely, we understand the importance of a good match between mentor and mentee. If you feel your current mentor isn't the right it , we'll help you transition to someone else at no addition cost."
        
    },

  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-500 text-center text-m mb-8">
        Find quick answers to common questions
      </p>

      {Data.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md p-6 mb-4 max-w-xl mx-auto">
          <h2 className="text-black font-medium text-sm mb-2">{item.question}</h2>
          <p className="text-gray-500 text-sm">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};
