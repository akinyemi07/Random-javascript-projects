function guessIQ(searchHistory) {
    let iq = 100;

    searchHistory.forEach(query => {
        if (query.match(/how to get rich quick/i)) iq -= 10;
        if (query.match(/flat earth/i)) iq -= 15;
        if (query.match(/learn python/i)) iq += 10;
        if (query.match(/how to apologize/i)) iq += 5;
        if (query.match(/is water wet/i)) iq -= 5;
    });

    return `🧠 Estimated IQ: ${Math.max(iq, 50)} (totally fake, but fun)`;
}

// Example
console.log(guessIQ([
    "how to get rich quick",
    "learn python",
    "is water wet"
]));

