import { useEffect, useState } from "react";

const Hero = () => {
  const [animatedNames, setAnimatedNames] = useState("");
  const fullNameString = "Kingsly & Favour";

  // Simple elegant typing effect for the main heading
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedNames((prev) => prev + fullNameString.charAt(index));
      index++;
      if (index >= fullNameString.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-70px)] bg-[#FCFBF7] flex flex-col justify-center items-center px-4 py-16 relative select-none">
      {/* Elegant Line Accents (Replicating the geometric background cuts) */}
      <div className="absolute top-12 left-12 w-32 h-px bg-stone-200 rotate-[35deg] opacity-60 hidden md:block" />
      <div className="absolute top-20 left-8 w-48 h-px bg-stone-200 rotate-[35deg] opacity-60 hidden md:block" />
      <div className="absolute bottom-16 right-12 w-48 h-px bg-stone-200 rotate-[35deg] opacity-60 hidden md:block" />
      <div className="absolute bottom-24 right-20 w-32 h-px bg-stone-200 rotate-[35deg] opacity-60 hidden md:block" />

      {/* Main Animated Names Container */}
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[180px] md:min-h-[260px]">
        <h1 className="text-5xl md:text-8xl font-serif text-stone-800 tracking-wide transition-all duration-500 ease-out font-normal whitespace-pre-wrap leading-tight">
          {animatedNames}
          <span className="animate-pulse text-[#C5A880]">|</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="w-full max-w-xs flex items-center justify-center my-8 opacity-70">
        <div className="h-px bg-stone-300 w-full"></div>
        <div className="mx-3 text-[8px] transform rotate-45 border border-stone-400 p-[2px]"></div>
        <div className="h-[1px] bg-stone-300 w-full"></div>
      </div>

      {/* Welcome & Story Card */}
      <div className="max-w-xl text-center px-4 animate-fade-in-up">
        <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-4">
          Welcome
        </h2>
        <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed mb-6">
          Welcome to our wedding website! We are truly honored to have you here
          as we celebrate one of the most beautiful and memorable moments of our
          lives.
        </p>
        <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed">
          Your love, prayers, and support mean more to us than words can
          express. Thank you for being part of our journey and for celebrating
          this new chapter with us as we begin our forever together.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 flex flex-col items-center gap-2 animate-bounce opacity-60 cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
          Scroll Details
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
