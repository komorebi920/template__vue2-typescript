import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],

  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [
    (commit) => {
      return commit.includes("Merge");
    },
  ],
};

module.exports = Configuration;
