import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    }, 1000);
  };

  return (
    <section className="relative flex items-center justify-center c-space section-spacing min-h-screen" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-stretch justify-center gap-0 border border-white/10 rounded-2xl overflow-hidden shadow-lg bg-primary">
        {/* Image Side */}
        <div className="md:w-1/2 w-full h-full flex pt-25">
          <img
            src="assets/socials/contact.png"
            alt="Pranav Katakam"
            className="max-w-full max-h-full object-contain"
          />
        </div>


        {/* Contact Card Side */}
        <div className="flex flex-col justify-center p-8 md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Collaborate</h2>
          <p className="text-neutral-400 mb-6">
            Whether you have an idea in AI, ML, GenAI, or need guidance on intelligent systems, feel free to reach out! I’m open for jobs, internships, or freelance projects. Let's build something amazing together.
          </p>

          <form
            action="https://formsubmit.co/katakampranavshankar@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://your-portfolio-domain.com/thank-you" />

            <div>
              <label htmlFor="name" className="feild-label">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="feild-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="feild-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Tell me about your idea or query..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal hover:opacity-90 transition-opacity"
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 