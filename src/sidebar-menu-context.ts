import { createContext } from "react";
import { EventKey } from "react-bootstrap/types";

export interface SidebarMenuContextProps {
  rtl?: boolean
  expanded?: boolean
  onToggle?: (...args: []) => void
  onSubSelect?: (eventKey: EventKey | null) => void;
  bsPrefix?: string
  exclusiveExpand?: boolean
  subActiveKey?: EventKey
}

export default createContext<SidebarMenuContextProps>({});