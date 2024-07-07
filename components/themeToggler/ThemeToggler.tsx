"use client";
import Image from "next/image";
import styles from "./themeToggler.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggler = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggler must be used within a ThemeContextProvider");
  }

  const { toggleTheme, theme } = themeContext;

  return (
    <>
      <div
        className={styles.container}
        onClick={toggleTheme}
        style={
          theme === "dark"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#0f172a" }
        }
      >
        <Image src="/moon.png" width={14} height={14} alt="moon" />
        <div
          className={`${styles.ball} ${theme === "dark" ? styles.dark : ""}`}
          style={
            theme === "dark"
              ? { left: "22px", backgroundColor: "#0f172a" }
              : { right: "0px", backgroundColor: "#fff" }
          }
        ></div>
        <Image src="/sun.png" width={14} height={14} alt="sun" />
      </div>
    </>
  );
};

export default ThemeToggler;
