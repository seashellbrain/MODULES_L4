const fs = require("fs").promises;

const fsModule = {
    createFile: async (filePath, content) => {
        await fs.writeFile(filePath, content);
    },
    readFile: async (filePath) => {
        return await fs.readFile(filePath, "utf-8");
    },
    createDirectory: async (dirPath) => {
        await fs.mkdir(dirPath, { recursive: true });
    },
};

module.exports = fsModule;
