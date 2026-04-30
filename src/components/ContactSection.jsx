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
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-3xl mb-6">Send me an email</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            {/* Name */}
            <input
              type="text"
              name="name"   // ✅ YOUR VERSION
              placeholder="Name"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"  // ✅ YOUR VERSION
              placeholder="Email"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-md w-full hover:opacity-80 transition"
            >
              {loading ? "Sending..." : "Send email"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center mt-2">
                Message sent successfully!
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}