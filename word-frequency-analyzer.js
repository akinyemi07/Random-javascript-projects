function wordFrequency(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });
    return frequency;
}

// Example usage:
const sampleText = "Hello world, hello again. This is a test. Hello!";
console.log(wordFrequency(sampleText));

