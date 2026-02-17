import { CheckCircle } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutImage from "../assets/about-image.jpg";

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading" 
      className="bg-gradient-to-b from-white to-[#f4f8fb] py-24 px-6 scroll-mt-[60px]"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* HEADING */}
        <motion.h2
          id="about-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] mb-6"
          variants={fadeUp}
        >
          About <span className="text-[#3c6d71]">Scaler Dental Hospital</span>
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#3c6d71] mx-auto mb-10 rounded-full"
          variants={fadeUp}
        />

        {/* IMAGE */}
        <motion.div
          className="mb-12 flex justify-center"
          variants={fadeUp}
        >
          <img
            src={AboutImage}
            alt="Modern dental clinic at Scaler Dental Hospital"
            className="rounded-3xl shadow-2xl w-full max-w-4xl object-cover "
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeUp}
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At{" "}
            <span className="font-semibold text-[#3c6d71]">
              Scaler Dental Hospital
            </span>
            , we specialize in advanced and painless Root Canal Treatments.
            Our mission is to deliver high-quality dental care using modern
            technology, expert techniques, and a patient-first approach.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            From consultation to recovery, we ensure a stress-free and
            comfortable experience. Our clinic follows strict sterilization
            protocols and uses digital diagnostic tools to provide precise
            and effective treatment.
          </p>

          {/* FEATURES */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 text-left mb-12"
            variants={staggerContainer}
          >
            {[
              "Expert Root Canal Specialists",
              "Advanced Digital X-Ray & Equipment",
              "Safe & Sterile Environment",
              "Affordable & Transparent Pricing",
              "Comfort-Focused Treatment",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                variants={fadeUp}
              >
                <CheckCircle
                  className="text-[#3c6d71] mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="inline-block bg-[#3c6d71] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#2c5154] hover:scale-105 transition-all duration-300"
            variants={fadeUp}
          >
            Book Your Consultation
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
