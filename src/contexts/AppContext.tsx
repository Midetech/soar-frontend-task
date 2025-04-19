"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useReducer } from "react";

interface AppState {
  isSidebarOpen: boolean;
  activeModule: string;
  searchQuery: string;
  isMobile: boolean;
}

type AppAction =
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "SET_ACTIVE_MODULE"; payload: string }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_IS_MOBILE"; payload: boolean };

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const initialState: AppState = {
  isSidebarOpen: false,
  activeModule: "",
  searchQuery: "",
  isMobile: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "SET_ACTIVE_MODULE":
      return { ...state, activeModule: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_IS_MOBILE":
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const pathname = usePathname();

  // Handle mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      dispatch({ type: "SET_IS_MOBILE", payload: window.innerWidth <= 768 });
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Update active module when route changes
  useEffect(() => {
    const currentModule =
      pathname.split("/").length > 2
        ? pathname.split("/")[2]
        : pathname.split("/")[1];
    dispatch({ type: "SET_ACTIVE_MODULE", payload: currentModule });
  }, [pathname]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
