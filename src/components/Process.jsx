// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Dental Examination & X-Ray",
    description:
      "We perform a complete oral examination and digital X-ray to detect infection and assess root damage.",
    points: [
      "Clear diagnosis",
      "Transparent treatment plan",
      "Cost estimation explained",
    ],
  },
  {
    title: "Removing Infection & Cleaning",
    description:
      "Under local anesthesia, infected pulp is removed and root canals are thoroughly cleaned and disinfected.",
    points: [
      "Advanced rotary instruments",
      "High precision treatment",
      "Comfortable & painless procedure",
    ],
  },
  {
    title: "Sealing the Tooth",
    description:
      "The cleaned canals are filled with biocompatible material and sealed to prevent reinfection.",
    points: [
      "Strong internal support",
      "Long-term durability",
      "Prevents future infection",
    ],
  },
  {
    title: "Crown Placement",
    description:
      "A custom-made crown is placed to restore strength, chewing ability, and natural appearance.",
    points: [
      "Natural look",
      "Full chewing strength restored",
      "Long-lasting protection",
    ],
  },
];

export default function RootCanalProcess() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="process"
      aria-labelledby="process-heading"
      className="relative py-24 bg-gradient-to-b from-[#CDE8F4] via-[#A2D8E7] to-[#73C9D7] scroll-mt-[50px]"
    >
      {/* SEO Hidden H1 */}
      <h1 className="sr-only">
        Painless Root Canal Treatment Process at Scaler Hospital
      </h1>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-bold text-[#0F4C5C]"
          >
            Our Root Canal Treatment Process
          </h2>
          <p className="mt-4 text-[#134E5E] max-w-2xl mx-auto text-lg">
            A safe, painless and advanced step-by-step procedure designed to
            save your natural tooth and eliminate infection completely.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-[#36BAC1]/30 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  {/* Content Card */}
                  <div className="md:w-1/2 p-4 sm:p-6">
                    <div
                      className="
    bg-white/90 
    backdrop-blur-lg 
    rounded-2xl sm:rounded-3xl 
    shadow-xl 
    p-5 sm:p-6 md:p-8 
    hover:scale-[1.02] 
    transition duration-300
  "
                    >
                      <h3
                        className="
      text-lg sm:text-xl md:text-2xl 
      font-semibold 
      text-[#3c6d71] 
      mb-3 sm:mb-4
    "
                      >
                        Step {index + 1}: {step.title}
                      </h3>

                      <p
                        className="
      text-sm sm:text-base md:text-lg 
      text-[#134E5E] 
      mb-4 sm:mb-6 
      leading-relaxed
    "
                      >
                        {step.description}
                      </p>

                      <ul className="space-y-2 sm:space-y-3">
                        {step.points.map((point, i) => (
                          <li
                            key={i}
                            className="
            flex items-start gap-2 sm:gap-3 
            text-xs sm:text-sm md:text-base 
            text-[#0F4C5C]
          "
                          >
                            <CheckCircle
                              size={18}
                              className="text-[#36BAC1] mt-[2px]"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 bg-[#36BAC1] text-white font-bold rounded-full shadow-lg z-10 border-4 border-white">
                    {index + 1}
                  </div>

                  <div className="md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mt-24"
        >
          <a
            href="#contact"
            className="inline-block bg-[#3c6d71] hover:bg-[#2fa9b0] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300"
            aria-label="Book Root Canal Appointment at Scaler Hospital"
          >
            Book Your Appointment Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
