import React from "react";
import AboutUs from "../AboutUs";
import Testimonials from "../testimones";
import Footer from "../footer";
import Hero from "../hero";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import particle from "../../particle";
import { p } from "framer-motion/client";

/// Seema rekha

// Seema rekha ka end

const Home = () => {
  const particleInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const load = useCallback(async () => {
    console.log("loading");
  });
  return (
    <>
      <Particles 
        id="tsparticles"
        init={particleInit}
        loaded={load}
        options={particle}/>

      <div>
        <Hero />
        <AboutUs />

        <Testimonials />

        <Footer />
      </div>
    </>
  );
};

export default Home;
