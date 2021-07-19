import React, { useContext, useMemo } from 'react'
import { EventKey } from 'react-bootstrap/types';
import { ReplaceProps } from 'react-bootstrap/helpers';
import SidebarMenuNodeContext, { SidebarMenuNodeContextProps } from './sidebar-menu-node-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuContext from './sidebar-menu-context';
import SidebarMenuSubContext from './sidebar-menu-sub-context';

export interface SidebarMenuNodeProps<With extends React.ElementType = React.ElementType> {
  with: With
  activeNodeKey?: EventKey
  expanded?: boolean
  onToggle?: (expanded: boolean) => void
  onSelect?: (eventKey?: EventKey | null) => void
}

interface SidebarMenuNode<P = unknown, WithInner extends React.ElementType = React.ElementType<P>> {
  <With extends React.ElementType = WithInner>(props: ReplaceProps<With, SidebarMenuNodeProps<With>> & P, context?: unknown): React.ReactElement
}

const SidebarMenuNode: SidebarMenuNode = ({
  with: With,
  activeNodeKey,
  expanded,
  onToggle,
  onSelect,
  ...props
}: SidebarMenuNodeProps): React.ReactElement => {

  const { eventKey } = useContext(SidebarMenuSubContext)
  const { exclusiveExpand } = useContext(SidebarMenuContext)

  console.log(`eventKey: ${eventKey} - activeNodeKey: ${activeNodeKey}`)

  const newContext = {
    onToggle: () => onToggle?.(!expanded),
    onSelect,
    expanded: exclusiveExpand ? eventKey === activeNodeKey : !!expanded,
    activeNodeKey
  }

  return <SidebarMenuNodeContext.Consumer>
    {
      (context) => <SidebarMenuNodeContext.Provider value={({...context, ...newContext})}>
        <With {...props} />
      </SidebarMenuNodeContext.Provider>
    }
  </SidebarMenuNodeContext.Consumer>;
}

export default SidebarMenuNode;