interface PaymentStrategy {
    pay(amount: number): void;
}

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Оплачено ${amount} через PayPal`); }
}

export class Checkout {
    constructor(private strategy: PaymentStrategy) {}
    processOrder(amount: number) { this.strategy.pay(amount); }
}