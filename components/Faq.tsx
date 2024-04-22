import { useFaqs } from "@/hooks/useFaqs";
import React from "react";

const Faq = () => {
  const faqs = useFaqs();

  return (
    <div className="flex flex-col  mt-4 py-4">
      <div className="text-center">
        <h1 className=" justify-center items-center text-2xl font-medium mb-4">
          FAQ
        </h1>
      </div>
      <div className="items-start">
        {faqs?.map((faq) => (
          <div key={faq._id} className="mb-4">
            <h2 className="text-2xl font-medium mb-2">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
