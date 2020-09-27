import { sendMessage } from "../../deps.ts";
import { botCache } from "../../mod.ts";

botCache.commands.set("meow", {
  name: "meow",
  execute: function (message) {
    sendMessage(
      message.channelID,
      "MEOWWW!!!",
    );
  },
});
