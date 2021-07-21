import React, { useMemo } from 'react'
import { EventKey } from 'react-bootstrap/types';
import { ReplaceProps } from 'react-bootstrap/helpers';
import SidebarMenuNodeContext, { SidebarMenuNodeContextProps } from './sidebar-menu-node-context';
import { useUncontrolled } from 'uncontrollable';

export interface SidebarMenuNodeProps<With extends React.ElementType = React.ElementType> {
  with: With
  bubble?: () => void
  activeNodeKey?: EventKey
  onNodeSelect?: (eventKey?: EventKey | null) => void
}

interface SidebarMenuNode<P = unknown, WithInner extends React.ElementType = React.ElementType<P>> {
  <With extends React.ElementType = WithInner>(props: ReplaceProps<With, SidebarMenuNodeProps<With>> & P, context?: unknown): React.ReactElement
}

const SidebarMenuNode: SidebarMenuNode = ({
  with: With,
  bubble,
  ...props
}: SidebarMenuNodeProps): React.ReactElement => {

  const {
    activeNodeKey,
    onNodeSelect
  } = useUncontrolled(props, {
    activeNodeKey: 'onNodeSelect'
  });

  const nodeContextValue: SidebarMenuNodeContextProps = useMemo(() => ({
    bubble,
    onSelect: onNodeSelect,
    activeKey: activeNodeKey
  }), [activeNodeKey, bubble, onNodeSelect]);

  return <SidebarMenuNodeContext.Provider value={nodeContextValue}>
    <With {...props} />
  </SidebarMenuNodeContext.Provider>;
}

export default SidebarMenuNode;