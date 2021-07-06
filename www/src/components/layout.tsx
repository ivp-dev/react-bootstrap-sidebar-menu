import React from "react";
import { PropsWithChildren } from "react";
import classNames from 'classnames';

type Props = {
  rtl?: boolean
};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children, rtl }) => {
  return <div className={classNames(
    'main-wrapper',
    'main-wrapper-responsive-lg',
    rtl && 'rtl'
  )} >
    {children}
  </div>
};

export default Layout;