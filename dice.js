function rollDice(sides = 6, rolls = 1) {
    const results = [];
    for (let i = 0; i < rolls; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }
    return results;
}

// Example: roll 3 D20s
console.log("Rolling 3 D20s:", rollDice(20, 3));

// Example: roll 2 D6s
console.log("Rolling 2 D6s:", rollDice(6, 2));

