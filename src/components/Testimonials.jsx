// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Vijayawada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I was extremely scared of root canal treatment, but the doctors at Scaler Hospital made it completely painless. The procedure was smooth and comfortable.",
    rating: 5,
  },
  {
    name: "Sowmya Reddy",
    location: "Machilipatnam",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Other clinics suggested tooth removal, but Scaler Hospital saved my natural tooth with advanced root canal treatment.",
    rating: 5,
  },
  {
    name: "Praveen Rao",
    location: "Gudivada",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Very hygienic environment and friendly staff. Recovery was quick and painless.",
    rating: 5,
  },
  {
    name: "Anitha Sharma",
    location: "Avanigadda",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Single sitting root canal with modern equipment. Fast and professional service.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  // Auto Slide Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      aria-labelledby="testimonial-heading"
      className="py-20 bg-gradient-to-b from-[#EAF7F9] to-white px-6 scroll-mt-[80px]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="testimonial-heading"
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Patients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Real reviews from happy patients who received painless root canal
          treatment at Scaler Hospital.
        </p>

        <div className="relative h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full border border-gray-100"
            >
              {/* Google Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                  alt="Google"
                  className="h-6"
                />
                <span className="text-sm text-gray-500">
                  Verified Google Review
                </span>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star
                      size={20}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed">
                "{testimonials[index].review}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === i
                  ? "bg-[#36BAC1] w-6"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
