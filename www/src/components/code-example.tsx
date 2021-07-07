import React from 'react';

type CodeExamplProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {

}

const CodeExample = (props: CodeExamplProps) => {
  return <code {...props}/>
}

export default CodeExample;