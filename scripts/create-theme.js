const { run } = require("element-themex");

function createTheme() {
  run({
    config: "theme.scss",
    out: "theme",
  });
}

createTheme();
