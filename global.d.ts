declare global {
  interface Window {
    webkitIndexedDB: any;
    mozIndexedDB: any;
  }
}
