import * as React from 'react';
import { EventKey } from 'react-bootstrap/types';

export interface SidebarMenuSubContextType {
  onToggle?: () => void
  bsPrefix?: string
  expanded?: boolean
  eventKey?: EventKey
}

const context = React.createContext<SidebarMenuSubContextType>({});
context.displayName = 'SidebarMenuSubContext';

export default context;