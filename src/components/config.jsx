// config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ChatBot",
  initialMessages: [createChatBotMessage("Select the character to talk")],
};

export default config;