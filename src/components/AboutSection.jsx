import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> ME</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              I am a web developer who loves creating clean, responsive, and
              user-friendly experiences. Over time, I have built a solid
              foundation working with technologies React, Vite, Tailwind CSS,
              and JavaScript, focusing on modern design practices and
              performance-driven development. I enjoy combining creative design
              with technical precision to build interfaces that not only look
              great but work seamlessly across all devices.
            </p>
            <p className="text-muted-foreground">
              What I love most about web development is the process of turning
              ideas into real, interactive experiences. I am passionate about
              solving problems, refining details, and constantly learning new
              ways to make my work better. Every project is an opportunity to
              challenge myself, think creatively, and bring a vision to life
              through thoughtful, well-crafted code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building modern, impactful web experiences with technologies
                    today to shape a better digital tomorrow.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Focused on creating intuitive, responsive, and enjoyable
                    user experiences that connects people together with
                    technology effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Managment</h4>
                  <p className="text-muted-foreground">
                    Turning ideas into organized, goal-driven projects that
                    deliver real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
