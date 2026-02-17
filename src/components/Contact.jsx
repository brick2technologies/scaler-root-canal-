// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
// import FloatingFooterBar from "./Footer";



export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 pb-10 bg-gradient-to-b from-white to-[#EAF7F9] px-6 sm:scroll-mt-[20px] "
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            id="contact-heading"
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Book Your Painless Root Canal Today
          </h2>

          <p className="text-gray-600 mb-8">
            Experiencing tooth pain? Don’t wait. Get expert root canal treatment
            at Scaler Hospital with advanced technology and compassionate care.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#3c6d71]/10 p-3 rounded-full">
                <Phone className="text-[#3c6d71]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+91 798 950 5377</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#3c6d71]/10 p-3 rounded-full">
                <Mail className="text-[#3c6d71]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@scalerhospital.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#3c6d71]/10 p-3 rounded-full">
                <MapPin className="text-[#3c6d71]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">
                  Scaler Dental Studio, SR Nagar , Hyderabad
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Request Appointment
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6d71]"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6d71]"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6d71]"
            />

            <textarea
              rows={4}
              placeholder="Describe Your Dental Problem"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6d71]"
            />

            <button
              type="submit"
              className="w-full bg-[#3c6d71] hover:bg-[#2DAAB0] text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              Book Appointment
            </button>
          </div>
        </motion.form>
      </div>

      {/* FLOATING FOOTER INSIDE CONTACT */}
      {/* <div className="mt-24">
        <FloatingFooterBar />
      </div> */}
    </section>
  );
}

