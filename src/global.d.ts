// src/global.d.ts

declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: string;
    export default content;
  }
  
  declare module '*.gif' {
    const content: string;
    export default content;
  }
  declare module '@heroicons/react/solid' {
    export * from 'react';
  }
  declare module '@heroicons/react/outline' {
    export * from 'react';
  }
  declare module '@heroicons/react/20/solid' {
    export * from 'react';
  }

  declare module 'react-loaders' {
    const Loader: React.FC<{ type: string; active?: boolean }>;
    export default Loader;
  }