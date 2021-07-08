import React from 'react';
import classnames from 'classnames';

type CodeExamplProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
  bg?: 'light' | 'dark';
}

const PreContainer = ({bg = "light", ...props}: CodeExamplProps) => {
  return <pre className={classnames("pre-container", bg && `bg-${bg}`)} {...props} />
}

export default PreContainer;