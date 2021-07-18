import { createContext } from "react";

export interface SidebarMenuContextProps {
  rtl?: boolean
  expanded?: boolean
  onToggle?: (...args: []) => void
  exclusiveExpand?: boolean
  bsPrefix?: string
}

export default createContext<SidebarMenuContextProps>({});