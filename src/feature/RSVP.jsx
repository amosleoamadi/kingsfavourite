import { Fade } from "react-awesome-reveal";

const RSVP = () => {
  const coordinators = [
    {
      name: "Israel",
      phone: "+2348118556675",
      displayPhone: "+234 811 855 6675",
    },
    {
      name: "Marvelous",
      phone: "+2347059459605",
      displayPhone: "0705 945 9605",
    },
    {
      name: "Kofo",
      phone: "+2347089732180",
      displayPhone: "+234 708 973 2180",
    },
  ];

  return (
    <section
      id="rsvp"
      className="bg-[#FCFBF7] py-24 px-6 md:px-12 select-none overflow-hidden border-t border-stone-200/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <Fade triggerOnce duration={1000}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              Attendance
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              Kindly RSVP
            </p>
            <div className="w-16 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        {/* Intro Note */}
        <Fade triggerOnce delay={100} duration={1000}>
          <p className="text-stone-600 font-serif text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-16">
            Your presence means the world to us! Kindly let us know if you will
            be celebrating with us by contacting any of our RSVP coordinators
            below.
          </p>
        </Fade>

        {/* Contact Numbers Matrix Flex/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {coordinators.map((coord, index) => (
            <Fade
              key={index}
              triggerOnce
              direction="up"
              duration={1000}
              delay={index * 100}
            >
              <div className="border border-stone-200/50 bg-[#FAF6F0]/40 p-6 rounded-xs flex flex-col items-center group transition-all duration-300 hover:shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-2">
                  Coordinator
                </span>
                <h3 className="font-serif text-xl text-stone-800 font-normal mb-3">
                  {coord.name}
                </h3>
                <a
                  href={`tel:${coord.phone}`}
                  className="font-mono text-sm text-stone-600 hover:text-[#C5A880] tracking-wide transition-colors duration-300"
                >
                  {coord.displayPhone}
                </a>
              </div>
            </Fade>
          ))}
        </div>

        {/* Deadline Notice Footer Callout */}
        <Fade triggerOnce delay={200} duration={1000}>
          <p className="text-xs uppercase tracking-[0.15em] text-stone-400 font-sans max-w-md mx-auto leading-relaxed">
            We kindly request that you RSVP at your earliest convenience to help
            us plan for your comfort and ensure you have a wonderful experience.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default RSVP;
