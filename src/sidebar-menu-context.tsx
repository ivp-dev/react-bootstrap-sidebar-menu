import { createContext } from "react";

export interface SidebarMenuContextProps {
  rtl: boolean;
  expanded: boolean;
  onToggle: (...args: []) => void;
  bsPrefix?: string;
}

export const SidebarMenuContext = createContext<SidebarMenuContextProps | null>(null);