import * as React from 'react';
import { EventKey } from 'react-bootstrap/types';

export interface SidebarMenuNavbarContextType {
  onToggle: () => void
  bsPrefix?: string
  expanded: boolean
  eventKey?: EventKey
}

const context = React.createContext<SidebarMenuNavbarContextType | null>(null);
context.displayName = 'SidebarMenuNavbarContext';

export default context;