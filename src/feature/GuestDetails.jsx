import { Fade } from "react-awesome-reveal";

const GuestDetails = () => {
  const asoebiPhone = "08073870212";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to make inquiries or purchase the Asoebi fabric for Favour and Kingsley's wedding.",
  );
  const whatsappLink = `https://wa.me/234${asoebiPhone.slice(1)}?text=${whatsappMessage}`;

  return (
    <section
      id="guest-info"
      className="bg-[#FCFBF7] py-24 px-6 md:px-12 select-none overflow-hidden border-t border-stone-200/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              Celebration Details
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              Guest Guide & Bridal Party
            </p>
            <div className="w-16 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        {/* Two Column Layout: Dress Code/Asoebi Left, Bridal Party Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dress Code & Asoebi Details */}
          <div className="space-y-12">
            <Fade triggerOnce direction="up" duration={1000}>
              <div className="bg-[#FAF6F0]/50 border border-stone-200/40 p-8 rounded-xs">
                <h3 className="font-serif text-2xl text-stone-800 font-normal mb-2">
                  Dress Code
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-4">
                  Asoebi Fabrics Only
                </span>
                <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed">
                  We kindly ask all guests to wear the official Asoebi fabric as
                  we come together to create a beautiful and coordinated
                  celebration of love.
                </p>
              </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={1000} delay={150}>
              <div className="border border-stone-200/60 p-8 rounded-xs bg-[#FCFBF7]">
                <h3 className="font-serif text-2xl text-stone-800 font-normal mb-4">
                  Asoebi Purchase
                </h3>
                <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed mb-6">
                  We would be delighted to have our guests celebrate with us in
                  our chosen Asoebi fabric. To purchase yours easily, please
                  reach out via WhatsApp.
                </p>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-stone-400 font-sans text-[11px] uppercase tracking-wider block mb-1">
                      WhatsApp Contact
                    </span>
                    <span className="font-mono text-base tracking-wider text-stone-800 font-medium">
                      0807 387 0212
                    </span>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-center text-center px-5 py-2.5 bg-stone-900 text-white font-sans text-[10px] uppercase tracking-widest hover:bg-[#C5A880] transition-colors duration-300 rounded-xs font-medium"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Column: Our Bridal Party */}
          <Fade triggerOnce direction="up" duration={1000} delay={300}>
            <div className="bg-[#FCFBF7] border border-stone-200/50 shadow-xs p-8 md:p-10 rounded-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-stone-800 font-normal mb-2">
                  Our Bridal Party
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-6">
                  With Deepest Gratitude
                </span>

                <div className="space-y-4 text-stone-600 font-serif text-sm md:text-base leading-relaxed">
                  <p>
                    We are incredibly blessed to be surrounded by family and
                    friends who have loved, supported, encouraged, and prayed
                    for us throughout our journey.
                  </p>
                  <p>
                    To our bridesmaids, groomsmen, chief bridesmaid, best man,
                    family members, and everyone standing beside us on our
                    special day—thank you for your unwavering love, friendship,
                    and commitment.
                  </p>
                  <p>
                    Your presence and support have made this journey even more
                    meaningful, and we are honored to have you share this
                    unforgettable moment with us.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <p className="text-stone-400 font-serif text-xs italic">
                  Thank you for standing by us.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default GuestDetails;
