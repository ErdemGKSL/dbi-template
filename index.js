const { Utils: { recursiveImport } } = require("@mostfeatured/dbi");
const dbi = require("./dbi");

(async () => {
  await recursiveImport("./src");
  await dbi.load();
  await dbi.login();
  console.log("Discord Login: " + dbi.data.clients.map(c => c.client?.user?.tag).join(", "));
})();