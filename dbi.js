// use .env file for environment variables
require('dotenv').config();
const { createDBI } = require('@mostfeatured/dbi');

module.exports = createDBI("dbi", {
  discord: {
    token: process.env.DISCORD_TOKEN,
    options: {
      intents: ["Guilds", "GuildMessages"],
    }
  },
  defaults: {
    locale: "en",
    directMessages: false,
    defaultMemberPermissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
  }
});
