import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_qwhv0lt",
        "template_nbgudo8",
        form.current,
        "M-RMtTlIKaOx7BKb-"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white p-10 rounded-xl shadow-md">
          
          {/* Heading */}
          <h2 className="text-xl mb-8 font-semibold text-center">
            Feel free to reach out if you’d like to collaborate or discuss opportunities 👇
          </h2>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="6"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none relative z-10"
              required
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-full  hover:opacity-80 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}