import React from 'react';
import classnames from 'classnames';
import useCopyToClipboard from '../hooks/use-copy-to-clipboard';

type CodeExamplProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  copy?: string
}

const CodeExample = ({ children, copy, ...props }: CodeExamplProps) => {
  const [status, copyToClipboard] = useCopyToClipboard(copy ?? "");

  return <code aria-label="Import code for the SidebarMenu component" className={classnames("code-example", copy && "code-example-copy")} {...props}>
    {children}
    {copy && <button onClick={copyToClipboard} title={status} className="btn btn-sm copy-link">
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
    </button>}
  </code>
}

type CodeVariableProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {}

const CodeExampleVariable = (props: CodeVariableProps) => {
  return <span {...props} className="code-example-variable" />
}



type DirectiveVariableProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {}

const DirectiveExampleVariable = (props: DirectiveVariableProps) => {
  return <span {...props} className="code-example-directive" />
}

type NpmVariableProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {}

const NpmVariable = (props: NpmVariableProps) => {
  return <span {...props} className="code-example-npm" />
}

export default Object.assign(CodeExample, {
  Variable: Object.assign(CodeExampleVariable, {
    Npm: NpmVariable
  }),
  Directive: DirectiveExampleVariable
});