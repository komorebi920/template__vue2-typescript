const { version } = require("./package.json");
const minimist = require("minimist");
const processArgv = minimist(process.argv.slice(2));
const getGitInfo = require("./scripts/get-git-info");

const gitInfo = getGitInfo();
if (gitInfo) {
  process.env.VUE_APP_BRANCH_NAME = gitInfo.branchName;
  process.env.VUE_APP_COMMIT_ID = gitInfo.commitId;
  process.env.VUE_APP_COMMIT_TIME = gitInfo.commitTime;
}
process.env.VUE_APP_VERSION = version;

let extract = false;

if (processArgv._[0] === "build") {
  if (processArgv.target === "lib") {
    process.env.VUE_APP_MODE = "production:lib";
  } else {
    extract = true;
    process.env.VUE_APP_MODE = "production:app";
  }
}

module.exports = {
  transpileDependencies: ["vuex-module-decorators"],
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
  css: {
    extract,
  },
};
