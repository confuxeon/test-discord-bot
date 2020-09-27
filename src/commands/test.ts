import { sendMessage } from "../../deps.ts";
import { botCache } from "../../mod.ts";

botCache.commands.set("test", {
  name: "test",
  execute: function (message) {
    sendMessage(
      message.channelID,
      "OK!!!",
    );
  },
});
