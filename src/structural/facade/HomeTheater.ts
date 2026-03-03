class Audio { setVolume(v: number) {} }
class TV { turnOn() {} }

export class HomeTheaterFacade {
    private tv = new TV();
    private audio = new Audio();

    watchMovie() {
        this.tv.turnOn();
        this.audio.setVolume(10);
        console.log("Кіно розпочато...");
    }
}