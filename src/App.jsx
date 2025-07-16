/* eslint-disable no-unused-vars */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import { useSearchStore } from "./store/searchStore";
import Loader from "./components/ui/Loader";


export default function App() {
  const { keyword, loading, history, fetchResults, resultsCache } = useSearchStore();
  const currentResults = resultsCache[keyword] || [];
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-200"
      } relative overflow-hidden`}
    >
      {/* Blurred Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/80 blur-2xl" />
      </div>
      <main className="my-4 relative z-10 w-full max-w-lg mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center"
          >
            {/* Logo/Title */}
            <Header />

            {/* Search Bar */}
            <SearchBar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Search History Pills */}
            <div className="w-full flex flex-wrap gap-2 mb-6 justify-center">
              {history.map((item) => (
                <button
                  key={item}
                  className="px-3 py-1 rounded-full bg-blue-800/40 text-blue-200 text-xs md:text-sm font-medium shadow hover:bg-blue-700/60 transition border border-blue-500/20"
                  onClick={() => fetchResults(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Results Section */}

            {loading ? (
              <Loader />
            ) : currentResults.length === 0 ? (
              <p className="text-white text-sm">No results found.</p>
            ) : (
              <motion.section
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
                  Results for:{" "}
                  <span className="text-blue-300 font-bold">{keyword}</span>
                </h2>

                {/* ✅ Grouping results properly */}
                {["article", "video", "repo"].map((type) => {
                  const items = currentResults.filter((r) => r.type === type);
                  if (items.length === 0) return null;

                  return (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: type === "video" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-base font-bold ${
                            type === "article"
                              ? "text-blue-200"
                              : type === "video"
                              ? "text-red-200"
                              : "text-gray-200"
                          }`}
                        >
                          {type === "repo"
                            ? "GitHub"
                            : `${type[0].toUpperCase()}${type.slice(1)}s`}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <ResultCard
                            key={item.title}
                            type={type}
                            title={item.title}
                            link={item.link}
                            source={item.source}
                          />
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </motion.section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
