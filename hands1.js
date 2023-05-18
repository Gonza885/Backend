const mostrarLista = (elementos = []) => {
    if (elementos.length === 0) return "lista vacia"
    elementos.forEach(elementos => console.log(elementos))
    return elementos.length;
}

//prueba fallida

let resultado1 = mostrarLista();
console.log(`Aqui esta el resultado de la prueba fallida--> ${resultado1}`)


//prueba valida

let resultado2 = mostrarLista([1, 2, 3, 4])
console.log(resultado2)

