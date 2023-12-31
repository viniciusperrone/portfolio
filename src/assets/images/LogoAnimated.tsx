import React from "react";
import { motion } from "framer-motion";

type LogoAnimatedProps = {
  width?: string | number;
  height?: string | number;
  theme?: 'dark' | 'light';
};

export function LogoAnimated({ width = 70, height = 61, theme = 'dark' }: LogoAnimatedProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 70 61"
    >
      <motion.path
        initial={{
          x: -5000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
          repeat: 0,
          repeatType: "loop",
          repeatDelay: 0
        }} 
        fill="#62B5E5"
        strokeWidth={4}
        strokeDasharray="0 1"
        d="M24.398 59.75l-.395.093v.279h1.393c.93 0 1.533-.65 1.533-1.672 0-1.022-.557-1.58-1.463-1.58h-.58l-.883.024v.255l.395.093v2.508zm.488 0v-2.508h.557c.58 0 .952.372.952 1.231 0 .883-.395 1.277-.975 1.277h-.535zM34.694 58.24v-.998h.999l.116.418h.302v-.79h-1.417l-.882.024v.255l.394.093v2.508l-.394.093v.279h2.345v-.836h-.302l-.093.464h-1.068v-1.138h1.068v-.371h-1.068zM42.792 57.15l.358.092.99 2.88h.464l1.03-2.88.363-.093v-.278l-1.254.023v.255l.432.093-.776 2.253-.729-2.257.423-.089v-.278l-1.3.023v.255z"
      ></motion.path>
      <motion.path
        initial={{
          x: -5000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
          repeat: 0,
          repeatType: "loop",
          repeatDelay: 0
        }}
        fill={theme === 'dark' ? "#fff" : "#A0A0A0"}
        d="M6.133 49.726l-3.43-6.634H0l6.042 11.507 5.754-11.507h-2.43l-3.233 6.634zM15.044 43.092h-2.353v11.31h2.353v-11.31zM25.246 49.635L17.2 42.879v11.522h2.353v-6.497l8.046 6.695V43.092h-2.353v6.543zM32.108 43.092h-2.353v11.31h2.353v-11.31zM43.054 49.407c-.32 1.7-1.746 2.93-3.447 2.93-1.897 0-3.4-1.594-3.4-3.583 0-2.004 1.503-3.613 3.4-3.613 1.17 0 2.323.592 3.143 1.807l1.837-1.306c-1.017-1.655-2.885-2.748-4.995-2.748-3.218 0-5.799 2.627-5.799 5.86 0 3.234 2.58 5.845 5.814 5.845 3.006 0 5.496-2.292 5.83-5.192h-2.383zM49.293 43.092H46.94v11.31h2.353v-11.31zM56.23 54.599c3.022 0 4.859-1.943 4.859-5.238v-6.27h-2.353v6.468c0 1.7-.76 2.778-2.505 2.778-1.67 0-2.535-1.002-2.535-2.778v-6.467h-2.353v6.072c0 3.142 1.578 5.435 4.888 5.435zM65.856 49.392c1.093.121 1.7.683 1.7 1.594 0 .728-.607 1.35-1.382 1.35-.668 0-1.199-.166-1.715-.819l-1.943 1.427c1.078 1.184 2.368 1.655 3.658 1.655 1.99 0 3.826-1.579 3.826-3.78 0-2.186-1.594-3.492-3.522-3.613-1.2-.076-1.579-.547-1.579-1.063 0-.623.425-1.002 1.048-1.002.394 0 .895.243 1.199.562l1.852-1.351c-.865-1.033-1.928-1.458-3.051-1.458-1.564 0-3.325 1.351-3.325 3.264 0 1.776 1.275 3.006 3.234 3.234z"
      ></motion.path>
      <motion.path
        initial={{
          visibility: "hidden",
          scale: 0
        }}
        animate={{
          visibility: "visible",
          scale: 1
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
          repeat: 0,
          repeatType: "loop",
          repeatDelay: 0
        }}
        fill="#62B5E5"
        fillRule="evenodd"
        d="M20.462.5v20.142L49.538 10.57 20.463.5zm29.076 35.323V15.68L20.463 25.752l29.075 10.07z"
        clipRule="evenodd"
      ></motion.path>
    </motion.svg>
  );
}
