import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I bring a plus one?",
      answer:
        "To help us plan appropriately, attendance is strictly by invitation. Kindly refer to your invitation to confirm whether a plus one has been included.",
    },
    {
      question: "What time should I arrive?",
      answer:
        "The ceremony begins promptly at 2:00 PM. We kindly encourage all guests to arrive at least 30 minutes early to be comfortably seated before the ceremony starts.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "Yes. We kindly request that all guests wear the official Asoebi fabric to help create a beautiful and coordinated celebration.",
    },
    {
      question: "Where can I purchase the Asoebi?",
      answer:
        "Please contact us via WhatsApp on 0807 387 0212 for all Asoebi enquiries and purchases.",
    },
    {
      question: "Will food and refreshments be served?",
      answer:
        "Absolutely! We look forward to treating our guests to a wonderful reception filled with delicious food, drinks, music, and celebration.",
    },
    {
      question: "Can I take photos and videos?",
      answer:
        "Yes! We encourage you to capture beautiful memories. We only ask that you are mindful during the ceremony and allow our official photographers and videographers to capture the key moments.",
    },
    {
      question: "Who do I contact if I have questions?",
      answer:
        "Please reach out to any of our RSVP coordinators. They will be happy to assist you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#FAF6F0] py-24 px-6 md:px-12 select-none overflow-hidden border-t border-stone-200/20"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              Questions
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              Frequently Asked Questions
            </p>
            <div className="w-16 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        {/* Accordion List Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Fade
                key={index}
                triggerOnce
                direction="up"
                duration={800}
                delay={index * 50}
              >
                <div className="bg-[#FCFBF7] border border-stone-200/40 rounded-xs overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-[#FAF6F0]/30 transition-colors focus:outline-none"
                  >
                    <span className="font-serif text-base md:text-lg text-stone-800 font-normal">
                      {faq.question}
                    </span>
                    <span
                      className={`text-stone-400 font-sans text-lg transition-transform duration-300 transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      ＋
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 border-t border-stone-100" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 md:p-6 text-stone-600 font-sans text-xs md:text-sm leading-relaxed bg-[#FAF6F0]/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
