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
              Engineer. Creator. Builder.
            </h3>
            <p className="text-muted-foreground">
              I’m a hands-on problem solver with a builder’s mindset, focused on
              turning ideas into scalable digital experiences. I specialize in
              React and modern front-end development, creating UI systems that
              balance performance, accessibility, and aesthetics. I love
              building products from the ground up and pushing what’s possible
              with code and creativity.
            </p>
            <p className="text-muted-foreground">
              What drives me most about web development is the process of
              transforming ideas into interactive, purposeful experiences. Every
              project is a chance to solve problems, refine details, and learn
              something new. I approach each challenge with curiosity and
              precision, crafting interfaces that connect design and technology
              through thoughtful, well-structured code.
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
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving & Innovation
                  </h4>
                  <p className="text-muted-foreground">
                    Tackling complex challenges with creativity and precision.
                    Transforming ideas into high-impact solutions through code.
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
