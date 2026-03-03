export class Light {
    on() { console.log("Світло увімкнено"); }
}

export class LightOnCommand {
    constructor(private light: Light) {}
    execute() { this.light.on(); }
}