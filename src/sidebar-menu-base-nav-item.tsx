import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useEventCallback from '@restart/hooks/useEventCallback';
import warning from 'warning';
import NavContext from 'react-bootstrap/NavContext';
import SelectableContext, { makeEventKey } from '@restart/ui/SelectableContext';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import { EventKey, SelectCallback } from '@restart/ui/types';

// TODO: check this
interface BaseNavItemProps {
  active?: boolean;
  as: React.ElementType;
  className?: string;
  disabled?: boolean;
  eventKey?: EventKey;
  href?: string;
  role?: string;
  id?: string;
  tabIndex?: number;
  onClick?: React.MouseEventHandler;
  onSelect?: SelectCallback;
}

type BaseNavItem = BsPrefixRefForwardingComponent<'div', BaseNavItemProps>;

const propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  role: PropTypes.string,

  href: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  eventKey: PropTypes.any,

  as: PropTypes.any,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,

  'aria-controls': PropTypes.string,
};

const defaultProps = {
  disabled: false,
};

const BaseNavItem: BaseNavItem = React.forwardRef<'div', BaseNavItemProps>(
  (
    {
      active,
      className,
      eventKey,
      onSelect,
      onClick,
      as: Component,
      ...props
    }: BaseNavItemProps,
    ref,
  ) => {
    const navKey = makeEventKey(eventKey, props.href);
    const parentOnSelect = useContext(SelectableContext);
    const navContext = useContext(NavContext);

    let isActive = active;
    
    if (navContext) {
      if (!props.role && navContext.role === 'tablist') props.role = 'tab';

      const contextControllerId = navContext.getControllerId(navKey);
      const contextControlledId = navContext.getControlledId(navKey);

      warning(
        !contextControllerId || !props.id,
        `[react-bootstrap] The provided id '${props.id}' was overwritten by the current navContext with '${contextControllerId}'.`,
      );
      warning(
        !contextControlledId || !props['aria-controls'],
        `[react-bootstrap] The provided aria-controls value '${props['aria-controls']}' was overwritten by the current navContext with '${contextControlledId}'.`,
      );

      props['data-rb-event-key'] = navKey;
      props.id = contextControllerId || props.id;
      props['aria-controls'] = contextControlledId || props['aria-controls'];

      isActive =
        active == null && navKey != null
          ? navContext.activeKey === navKey
          : active;
    }

    const handleOnClick = useEventCallback((event: React.MouseEvent<Element, MouseEvent>) => {
      onClick?.(event);

      if (navKey == null) {
        return;
      }

      onSelect?.(navKey, event);

      parentOnSelect?.(navKey, event);
    });

    return (
      <Component
        {...props}
        ref={ref}
        onClick={handleOnClick}
        className={classNames(className, isActive && 'active')}
      />
    );
  },
);

BaseNavItem.propTypes = propTypes;
BaseNavItem.defaultProps = defaultProps;
BaseNavItem.displayName = 'BaseNavItem'

export default BaseNavItem;