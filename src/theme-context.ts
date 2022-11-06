import { createContext } from "react";
export type Theme = "light" | "dark";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: any) => {},
});
