function metalPetName(petType) {
    const adjectives = ["Dark", "Blazing", "Feral", "Iron", "Venomous"];
    const nouns = ["Fang", "Claw", "Wrath", "Storm", "Shadow"];
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj} ${noun} the ${petType.charAt(0).toUpperCase() + petType.slice(1)}`;
}

// Example
console.log(metalPetName("hamster")); // e.g., "Venomous Claw the Hamster"

