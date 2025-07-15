import React from "react";
import { Newspaper, Youtube, Github } from "lucide-react";

const ResultCard = ({ type, title, site }) => {
  let icon, colorClass;
  if (type === "article") {
    icon = <Newspaper className="w-4 h-4 text-blue-400" />;
    colorClass = "text-blue-300";
  } else if (type === "video") {
    icon = <Youtube className="w-4 h-4 text-red-400" />;
    colorClass = "text-red-200";
  } else if (type === "github") {
    icon = <Github className="w-4 h-4 text-gray-300" />;
    colorClass = "text-gray-200";
  }
  return (
    <li className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-white/90">
      {icon}
      <span className="font-medium">{title}</span>
      {site && (
        <span className={`ml-auto text-xs font-semibold ${colorClass}`}>
          {site}
        </span>
      )}
    </li>
  );
};

export default ResultCard;
