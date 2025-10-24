import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "News Explorer",
    description:
      "A full-stack web app for discovering and saving news articles, featuring user authentication and responsive design.",
    image: "/projects/project1.png",
    tags: [
      "javaScript",
      "React",
      "vite",
      "Node.js",
      "Express",
      "REST API",
      "Context API",
      "HTML/CSS",
      "JWT Authentication",
      "full-stack",
    ],
    demoURL: "https://glen-wat.github.io/se_project_News-Explorer/",
    githubURL: "https://github.com/Glen-Wat/se_project_News-Explorer",
  },
  {
    id: 2,
    title: "Coffee Shop",
    description:
      "A responsive, BEM-structured landing page for a local coffee shop, built with modern HTML and CSS to deliver a polished user experience.",
    image: "/projects/project2.png",
    tags: [
      "HTML/CSS",
      "CSS Animation",
      "Flat BEM file structure",
      "Reservation Form",
      "flexbox",
    ],
    demoURL: "https://glen-wat.github.io/se_project_coffeeshop/",
    githubURL: "https://github.com/Glen-Wat/se_project_coffeeshop",
  },
  {
    id: 3,
    title: "What to Wear Weather App",
    description:
      "A live full-stack React app on goodle cloud with user authentication that provides weather updates and personalized clothing recommendations based on your profile.",
    image: "/projects/project3.png",
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "JWT Authentication",
      "Cloud deployment",
      "login-signup Form",
      "REST API",
      "Full-stack",
      "User profiles",
      "Weather API",
    ],
    demoURL: "https://www.projwtwr.ignorelist.com/",
    githubURL: "https://github.com/Glen-Wat/se_project_react",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project has been designed
          for performance and a user friendly experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="tex-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex justfiy-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Glen-Wat"
          >
            Check out my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
