const fs = require("fs-extra");

function createDemo() {
  fs.removeSync("dist/lib/demo.html");
  const mainTs = fs.readFileSync("src/main.ts").toString();
  const exampleCodeStart =
    mainTs.indexOf("// Example Code Start") + "// Example Code Start".length;
  const exampleCodeEnd = mainTs.indexOf("// Example Code End");
  const exampleCode = mainTs.slice(exampleCodeStart, exampleCodeEnd);
  const demoHtml = fs.readFileSync("scripts/demo.html").toString();
  const content = `
    ${demoHtml.split("<!-- Insert Example Code Here -->")[0]}
    <script>
    ${exampleCode}
    </script>
    ${demoHtml.split("<!-- Insert Example Code Here -->")[1]}
    `;
  fs.outputFile("dist/lib/index.html", content);
  fs.copyFileSync("public/logo.svg", "dist/lib/logo.svg");
}

createDemo();
