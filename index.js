const { recursiveImport } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await recursiveImport("./src");
  await dbi.load();
  await dbi.login();
  console.log("Discord Login: " + dbi.client.user.tag);
})();