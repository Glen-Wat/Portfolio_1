import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnnoaqvv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mb-12">
          Whether refining user experience, improving performance, or building
          from the ground up! I create solutions that work. Let’s connect and
          discuss how I can help bring your ideas to life.
        </p>

        {/* Grid: Image Left, Form Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full justify-items-center items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border bg-no-repeat bg-center shadow-[0_0_20px_rgba(0,0,50,0.4)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(60,100,255,0.5)]"
              style={{
                backgroundImage: "url('/projects/headshot-blue.jpeg')",
                backgroundSize: "100%", // 👈 zooms *out* slightly (100% = full fit, <100% zooms out)
                backgroundPosition: "center 25%", // 👈 lowers image to show more of your head
                backgroundColor: "#0a1020", // your dark blue background
              }}
              role="img"
              aria-label="Glen Watson"
            />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-6 rounded-2xl shadow-sm w-full max-w-md mx-auto order-2 md:order-2"
          >
            <div>
              <label
                className="block font-medium mb-2 text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                className="block font-medium mb-2 text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                className="block font-medium mb-2 text-left"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full rounded-lg border border-border bg-background p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 hover:cursor-pointer transition"
            >
              Send Message
            </button>

            {status === "SUCCESS" && (
              <p className="text-green-500 text-sm text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "ERROR" && (
              <p className="text-red-500 text-sm text-center mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
