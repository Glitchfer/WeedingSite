export function setupProdMode() {
  if (window.__PROD__) {
    console.log = () => {};
    console.info = () => {};
  }
}