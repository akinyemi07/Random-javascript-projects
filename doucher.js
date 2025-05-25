function isDoucher({ arroganceLevel, volumeLevel, nameDrops, mirrorSelfies }) {
    const score = (arroganceLevel * 2) + volumeLevel + (nameDrops * 3) + (mirrorSelfies * 2);
    if (score > 15) {
        return "🚨 Alert: High Doucher Levels Detected!";
    } else if (score > 8) {
        return "⚠️ Moderate Doucher Behavior";
    } else {
        return "✅ You're chill. No doucher vibes detected.";
    }
}

// Example usage:
const person = {
    arroganceLevel: 5,       // Scale of 0–5
    volumeLevel: 4,          // Scale of 0–5
    nameDrops: 3,            // How often they name-drop
    mirrorSelfies: 2         // Mirror selfies posted per week
};

console.log(isDoucher(person));

