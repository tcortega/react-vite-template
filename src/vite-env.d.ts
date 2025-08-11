/// <reference types="vite/client" />

interface ImportMetaEnv {
  // api.com/api
  readonly VITE_API_URL: string;
  readonly VITE_HIGHLIGHT_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
