import "./index.html";
import "./index.scss";
import some from "./modules/calc";

document.addEventListener("DOMContentLoaded", (e) => {
  initApp();

  async function initApp() {
    console.log("JS works");
    console.log("some", some);
  }
});
