import App from "@template__vue2-typescript/app";
import package1 from "@template__vue2-typescript/package-1";
import package2 from "@template__vue2-typescript/package-2";

if (process.env.NODE_ENV === "development") {
  package1();
  package2();
}

if (
  process.env.NODE_ENV === "development" ||
  process.env.VUE_APP_MODE == "production:app"
) {
  // Example Code Start

  /**
   * 实例化应用
   */
  const app = new App({ root: "#app" });

  /**
   * 初始化应用
   */
  app.init();

  // Example Code End
}

export default App;
