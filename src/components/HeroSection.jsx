import { Phone } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeroVideo from "../assets/hero-video-1.webm";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        relative
        min-h-screen
        pt-[140px]
        flex flex-col items-center justify-start
        gap-6 sm:gap-8 lg:gap-10
        overflow-hidden text-center px-6
        bg-[linear-gradient(to_bottom,#36bac1,#73c9d7,#a2d8e7,#cde8f4,#f2f8fc)]
        pb-20 lg:pb-28
      "
    >
      {/* BACKGROUND ROOT CANAL TEXT */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          absolute
          top-[32%] sm:top-[34%] md:top-[30%] lg:top-[25%] xl:top-[22%]
          left-1/2 -translate-x-1/2
          text-[16vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw]
          font-macondo
          text-[#3c6d71]
          leading-none
          select-none
          px-2
          pointer-events-none
          z-0
          whitespace-nowrap
        "
      >
        ROOT CANAL <br /> TREATMENT
      </motion.h1>

      {/* VIDEO — Premium Bottom Rise Animation */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
        className="relative z-20"
      >
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="
            w-[150px]
            sm:w-[180px]
            md:w-[220px]
            lg:w-[300px]
            mx-auto
            pointer-events-none
          "
        />
      </motion.div>

      {/* TEXT + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-20 max-w-xl"
      >
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4">
          Painless Root Canal Treatment by Expert Dentists. Save your natural
          tooth with advanced technology.
        </p>
        <a href="#">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            inline-flex items-center gap-2
            bg-[#3c6d71]
            hover:bg-[#325a5d]
            text-white font-semibold
            px-6 sm:px-8 py-2 sm:py-4
            rounded-full text-base sm:text-lg
            shadow-lg transition duration-300
          "
          >
            <Phone size={20} />
            Book Appointment
          </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
}
