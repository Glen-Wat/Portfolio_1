import { Briefcase, Code, Lightbulb, User } from "lucide-react";

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
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Full stack developer. Hands-on problem solver.
            </h3>
            <p className="text-muted-foreground">
              I came to web development after years of hands-on, problem-solving
              work — from running machinery on a production line to managing a
              retail department, scheduling teams, and digging into sales data
              to improve customer experience. That background taught me to learn
              fast, fix things under pressure, and pay attention to details that
              actually matter to the people using what I build.
            </p>
            <p className="text-muted-foreground">
              Now I bring that same mindset to front-end development. I like
              taking an idea and building it end to end — structuring clean,
              maintainable code, sweating the details on responsive design, and
              making interfaces that feel intuitive rather than just functional.
              I'm still early in this path, but I learn quickly and I don't walk
              away from a hard problem until it's solved.
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
                    I build web applications end to end — clean front-end code,
                    thoughtful structure, and interfaces that hold up on any
                    device.
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
                    I care about the details that make an interface feel
                    effortless — clear layouts, responsive design that works on
                    any screen, and interactions that don't make the user think
                    twice.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving & Innovation
                  </h4>
                  <p className="text-muted-foreground">
                    Years of hands-on work taught me to stay calm under pressure
                    and dig until I find what's actually broken. I bring that
                    same persistence to debugging and building solutions that
                    hold up.
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
