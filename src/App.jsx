import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import LeadBarForm from "./components/LeadForm"
import Navbar from "./components/Navbar"
import WhyChooseUs from "./components/WhyChooseUs"
import Process from "./components/Process";
import TestimonialsSection from "./components/Testimonials"
import ContactSection from "./components/Contact"

import SocialMediaBar from "./components/SocialMediaBar"
function App() {
  

  return (
    <>
    <SocialMediaBar />
      <Navbar />
      <HeroSection />
       <div className="-mt-16 lg:-mt-24">
        <LeadBarForm />
      </div>
      <AboutSection />
      <WhyChooseUs />
      <Process />
      <TestimonialsSection />
      <ContactSection />
      
      
    </>
  )
}

export default App
