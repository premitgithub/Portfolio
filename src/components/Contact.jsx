import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqotdzm", // e.g. service_xxxx
        "template_nmybcoq", // e.g. template_xxxx
        formRef.current,
        "YAcXHTXBBzr3HYuuu", // e.g. xxxxxxxxx
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        },
      );
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
