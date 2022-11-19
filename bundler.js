const { build } = require("@mostfeatured/bundler");

(async () => {
  await build({ dist: "dist", main: "index.js", excludes: ["./.env"] });
  console.log("Build done.");
  process.exit(1);
})();