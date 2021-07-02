import { createContext } from "react";
import { Bg } from "../types"

export interface GlobalThemeContextProps {
  activeKey: string,
  bg: Bg,
  expand: boolean,
  collapse: boolean
}

export const GlobalThemeContext = createContext<GlobalThemeContextProps | null>(null);