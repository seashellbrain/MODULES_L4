const hashPasswords = require("./libs/bcrypt");

const passwords = Array.from({ length: 13 }, (_, i) => `password${i}`);

hashPasswords(passwords).then((results) => {
    results.forEach(({ password, hashed, time }) =>
        console.log(`Пароль: ${password}, Хеш: ${hashed}, Время: ${time}ms`)
    );
});
const dotenv = require("dotenv");
const path = `.env.${process.env.NODE_ENV || "development"}`;

const result = dotenv.config({ path });

if (result.error) {
    console.error("Ошибка загрузки .env файла:", result.error);
} else {
    console.log("Файл .env загружен успешно:", path);
}

console.log(`Текущий режим работы: ${process.env.MODE}`);
