interface Observer { update(item: string): void; }

export class Store {
    private customers: Observer[] = [];
    subscribe(c: Observer) { this.customers.push(c); }
    notify(item: string) { this.customers.forEach(c => c.update(item)); }
}