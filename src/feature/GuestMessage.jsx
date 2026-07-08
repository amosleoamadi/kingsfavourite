import { Fade } from "react-awesome-reveal";

const GuestMessage = () => {
  return (
    <section
      id="special-message"
      className="bg-[#FCFBF7] py-24 px-6 md:px-12 text-center select-none overflow-hidden border-t border-stone-200/30"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <Fade triggerOnce duration={1000}>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              With Love
            </h2>
            <p className="text-2xl md:text-4xl font-serif text-stone-800 font-normal">
              A Special Message to Our Guests
            </p>
            <div className="w-12 h-px bg-[#C5A880] mt-6 opacity-50"></div>
          </div>
        </Fade>

        {/* Message Content Body */}
        <Fade triggerOnce delay={100} duration={1200}>
          <div className="space-y-6 text-stone-600 font-serif text-sm md:text-base leading-relaxed italic">
            <p className="font-sans font-medium not-italic text-stone-800 text-base md:text-lg tracking-wide">
              From the depths of our hearts, thank you for being part of our
              love story.
            </p>

            <p>
              Whether you have known us for many years or have become part of
              our lives more recently, your love, encouragement, prayers, and
              support have helped shape this beautiful journey.
            </p>

            <p>
              Your presence at our wedding is one of the greatest gifts we could
              receive. We are deeply grateful that you have chosen to celebrate
              this unforgettable day with us.
            </p>

            <p>
              As we begin this new chapter as husband and wife, we pray that the
              joy, love, and blessings shared on our wedding day will also
              overflow into your lives and homes.
            </p>

            <p className="not-italic text-stone-700 pt-2 font-medium">
              Thank you for laughing with us, praying for us, celebrating with
              us, and witnessing the beginning of our forever.
            </p>
          </div>
        </Fade>

        {/* Sign-off Frame */}
        <Fade triggerOnce delay={200} duration={1000}>
          <div className="mt-12 pt-6 border-t border-stone-100 w-full max-w-xs">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-2">
              With love and gratitude,
            </p>
            <p className="font-serif text-2xl md:text-3xl text-stone-800 tracking-wide font-normal">
              Kingsley & Favour
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default GuestMessage;
