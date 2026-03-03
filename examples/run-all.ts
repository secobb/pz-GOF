// Імпорт всіх патернів
import { Database } from "../src/creational/singleton/Database";
import { ConsoleLoggerCreator } from "../src/creational/factory-method/Logger";
import { ComputerBuilder } from "../src/creational/builder/Computer";

import { PrinterAdapter } from "../src/structural/adapter/Adapter";
import { HomeTheaterFacade } from "../src/structural/facade/HomeTheater";
import { SimpleCoffee, MilkDecorator, SugarDecorator } from "../src/structural/decorator/Coffee";

import { Checkout, PayPalPayment } from "../src/behavioral/strategy/Payment";
import { Store } from "../src/behavioral/observer/Store";
import { Light, LightOnCommand } from "../src/behavioral/command/Light";

function runDemo() {
    console.log("=== 🏗️ ПОРОДЖУВАЛЬНІ ПАТЕРНИ (CREATIONAL) ===");


    // 1. Singleton
    console.log("\n[Singleton]: Перевірка єдиного екземпляру бази даних...");
    const db1 = Database.getInstance();
    const db2 = Database.getInstance();
    db1.query("SELECT * FROM users");
    console.log(`Чи це той самий об'єкт? ${db1 === db2 ? "Так ✅" : "Ні ❌"}`);

    // 2. Factory Method
    console.log("\n[Factory Method]: Створення логера через фабрику...");
    const factory = new ConsoleLoggerCreator();
    factory.logInfo("Це повідомлення створене через Factory Method.");

    // 3. Builder
    console.log("\n[Builder]: Конструювання кастомного комп'ютера...");
    const myPC = new ComputerBuilder()
        .setRAM("32GB DDR5")
        .setHDD("2TB NVMe")
        .setGPU("RTX 4090")
        .build();
    console.log("Результат збірки:", myPC);


    console.log("\n\n=== 🏛️ СТРУКТУРНІ ПАТЕРНИ (STRUCTURAL) ===");


    // 4. Adapter
    console.log("\n[Adapter]: Робота зі старим принтером через новий інтерфейс...");
    const oldPrinter = { printLegacy: (msg: string) => console.log(`Old System: ${msg}`) };
    const adapter = new PrinterAdapter(oldPrinter);
    adapter.print("Адаптований текст для друку");

    // 5. Facade
    console.log("\n[Facade]: Запуск домашнього кінотеатру однією кнопкою...");
    const theater = new HomeTheaterFacade();
    theater.watchMovie();

    // 6. Decorator
    console.log("\n[Decorator]: Гнучке створення напою...");

// 1. Створюємо базову каву
    let myCoffee = new SimpleCoffee();
    console.log(`${myCoffee.getDescription()} | Ціна: ${myCoffee.cost()} грн`);

// 2. Додаємо молоко
    myCoffee = new MilkDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} | Ціна: ${myCoffee.cost()} грн`);

// 3. Додаємо цукор поверх молока
    myCoffee = new SugarDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} | Ціна: ${myCoffee.cost()} грн`);


    console.log("\n\n=== 🧠 ПОВЕДІНКОВІ ПАТЕРНИ (BEHAVIORAL) ===");


    // 7. Strategy
    console.log("\n[Strategy]: Гнучка зміна методу оплати...");
    const cart = new Checkout(new PayPalPayment());
    cart.processOrder(1500);

    // 8. Observer
    console.log("\n[Observer]: Підписка на оновлення магазину...");
    const myStore = new Store();
    const customer = { update: (item: string) => console.log(`📩 Клієнт: О, треба купити ${item}!`) };
    myStore.subscribe(customer);
    myStore.notify("PlayStation 5 Pro");

    // 9. Command
    console.log("\n[Command]: Виконання інкапсульованої команди...");
    const livingRoomLight = new Light();
    const turnOn = new LightOnCommand(livingRoomLight);
    turnOn.execute();

    console.log("\n--- ДЕМОНСТРАЦІЮ ЗАВЕРШЕНО ---");
}

runDemo();