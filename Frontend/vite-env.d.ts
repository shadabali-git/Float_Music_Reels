//<reference types="vite/client" />

 interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_KEY: string;
    readonly VITE_BACKEND_URL: string;
    // add more environment variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  declare module '*.svg' {
    const content: any;
    export default content;
  }
  declare module "*.module.css";
