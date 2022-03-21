
import * as React from 'react';
import { EventKey } from '@restart/ui/types'

export interface SidebarMenuNodeContextProps {
  expanded?: boolean
  activeKey?: EventKey
  onActiveKeyChanged?: (eventKey: string | null) => void
  onToggle?: () => void
  onSelect?: (eventKey?: EventKey | null) => void
}

const SidebarMenuNodeContext = React.createContext<SidebarMenuNodeContextProps>({});

export default SidebarMenuNodeContext;