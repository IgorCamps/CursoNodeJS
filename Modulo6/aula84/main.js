function teste() {
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste()
    }

    // Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    // Metodo de instancia

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo estatico
    static soma(x,y) {
        console.log(this);
    }
}

const contole1 = new ControleRemoto('LG');

ControleRemoto.soma(1,2);