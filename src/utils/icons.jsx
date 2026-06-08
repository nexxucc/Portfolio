import {
  ArrowRight,
  Award,
  Bot,
  Brain,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Sun,
  User,
  Wrench,
  X,
} from "lucide-react";

function GithubIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.82 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M6.94 8.75H3.75V20h3.19V8.75ZM5.35 4C4.31 4 3.5 4.76 3.5 5.74c0 .96.79 1.74 1.81 1.74h.02c1.06 0 1.86-.78 1.86-1.74C7.17 4.76 6.39 4 5.35 4ZM20.5 13.55c0-3.04-1.62-5.05-4.25-5.05-1.96 0-2.83 1.08-3.32 1.84V8.75H9.75c.04 1.05 0 11.25 0 11.25h3.18v-6.28c0-.34.02-.67.12-.91.26-.67.86-1.37 1.86-1.37 1.31 0 1.84 1.03 1.84 2.53V20h3.18l.57-6.45Z" />
    </svg>
  );
}

const icons = {
  ArrowRight,
  Award,
  Bot,
  Brain,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github: GithubIcon,
  GitHub: GithubIcon,
  GraduationCap,
  LineChart,
  Linkedin: LinkedinIcon,
  LinkedIn: LinkedinIcon,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Sun,
  User,
  Wrench,
  X,
};

export function Icon({ name, size = 24, ...props }) {
  const IconComponent = icons[name] || Sparkles;
  return <IconComponent size={size} {...props} />;
}
