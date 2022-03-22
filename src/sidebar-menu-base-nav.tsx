import qsa from 'dom-helpers/querySelectorAll';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import useForceUpdate from '@restart/hooks/useForceUpdate';
import useMergedRefs from '@restart/hooks/useMergedRefs';
import NavContext from 'react-bootstrap/NavContext';
import SelectableContext, { makeEventKey } from '@restart/ui/SelectableContext';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import { EventKey, SelectCallback } from "@restart/ui/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const noop: any = () => { /**/ };

const propTypes = {
  onSelect: PropTypes.func,

  as: PropTypes.elementType,

  role: PropTypes.string,

  /** @private */
  onKeyDown: PropTypes.func,
  /** @private */
  parentOnSelect: PropTypes.func,
  /** @private */
  getControlledId: PropTypes.func,
  /** @private */
  getControllerId: PropTypes.func,
  /** @private */
  activeKey: PropTypes.any,
};

// TODO: is this correct?
interface BaseNavProps {
  activeKey?: EventKey | null;
  as?: React.ElementType;
  getControlledId?: (key: EventKey | null) => string;
  getControllerId?: (key: EventKey | null) => string;
  onKeyDown?: (event: React.SyntheticEvent<unknown, KeyboardEvent>) => void;
  onSelect?: SelectCallback;
  parentOnSelect?: SelectCallback;
  role?: string;
}

type BaseNav = BsPrefixRefForwardingComponent<'ul', BaseNavProps>;

const BaseNav: BaseNav = React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'ul',
  onSelect,
  activeKey,
  onKeyDown,
  getControlledId,
  getControllerId,
  role,
  ...props
}: BaseNavProps,
  ref,
) => {
  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = useRef(false);
  const parentOnSelect = useContext(SelectableContext);

  const listNode = useRef<HTMLElement>(null);

  const getNextActiveChild = (offset: number) => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;

    const items = qsa(currentListNode, '[data-rb-event-key]:not(.disabled)');
    const activeChild = currentListNode.querySelector<HTMLElement>('.active');
    if (!activeChild) return null;

    const index = items.indexOf(activeChild);
    if (index === -1) return null;

    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key: string | null, event: React.SyntheticEvent<unknown, Event>) => {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  const handleKeyDown = (event: React.SyntheticEvent<typeof Component, KeyboardEvent>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    let nextActiveChild: HTMLElement | null;
    switch (event.nativeEvent.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild) return;

    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey ?? null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector<HTMLElement>(
        '[data-rb-event-key].active',
      );

      if (activeChild) {
        activeChild.focus();
      }
    }

    needsRefocusRef.current = false;
  });

  const mergedRef = useMergedRefs(ref, listNode);

  return (
    <SelectableContext.Provider value={handleSelect}>
      <NavContext.Provider
        value={{
          role, // used by NavLink to determine it's role
          activeKey: makeEventKey(activeKey),
          getControlledId: getControlledId ?? noop,
          getControllerId: getControllerId ?? noop,
        }}
      >
        <Component
          {...props}
          onKeyDown={handleKeyDown}
          ref={mergedRef}
          role={role}
        />
      </NavContext.Provider>
    </SelectableContext.Provider>
  );
});

BaseNav.propTypes = propTypes;
BaseNav.displayName = 'BaseNav';

export default BaseNav;