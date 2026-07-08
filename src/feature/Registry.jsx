import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import ContributionModal from "../components/Contribution";
import dinning from "../assets/dinning.jpeg";
import fridge from "../assets/fridge.jpeg";
import oven from "../assets/oven.jpeg";
import speaker from "../assets/speaker.jpeg";
import tv from "../assets/tv.jpeg";
import washing from "../assets/washing.jpeg";
import money from "../assets/money.avif";
import bed from "../assets/bed.jpeg";

const Registry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registryItems = [
    {
      id: 1,
      title: "Monetary Gifts",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "Any amount",
      buttonText: "Contribute",
      image: money,
    },
    {
      id: 2,
      title: "Dinning set of four chairs",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦550,000",
      buttonText: "Contribute",
      image: dinning,
    },
    {
      id: 3,
      title: "Double door refrigerator",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦700,000",
      buttonText: "Contribute",
      image: fridge,
    },
    {
      id: 4,
      title: "Oven and gas burner",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦670,000",
      buttonText: "Contribute",
      image: oven,
    },
    {
      id: 5,
      title: "Home theater system",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦550,000",
      buttonText: "Contribute",
      image: speaker,
    },
    {
      id: 6,
      title: "11kg Washing Machine",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦320,000",
      buttonText: "Contribute",
      image: washing,
    },
    {
      id: 7,
      title: "65-inch Smart TV",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦850,000",
      buttonText: "Contribute",
      image: tv,
    },
    {
      id: 7,
      title: "6x6 Orthopedic mattress ",
      description:
        "Your generous contributions towards our new home and future together mean everything to us.",
      amountLabel: "₦500,000",
      buttonText: "Contribute",
      image: bed,
    },
  ];

  return (
    <section
      id="registry"
      className="bg-[#FAF6F0] py-24 px-6 md:px-12 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Presentation Wrapper */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              Gift Registry
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              Gifts & Registry
            </p>
            <div className="w-16 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        {/* Top Announcement Block Quote */}
        <Fade triggerOnce delay={100} duration={1000}>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed">
              Your love, prayers, and presence on our special day are the
              greatest gifts we could ask for. However, if you would like to
              bless us with a monetary gift as we begin this new chapter
              together, you may do so using the details below.
            </p>
          </div>
        </Fade>

        {/* Dynamic Responsive Multi-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {registryItems.map((item) => (
            <Fade key={item.id} triggerOnce direction="up" duration={1000}>
              <div className="bg-[#FCFBF7] border border-stone-200/50 shadow-xs rounded-xs overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md">
                {/* Card Image Area Frame Wrapper */}
                <div className="w-full aspect-4/3 bg-stone-100 relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-10 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-stone-900/5 opacity-100 transition-opacity"></div>
                </div>

                {/* Text Details & Buttons Lower Footer Layer */}
                <div className="p-6 md:p-8 flex flex-col grow justify-between">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl md:text-2xl text-stone-800 font-normal mb-3 truncate">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 font-sans text-xs md:text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                    <span className="text-stone-700 font-serif text-sm font-medium">
                      {item.amountLabel}
                    </span>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-5 py-2 border border-[#C5A880] text-[#C5A880] text-[10px] tracking-widest font-sans uppercase hover:bg-[#C5A880] hover:text-white transition-all duration-300 rounded-xs font-medium"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Global Component Portal Mount */}
        <ContributionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Registry;
