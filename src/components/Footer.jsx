import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center space-y-4">
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 bg-transparent hover:bg-primary/15 text-primary transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
      >
        <ArrowUp size={20} />
      </a>
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Developed by Glen Watson
      </p>
    </footer>
  );
};
