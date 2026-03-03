// Інтерфейс, який описує спільну поведінку для всіх об'єктів
export interface Coffee {
    cost(): number;
    getDescription(): string;
}

// Базовий компонент (те, що ми будемо декорувати)
// ВАЖЛИВО: додано export
export class SimpleCoffee implements Coffee {
    cost() {
        return 50;
    }

    getDescription() {
        return "Проста кава";
    }
}

// Базовий клас декоратора (може бути абстрактним)
export abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    abstract cost(): number;
    abstract getDescription(): string;
}

// Конкретний декоратор №1: Молоко
export class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 15;
    }

    getDescription() {
        return `${this.coffee.getDescription()}, з молоком`;
    }
}

// Конкретний декоратор №2: Цукор
export class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 5;
    }

    getDescription() {
        return `${this.coffee.getDescription()}, з цукром`;
    }
}