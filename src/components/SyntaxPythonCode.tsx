import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxProps = {
  code: string;
};

function SyntaxPythonCode({ code }: SyntaxProps) {
  return(
    <SyntaxHighlighter
      language="python" 
      style={okaidia}
      customStyle={{
        background: "transparent",
        margin: 0
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default SyntaxPythonCode;