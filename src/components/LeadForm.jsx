import { useState } from "react";

export default function LeadBarForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      aria-label="Quick consultation form"
      className="relative z-20 px-6"
    >
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6 lg:p-8">
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row items-center gap-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            className="w-full lg:flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="Your City"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full lg:flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full lg:w-auto bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
