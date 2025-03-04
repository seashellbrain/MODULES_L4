const bcrypt = require("bcrypt");

const hashPasswords = async (passwords) => {
    const saltRounds = 10;
    const results = [];

    for (let password of passwords) {
        const startTime = Date.now();
        const hashed = await bcrypt.hash(password, saltRounds);
        const endTime = Date.now();
        results.push({ password, hashed, time: endTime - startTime });
    }

    return results;
};

module.exports = hashPasswords;
