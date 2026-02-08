
import { setupProdMode } from "./prod.js"; 

window.__PROD__ =
  location.hostname.includes("netlify") ||
  location.hostname.includes("your-domain.com");

setupProdMode();