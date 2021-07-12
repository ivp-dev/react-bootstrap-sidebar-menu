import { createContext } from "react";
import { EventKey } from "react-bootstrap/types";

export interface SidebarMenuContextProps {
  rtl?: boolean
  expanded?: boolean
  onToggle?: (...args: []) => void
  onToggleSelect?: (eventKey: EventKey | null, e: React.SyntheticEvent<unknown>) => void;
  bsPrefix?: string
  toggleStayExpanded?: boolean
  toggleActiveKey?: EventKey
}

export default createContext<SidebarMenuContextProps>({});