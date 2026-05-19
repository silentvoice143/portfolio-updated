"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../title-header";
// import ContactExperience from "../contact-experience";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        process.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
        formRef.current!,
        process.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully! ✅");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          {/* Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-white/30"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-white/30"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none resize-none focus:border-white/30"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`cta-button group ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="bg-circle" />

                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>

                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7">
            {/* <ContactExperience /> */}

            <div className="h-full min-h-[400px] rounded-xl card-border flex items-center justify-center p-10">
              <h2 className="text-2xl font-bold text-center">
                Let’s build something amazing together 🚀
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
