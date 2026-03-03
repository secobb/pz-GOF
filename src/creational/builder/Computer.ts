class Computer {
    public ram: string = '8GB';
    public hdd: string = '512GB';
    public gpu?: string;
}

export class ComputerBuilder {
    private computer: Computer = new Computer();

    setRAM(ram: string) { this.computer.ram = ram; return this; }
    setHDD(hdd: string) { this.computer.hdd = hdd; return this; }
    setGPU(gpu: string) { this.computer.gpu = gpu; return this; }

    build() { return this.computer; }
}