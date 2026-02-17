import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScalerIcon from "../assets/Scaler-icon.png";

import { CIcon } from "@coreui/icons-react";

export default function SocialMediaBar() {
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

      // Show scroll-to-top after 300px
      setShowScrollTop(currentScrollY > 300);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        ${atBottom ? "bottom-28 top-auto" : "top-1/2 -translate-y-1/2"}
        z-50
        flex
        flex-col
        items-center
        gap-2
      `}
    >
      {/* COMPANY LOGO */}
      <CircleIcon>
        <a href="#">
          <img
            src={ScalerIcon}
            alt="Scaler Dental Studio Logo"
            className="w-7 h-7 md:w-8 md:h-8 object-contain"
          />
        </a>
      </CircleIcon>

      <Divider />

      {/* Instagram */}
      <SocialIcon href="https://www.instagram.com/scalerdentalstudio/">
        <Instagram size={18} />
      </SocialIcon>

      {/* Facebook */}
      <SocialIcon href="https://www.facebook.com/scalerdentalstudio/">
        <Facebook size={18} />
      </SocialIcon>

      {/* YouTube */}
      <SocialIcon href="https://www.youtube.com/@scalerdentalstudio">
        <Youtube size={18} />
      </SocialIcon>

      <Divider />

      {/* WhatsApp */}
      <SocialIcon href="https://wa.me/917989505377">
        <div className="group w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#F2FCF8] hover:bg-[#3c6d71] flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-4 h-4 md:w-6 md:h-6 fill-[#3c6d71] group-hover:fill-white transition-all duration-300"
          >
            <path d="M16 3C9.383 3 4 8.383 4 15c0 2.65.864 5.1 2.326 7.1L4 29l7.113-2.26A11.944 11.944 0 0016 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.94 0-3.77-.53-5.35-1.46l-.38-.22-4.23 1.35 1.38-4.12-.25-.42A9.953 9.953 0 016 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.22-7.56c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.95 1.15-.17.2-.35.22-.65.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.23 5.12 4.53.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </div>
      </SocialIcon>

      {/* Scroll To Top */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="
            w-8 h-8 md:w-12 md:h-12
            flex items-center justify-center
            rounded-full
            bg-[#3c6d71]
            shadow-lg
            text-white
            hover:bg-[#2da6ac]
            transition-all duration-300
          "
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </motion.div>
  );
}

/* Reusable Circle Wrapper */
function CircleIcon({ children }) {
  return (
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
      {children}
    </motion.div>
  );
}

/* Divider */
function Divider() {
  return <div className="w-8 h-[2px] bg-[#3c6d71]/40 rounded-full"></div>;
}

/* Reusable Social Icon */
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
