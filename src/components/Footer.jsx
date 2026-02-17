import { Facebook, Instagram, Youtube, Phone } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ScalerIcon from "../assets/Scaler-icon.png";
import ScalerName from "../assets/name.png";


export default function FloatingFooterBar() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        
        bottom-6
        left-1/2
        -translate-x-1/2
        w-[95%]
        max-w-7xl
        z-50
        bg-gradient-to-b from-white to-[#EAF7F9]
        backdrop-blur-2xl
        shadow-2xl
        rounded-2xl
        border border-white/40
        px-6
        py-6
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT — LOGO */}
        <a href="#" className="flex items-center gap-2">
          <img className="h-10 w-auto" src={ScalerIcon} alt="Scaler Logo" />
          <img className="h-8 w-auto" src={ScalerName} alt="Scaler Name" />
        </a>

        {/* CENTER — SOCIAL */}
        <div className="flex gap-6 text-[#3c6d71]">
          <a href="#" className="hover:text-[#2DAAB0] transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-[#2DAAB0] transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-[#2DAAB0] transition">
            <Youtube size={20} />
          </a>
        </div>

        {/* RIGHT — PHONE */}
        <div className="flex items-center gap-2 font-semibold text-[#3c6d71]">
          <Phone size={18} />
          <a
            href="tel:+917989505377"
            className="hover:text-[#2DAAB0] transition"
          >
            +91 798 950 5377
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] bg-[#3c6d71]/20"></div>

      {/* COPYRIGHT INSIDE SAME BAR */}
      <div className="text-center text-sm text-[#3c6d71]/70">
        © {new Date().getFullYear()} Scaler Hospital. All Rights Reserved.
        <span className="mx-2">|</span>
        <a
          href="https://web.brick2tech.com"
          className="text-[#3c6d71] font-medium hover:text-[#2DAAB0]"
        >
          Designed by Brick2Tech
        </a>
      </div>
    </motion.footer>
  );
}
