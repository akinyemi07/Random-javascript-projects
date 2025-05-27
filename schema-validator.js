function validate(schema, obj) {
    for (const key in schema) {
        const rule = schema[key];
        const value = obj[key];
        if (rule.required && (value === undefined || value === null)) {
            return `${key} is required.`;
        }
        if (rule.type && typeof value !== rule.type) {
            return `${key} should be of type ${rule.type}.`;
        }
    }
    return "Valid ✅";
}

// Example schema and object
const schema = {
    name: { type: "string", required: true },
    age: { type: "number", required: true },
    email: { type: "string", required: false }
};

const user = { name: "Jane", age: 30 };

console.log(validate(schema, user)); // Valid ✅

