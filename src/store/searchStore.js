// src/store/searchStore.ts
import { create } from "zustand";
import { fetchResults } from "../utils/fetchResults";
import { persist } from "zustand/middleware";

export const useSearchStore = create(
  persist(
    (set, get) => ({
      keyword: "",
      resultsCache: {},
      history: [],
      loading: false,
      setKeyword: (k) => set({ keyword: k }),
      fetchResults: async (k) => {
        const state = get();
        if (state.resultsCache[k]) {
          set({ keyword: k, loading: false });
          return;
        }
        set({ loading: true });
        const results = await fetchResults(k);
        set((state) => ({
          keyword: k,
          loading: false,
          resultsCache: { ...state.resultsCache, [k]: results },
          history: [k, ...state.history.filter((item) => item !== k)].slice(
            0,
            5
          ),
        }));
      },
    }),
    {
      name: "search-store",
    }
  )
);
