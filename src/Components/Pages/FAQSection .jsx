import React, { useState } from "react";
import Navbar from "../Navbar";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../Footer";

const FAQSection = () => {
  
    const faqs = [
        {
          question: "What is a premium card, and how does it work?",
          answer:
            "A premium card is your gateway to an enhanced viewing experience. It offers access to exclusive movies, priority support, discounts on rentals, and much more. Simply redeem the card in your account to start enjoying premium benefits.",
        },
        {
          question: "What are the benefits of having a premium card?",
          answer:
            "With a premium card, you get access to exclusive movie collections, early access to new releases, discounted rental prices, and ad-free streaming for uninterrupted entertainment.",
        },
        {
          question: "Can I share my premium card benefits with others?",
          answer:
            "Premium card benefits are linked to your account and are non-transferable. However, you can purchase a separate premium card as a gift for someone else to enjoy.",
        },
        {
          question: "Does the premium card include free movie rentals?",
          answer:
            "Yes, the premium card often includes a set number of free movie rentals or credits, depending on the card's terms. Check your premium card details for specifics.",
        },
        {
          question: "How long is the premium card valid for?",
          answer:
            "The premium card is valid for one year from the date of activation. Redeem it early to make the most of the premium perks during this period.",
        },
        {
          question: "Are there any exclusive perks for premium card users?",
          answer:
            "Absolutely! Premium card users enjoy exclusive perks such as curated movie recommendations, VIP customer support, and special discounts on new content releases.",
        },
      ];
      
  // State to manage open/closed FAQ answers
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);  
    } else {
      setOpenIndex(index);  
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className=" text-3xl font-semibold mb-6 text-center">
        FAQ
      </h2>

      <div className="mt-10 px-4 sm:px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">
        <Typewriter
          words={[" Frequently Asked Questions"]}
          loop={1}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        ></Typewriter>
         
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl ${
                    openIndex === index ? "rotate-180" : ""
                  } transition-transform`}
                >
                  ▼
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FAQSection;
