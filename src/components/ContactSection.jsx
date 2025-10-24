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

        {/* Grid: text left, form right on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full justify-items-center">
          {/* Info / Text (Left on desktop) */}
          <div className="space-y-6 flex flex-col justify-center items-center md:items-start w-full max-w-md order-1 md:order-1 text-center md:text-left">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">Based in California, USA</p>
            </div>
          </div>

          {/* Contact Form (Right on desktop) */}
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
