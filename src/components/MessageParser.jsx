// MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      // Here you can add custom logic for parsing user input
      if (message.toLowerCase().includes("hello")) {
        this.actionProvider.handleHello();
      }
    }
  }
  
  export default MessageParser;