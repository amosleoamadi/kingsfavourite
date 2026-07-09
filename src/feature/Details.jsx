import { Fade } from "react-awesome-reveal";

const Details = () => {
  // Formatted wedding event specifics for Google Calendar web link integration
  const calendarEventConfig = {
    title: "Wedding Ceremony & Celebration",
    dates: "20261226T140000/20261226T180000", // Dec 26, 2026 from 2:00 PM to 6:00 PM
    location: "St. George’s Military Church Hall, Point Road, Apapa",
    details:
      "We look forward to celebrating this joyous occasion with our family and friends. Your presence will make our day even more meaningful, and we can’t wait to celebrate our love with you.",
  };

  // Safe encoding constructor for the Google Calendar dynamic hyperlink
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    calendarEventConfig.title,
  )}&dates=${calendarEventConfig.dates}&details=${encodeURIComponent(
    calendarEventConfig.details,
  )}&location=${encodeURIComponent(calendarEventConfig.location)}&sf=true&output=xml`;

  // Encoded link matching the specified church location coordinates
  const googleMapsUrl = "https://maps.app.goo.gl/Rcf5THCd4onuE8Cc8";

  return (
    <section
      id="details"
      className="bg-[#FCFBF7] py-24 px-4 md:px-12 select-none relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header Accent */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              The Event
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              Wedding Details
            </p>
            <div className="w-16 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        {/* Structural Information Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center border-y border-stone-200/60 py-12 mb-12">
          <Fade triggerOnce cascade damping={0.2} duration={800}>
            {/* Date Segment */}
            <div className="space-y-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                Date
              </h3>
              <p className="font-serif text-lg text-stone-800">
                Saturday, December 26, 2026
              </p>
            </div>

            {/* Time Segment */}
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-stone-200/60 py-6 md:py-0">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                Time
              </h3>
              <p className="font-serif text-lg text-stone-800">
                2:00 PM Prompt
              </p>
            </div>

            {/* Venue Segment */}
            <div className="space-y-2 px-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
                Venue
              </h3>
              <p className="font-serif text-lg text-stone-800 leading-snug">
                St. George’s Military Church Hall, <br />
                <span className="text-sm text-stone-500 font-sans tracking-wide">
                  27, Point Road, Apapa
                </span>
              </p>
            </div>
          </Fade>
        </div>

        {/* Invitation Message Copy */}
        <Fade triggerOnce delay={200} duration={1000}>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed italic">
              "We look forward to celebrating this joyous occasion with our
              family and friends. Your presence will make our day even more
              meaningful, and we can’t wait to celebrate our love with you."
            </p>

            {/* Action Interaction Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* View on Map – now a direct link, no modal */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 border border-stone-800 text-stone-800 text-xs tracking-widest font-sans uppercase hover:bg-stone-900 hover:text-white transition-all duration-300 rounded-xs text-center"
              >
                View on Map
              </a>

              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A880] text-white text-xs tracking-widest font-sans uppercase hover:bg-[#b0936b] transition-all duration-300 text-center rounded-xs"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Details;
