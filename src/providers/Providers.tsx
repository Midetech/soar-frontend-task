import React from "react";
import { AppProvider } from "../contexts/AppContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
