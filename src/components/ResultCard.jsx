import { Newspaper, Youtube, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const ResultCard = ({ type, title, link, source }) => {
  let icon, colorClass;
  if (type === "article") {
    icon = <Newspaper className="w-4 h-4 text-blue-400" />;
    colorClass = "text-blue-300";
  } else if (type === "video") {
    icon = <Youtube className="w-4 h-4 text-red-400" />;
    colorClass = "text-red-200";
  } else if (type === "repo") {
    icon = <Github className="w-4 h-4 text-gray-300" />;
    colorClass = "text-gray-200";
  }
  return (
    <li className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-white/90">
      {icon}
      <span className="font-medium">{title}</span>
      {link && (
        <span className={`ml-auto text-xs font-semibold ${colorClass}`}>
          <a className="flex gap-2" href={link}>
            {" "}
            <ArrowRight className="w-4 h-4" /> {source}
          </a>
        </span>
      )}
    </li>
  );
};

export default ResultCard;
