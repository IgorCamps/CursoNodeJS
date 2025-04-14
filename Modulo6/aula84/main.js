class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
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
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const contole1 = new ControleRemoto('LG');
contole1.aumentarVolume();
contole1.aumentarVolume();
contole1.aumentarVolume();
console.log(contole1);


ControleRemoto.trocaPilha();
 