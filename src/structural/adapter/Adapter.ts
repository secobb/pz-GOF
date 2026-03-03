class OldPrinter {
    printLegacy(text: string) { console.log(`Legacy Print: ${text}`); }
}

interface NewPrinter {
    print(text: string): void;
}

export class PrinterAdapter implements NewPrinter {
    constructor(private oldPrinter: OldPrinter) {}

    print(text: string) {
        this.oldPrinter.printLegacy(text);
    }
}