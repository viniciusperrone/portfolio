import React, { useState } from "react";
import dynamic from "next/dynamic";
import { HiDocument } from "react-icons/hi";
const SyntaxPythonCode = dynamic(() => import('./SyntaxPythonCode'), { ssr: false });

const CodeString = `
  while True:
    coffee = 'coffee situation.'
    if coffee == 'empty':
      print('fill')
      break
    elif coffee == 'full':
      print('drink')
      break
    else:
      print("it's ok")
    pass

  print('so proceed...☕')
`;

export function Code() {
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopyClick () {
    try {
      await navigator.clipboard.writeText(CodeString);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return(
    <div className="code min-h-[250px] w-[80%] m-auto md:m-0 md:w-[400px] bg-purple-dark border-solid border-[1px] border-purple-900 rounded-2xl">
      <header className="w-full flex flex-row justify-between py-2 px-2">
        <div className="flex flex-row items-center gap-1">
          <div className="w-3 h-3 bg-red-600 rounded-full"/>
          <div className="w-3 h-3 bg-green-700 rounded-full"/>
          <div className="w-3 h-3 bg-purple-900 rounded-full"/>
        </div>
        <code className="text-purple-900">/coffee.py</code>
        <HiDocument 
          id="copy-button"
          className="w-5 h-5 text-gray-default cursor-pointer transition-colors hover:opacity-80"
          aria-label="Copiar"
          onClick={handleCopyClick}
        />
        <span 
          id="copy-tooltip"
          className="text-gray-default border-solid border-2 rounded-xl border-purple-900 bg-purple-dark"
        >
          { copied ? "Copiado" : "Clique para copiar" }
        </span>
      </header>
      <main className="w-full">
        <SyntaxPythonCode code={CodeString} />
      </main>
    </div>
  )
}