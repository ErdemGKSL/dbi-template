const { build } = require("@mostfeatured/bundler");

(async () => {
  await build({ dist: "dist", main: "index.js", excludes: ["./config.json"] });
  console.log("Build done.");
  process.exit(1);
})();