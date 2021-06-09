import { createContext } from "react";

export interface SidebarMenuContextProps {
  rtl: boolean;
  expanded: boolean;
  onToggle: () => void;
  bsPrefix?: string;
}

export const SidebarMenuContext = createContext<SidebarMenuContextProps | null>(null);