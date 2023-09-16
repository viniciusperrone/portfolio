import { useTheme } from '@/hooks/useTheme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxProps = {
  code: string;
};

function SyntaxPythonCode({ code }: SyntaxProps) {
  const { theme } = useTheme();

  return(
    <SyntaxHighlighter
      language="python" 
      style={theme === 'dark' ? okaidia : gruvboxLight}
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