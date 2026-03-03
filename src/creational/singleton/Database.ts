export class Database {
    private static instance: Database;

    private constructor() { } // Приватний конструктор

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string) {
        console.log(`Виконання запиту: ${sql}`);
    }
}