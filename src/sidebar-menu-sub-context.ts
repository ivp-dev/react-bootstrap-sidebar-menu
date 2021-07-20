import * as React from 'react';
import { EventKey } from 'react-bootstrap/types';

export interface SidebarMenuSubContextProps {
  bsPrefix?: string
  eventKey?: EventKey
  activeKey?: EventKey
  onSelect?: (eventKey?: EventKey | null) => void
  expanded?: boolean
  onToggle?: () => void
}

const context = React.createContext<SidebarMenuSubContextProps>({});
context.displayName = 'SidebarMenuSubContext';

export default context;