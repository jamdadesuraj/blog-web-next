"use client";

import { useContext, ReactNode, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeProvider must be used within a ThemeContextProvider");
  }

  const { theme } = themeContext;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
