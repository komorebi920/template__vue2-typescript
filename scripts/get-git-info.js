const { execSync } = require("child_process");

function getGitInfo() {
  const branchName = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim();
  const commitId = execSync("git rev-parse HEAD").toString().trim();
  const commitTime = execSync("git log -1 --format=%cd --date=default")
    .toString()
    .trim();

  return {
    branchName,
    commitId,
    commitTime,
  };
}

module.exports = getGitInfo;
