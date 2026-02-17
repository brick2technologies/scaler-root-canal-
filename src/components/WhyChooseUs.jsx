import {
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Smile,
  BadgeCheck,
  Clock,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Stethoscope size={24} />,
      title: "Expert Endodontists",
      desc: "Highly experienced specialists ensuring precise treatment.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Advanced Technology",
      desc: "Digital X-rays and rotary systems for accurate care.",
    },
    {
      icon: <Smile size={24} />,
      title: "Painless Procedure",
      desc: "Modern anesthesia techniques for total comfort.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Safe & Sterile",
      desc: "Strict sterilization protocols for safety.",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "1000+ Happy Patients",
      desc: "Trusted care with outstanding results.",
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Appointments",
      desc: "Same-day consultations available.",
    },
  ];

  /* ---------- Animation Variants ---------- */

  const sectionVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
    id="why-us"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#F4F8F8] py-12 px-6 lg:px-20 scroll-mt-[120px]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT SIDE ================= */}
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-left"
        >
          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -60 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            className="text-3xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6"
          >
            Why Choose <span className="text-[#3c6d71]">Scaler Hospital?</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
              },
            }}
            className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg"
          >
            Experience precision dentistry with comfort, safety, and excellence.
            We combine advanced technology with compassionate care to deliver
            long-lasting results and a stress-free experience.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
              },
            }}
            className="flex justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#3c6d71] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#2c5154] transition-all duration-300"
            >
              Book Your Consultation
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          variants={rightContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#e3f4f4]"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#3c6d71] mb-4"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
