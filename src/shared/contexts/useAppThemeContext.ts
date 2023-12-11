import { useContext } from "react";
import { ThemeContext } from "./ThemeContexts";

export function useAppThemeContext() {
  return useContext(ThemeContext);
}
