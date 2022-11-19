const dbi = require("../dbi");

dbi.register(({ Locale }) => {

  Locale({
    name: "tr",
    data: {
      pong: "İyi sen!",
    }
  });

  Locale({
    name: "en",
    data: {
      pong: "Pong!",
    }
  });

});