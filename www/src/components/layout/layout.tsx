import React from "react";
import { PropsWithChildren } from "react";

type Props = {};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={`main-wrapper main-wrapper-responsive-md`} >
    {children}
  </div>
};

export default Layout;