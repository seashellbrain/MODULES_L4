const fetchData = require("./modules/fetchData");
const sortStrings = require("./modules/sortStrings");
const fsModule = require("./modules/fsModule");

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

(async () => {
    try {
        const { data: users, error } = await fetchData(USERS_URL);

        if (error) {
            console.error("Ошибка загрузки данных:", error);
            return;
        }

        const sortedNames = sortStrings(users.map(user => user.name));

        await fsModule.createDirectory("users");
        await fsModule.createFile("users/names.txt", sortedNames.join("\n"));
        await fsModule.createFile("users/emails.txt", users.map(user => user.email).join("\n"));

        console.log("Файлы успешно созданы!");
    } catch (err) {
        console.error("Ошибка:", err);
    }
})();
