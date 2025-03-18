const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

console.log(`Текущий режим работы: ${process.env.MODE || "Не указан"}`);
console.log(`Загружен файл окружения: .env.${process.env.NODE_ENV || "development"}`);
console.log("Начинаем процесс хеширования паролей...\n");


const passwords = Array.from({ length: 13 }, (_, i) => `password${i}`);

async function hashPassword(password) {
    const startTime = Date.now();
    const hashed = await bcrypt.hash(password, 10);
    return { password, hashed, time: Date.now() - startTime };
}

async function processPasswords() {
    const start = Date.now();
    const results = await Promise.all(passwords.map(hashPassword));

    results.forEach(({ password, hashed, time }) => {
        console.log(`Пароль: ${password}`);
        console.log(`Хеш: ${hashed}`);
        console.log(`Время хеширования: ${time}ms\n`);
    });

    console.log("Общее время хеширования:", Date.now() - start, "мс");
    console.log("bcrypt использует алгоритм Blowfish, который требует вычислительных ресурсов.");
    console.log("Чем больше раундов соли, тем дольше время обработки.");
}

processPasswords();
