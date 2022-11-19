const dbi = require("../dbi");

dbi.register(({ ChatInput, InteractionLocale }) => {

  ChatInput({
    name: "ping",
    description: "Ping!",
    onExecute: async ({ interaction, locale }) => {
      await interaction.reply(locale.user.data.pong());
    },
  });

  InteractionLocale({
    name: "ping",
    data: {
      tr: {
        name: "naber",
        description: "Naber!",
      },
      en: {
        name: "ping",
        description: "Ping!",
      },
    }
  });

});