import * as React from 'react';
import { EventKey } from 'react-bootstrap/types';

export interface SidebarMenuSubContextProps {
  bsPrefix?: string
  eventKey?: EventKey
}

const context = React.createContext<SidebarMenuSubContextProps>({});
context.displayName = 'SidebarMenuSubContext';

export default context;