import { Fade, Slide } from "react-awesome-reveal";
import storyimg1 from "../assets/storyimg1.jpeg";
import storyimg2 from "../assets/storyimg2.jpeg";
import storyimg3 from "../assets/storyimg3.jpeg";

const OurStory = () => {
  const stories = [
    {
      title: "Our Love Story",
      subtitle: "Sometimes, love finds us in the most unexpected ways.",
      content: [
        "Our journey began through a mutual friend. On the 23, October 2024, my husband-to-be kindly offered her a ride, and during their conversation, she asked if he was married. When he replied that he wasn’t, she smiled and said, “I know someone you would like—and someone you could marry.”",
        "She shared my contact information with him, and from that simple introduction, we began talking. Our conversations grew into friendship, friendship blossomed into love, and before we knew it, we had found in each other the person we wanted to spend forever with.",
        "Today, we are grateful for that chance encounter and excited to begin this new chapter as husband and wife.",
      ],
      image: storyimg1, // 👈 Attached import asset
      altText: "Our Love Story",
    },
    {
      title: "How We Met",
      subtitle: "A beautiful beginning",
      content: [
        "We met through a mutual friend who believed we would be perfect for each other. After introducing us by sharing my contact with him, we started talking, getting to know one another, and building a beautiful friendship. What began as a simple introduction soon became a love story we will cherish forever.",
      ],
      image: storyimg2, // 👈 Attached import asset
      altText: "How We Met",
    },
    {
      title: "The Proposal",
      subtitle: "May 27, 2026",
      content: [
        "On May 27, 2026, he asked me the most beautiful question of my life—to spend the rest of my life with him. He asked that we build not only a marriage, but a loving home and a beautiful family together.",
        "With a heart full of love and certainty, I said “Yes.” It was the beginning of our forever, and a moment we will treasure for the rest of our lives.",
      ],
      image: storyimg3, // 👈 Attached import asset
      altText: "The Proposal",
    },
  ];

  return (
    <section
      id="our-story"
      className="bg-[#FAF6F0] py-24 px-4 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        <Fade triggerOnce direction="up" duration={1000}>
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-3">
              Our Journey
            </h2>
            <p className="text-3xl md:text-5xl font-serif text-stone-800 font-normal">
              How It All Began
            </p>
            <div className="w-24 h-px bg-[#C5A880] mt-6 opacity-60"></div>
          </div>
        </Fade>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200/60 transform md:-translate-x-1/2"></div>

          <div className="space-y-20 md:space-y-32">
            {stories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between relative w-full pl-10 md:pl-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#FAF6F0] border-2 border-[#C5A880] rounded-full transform -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 z-10"></div>

                  {/* Text Container with Slide Animation */}
                  <div className="w-full md:w-[45%] space-y-4">
                    <Slide
                      triggerOnce
                      direction={isEven ? "left" : "right"}
                      duration={1000}
                    >
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif text-stone-800 font-normal mb-1">
                          {story.title}
                        </h3>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium italic mb-4 block">
                          {story.subtitle}
                        </h4>
                        <div className="space-y-3 text-stone-600 font-serif text-sm md:text-base leading-relaxed">
                          {story.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </Slide>
                  </div>

                  {/* Image Container with Rendered Image Tag */}
                  <div className="w-full md:w-[45%] mt-6 md:mt-0">
                    <Slide
                      triggerOnce
                      direction={isEven ? "right" : "left"}
                      duration={1000}
                    >
                      <div className="aspect-2/2 w-full bg-stone-100 border border-stone-200/60 flex items-center justify-center relative overflow-hidden group shadow-sm rounded-xs transition-transform duration-500 hover:scale-[1.01]">
                        <img
                          src={story.image}
                          alt={story.altText}
                          className="w-full h-full object-cover grayscale-10 group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </Slide>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
