
import * as React from 'react';
import { EventKey } from 'react-bootstrap/types';

export interface SidebarMenuNodeContextProps {
  expanded?: boolean
  activeKey?: EventKey
  bubble?: () => void
  onToggle?: () => void
  onSelect?: (eventKey?: EventKey | null) => void
}

const SidebarMenuNodeContext = React.createContext<SidebarMenuNodeContextProps>({});

export default SidebarMenuNodeContext;