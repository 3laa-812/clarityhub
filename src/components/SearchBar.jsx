import { Search, Moon, Sun } from "lucide-react";
import { useSearchStore } from "../store/searchStore";

const SearchBar = ({ darkMode, setDarkMode }) => {
  const { keyword, setKeyword, fetchResults } = useSearchStore();

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      const keyword = e.currentTarget.value.trim();
      if (keyword) {
        fetchResults(keyword);
      }
    }
  };

  const handleSearchIconClick = () => {
    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword) {
      fetchResults(trimmedKeyword);
    }
  };

  return (
    <>
      <div className="w-full flex items-center bg-black/70 border border-blue-500/30 rounded-full px-4 py-2 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <Search
          onClick={handleSearchIconClick}
          className="text-blue-400 w-5 h-5 mr-2 hover:cursor-pointer"
        />
        <input
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 text-base md:text-lg"
          placeholder="Next 15, OS Scheduling, CSS Tricks..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="ml-2 p-1 rounded-full hover:bg-blue-500/20 transition"
          onClick={() => setDarkMode((dm) => !dm)}
          aria-label="Toggle dark mode"
          type="button"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-blue-300" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>
    </>
  );
};
export default SearchBar;
