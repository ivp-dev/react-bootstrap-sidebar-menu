import React, { useContext, useMemo } from 'react'
import { EventKey } from 'react-bootstrap/types';
import { ReplaceProps } from 'react-bootstrap/helpers';
import SidebarMenuNodeContext, { SidebarMenuNodeContextProps } from './sidebar-menu-node-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuContext from './sidebar-menu-context';
import SidebarMenuSubContext from './sidebar-menu-sub-context';

export interface SidebarMenuNodeProps<With extends React.ElementType = React.ElementType> {
  with: With
  activeNode?: EventKey
  expanded?: boolean
  onToggle?: (expanded: boolean) => void
  onSelect?: (eventKey?: EventKey | null) => void
}

interface SidebarMenuNode<P = unknown, WithInner extends React.ElementType = React.ElementType<P>> {
  <With extends React.ElementType = WithInner>(props: ReplaceProps<With, SidebarMenuNodeProps<With>> & P, context?: unknown): React.ReactElement
}

const SidebarMenuNode: SidebarMenuNode = ({
  with: With,
  ...props
}: SidebarMenuNodeProps): React.ReactElement => {
  const {
    activeNode,
    expanded,
    onToggle,
    onSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    activeNode: 'onSelect',
    expanded: 'onToggle'
  });

  const { eventKey } = useContext(SidebarMenuSubContext)
  const { exclusiveExpand } = useContext(SidebarMenuContext)

  const nodeContextValue = useMemo<SidebarMenuNodeContextProps>(() => ({
    onToggle: () => onToggle?.(!expanded),
    onSelect,
    expanded: exclusiveExpand ? eventKey === activeNode : !!expanded,
    activeNode
  }), [activeNode, eventKey, exclusiveExpand, expanded, onSelect, onToggle])

  return <SidebarMenuNodeContext.Provider value={nodeContextValue}>
    <With {...controlledProps} />
  </SidebarMenuNodeContext.Provider>;
}

export default SidebarMenuNode;