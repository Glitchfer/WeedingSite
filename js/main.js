window.__PROD__ =
  location.hostname.includes("netlify") ||
  location.hostname.includes("your-domain.com");

import { setupProdMode } from "./prod.js";  

setupProdMode();