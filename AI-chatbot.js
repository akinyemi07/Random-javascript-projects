function simpleChatBot(input) {
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        return "Hi there! How can I help you?";
    } else if (input.includes("weather")) {
        return "I can't control the weather, but I hope it's sunny where you are!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Hmm, I'm not sure how to respond to that.";
    }
}

// Example
console.log(simpleChatBot("Hi bot"));
console.log(simpleChatBot("Tell me the weather"));

