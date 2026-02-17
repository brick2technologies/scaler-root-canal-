import { Instagram, Facebook, Youtube } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScalerIcon from "../assets/Scaler-icon.png";

export default function SocialMediaBar() {
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      // Detect bottom of page
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (windowHeight + currentScrollY >= fullHeight - 100) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : 50,
      }}
      transition={{ duration: 0.4 }}
      className={`
        fixed
        right-2 md:right-4
        ${atBottom ? "bottom-28 top-auto translate-y-0" : "top-1/2 -translate-y-1/2"}
        z-50
        flex
        flex-col
        items-center
        gap-2
      `}
    >
      {/* COMPANY LOGO */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="
          w-9 h-9 md:w-14 md:h-14
          flex items-center justify-center
          rounded-full
          bg-[#F2FCF8]
          shadow-xl
        "
      >
        <img
          src={ScalerIcon}
          alt="Scaler Dental Studio Logo"
          className="w-7 h-7 md:w-8 md:h-8 object-contain"
        />
      </motion.div>

      {/* Divider */}
      <div className="w-8 h-[2px] bg-[#3c6d71]/40 rounded-full"></div>

      <SocialIcon href="https://instagram.com/">
        <Instagram size={18} />
      </SocialIcon>

      <SocialIcon href="https://facebook.com/">
        <Facebook size={18} />
      </SocialIcon>

      <SocialIcon href="https://youtube.com/">
        <Youtube size={18} />
      </SocialIcon>
    </motion.div>
  );
}

/* Reusable Icon */
function SocialIcon({ children, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="
        w-8 h-8 md:w-12 md:h-12
        flex items-center justify-center
        rounded-full
        bg-white
        shadow-lg
        text-[#3c6d71]
        hover:bg-[#3c6d71]
        hover:text-white
        transition-all duration-300
      "
    >
      {children}
    </motion.a>
  );
}
