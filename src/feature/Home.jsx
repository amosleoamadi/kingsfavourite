import Details from "./Details";
import FAQ from "./FAQ";
import GuestDetails from "./GuestDetails";
import GuestMessage from "./GuestMessage";
import Hero from "./Hero";
import OurStory from "./OurStory";
import Registry from "./Registry";
import RSVP from "./RSVP";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#FCFBF7] flex flex-col ">
      <Hero />
      <OurStory />
      <Details />
      <GuestDetails />
      <Registry />
      <GuestMessage />
      <FAQ />
      <RSVP />
    </div>
  );
};

export default Home;
