class Contador {
    constructor(responsable) {
        this.responsable = responsable;
        this.conteo = 0;
    }

    static contadorGlobal = 0;

    getReponsable = () => {
        return this.responsable
    }

    getCuentaIndividual = () => {
        return this.conteo
    }

    getCuentaGlobal = () => {
        return Contador.contadorGlobal;
    }

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal++;
    }


}

const contador1 = new Contador('Coders')
contador1.contar();
contador1.contar();

const contador2 = new Contador('House')

console.log("Estos son los datos del contador 1: " + contador1.getCuentaIndividual())
console.log("Estos son los datos del contador 2: " + contador2.getCuentaGlobal())


//Este codigo esta explicado en los ultimos 10 minutos de la clase1 