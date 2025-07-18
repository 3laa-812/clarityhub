import React from "react";

const Footer = () => {
  return (
    <footer className=" fixed bottom-2 left-0 w-full flex justify-center z-20 pointer-events-none">
      <div
        className={`backdrop-blur-md text-white/80 px-6 py-1.5 rounded-full shadow-lg text-sm font-medium pointer-events-auto transition-colors duration-500`}
        style={{ letterSpacing: "0.03em" }}
      >
        Made with <span className="text-red-400 mx-1 text-lg">♥</span> by{" "}
        <a
          target="_blank"
          href="www.linkedin.com/in/3laa-ragab-812gts"
          className="font-semibold text-blue-300 hover:text-blue-400 transition-colors duration-150"
        >
          3laa
        </a>
      </div>
    </footer>
  );
};

export default Footer;
