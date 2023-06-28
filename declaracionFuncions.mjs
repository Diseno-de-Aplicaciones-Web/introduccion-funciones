let numEsquerda = 1000
let numDereita = 2000

/**
 * Aquí declaramos a función, pero non se executa.
 * Declarar unha función é como declarar unha variable ou unha constante.
 * Dámoslle un nome e "explicamos" como é.
 */
function sumaEsto(numEsquerda, numDereita) {
    console.log("Dentro da funcion", numEsquerda, numDereita)
    const total = numEsquerda + numDereita
    return total
}

const asignaronmeUnhaFuncion = sumaEsto // Isto non executa a función

console.log("Fora da funcion", numEsquerda, numDereita);

/** nalgún lugar do futuro... */

const cantoE = sumaEsto(2,5)
const cantoMais = sumaEsto(33,44)
console.log("Fora da funcion", numEsquerda, numDereita);

console.log(cantoE, cantoMais)
console.log(asignaronmeUnhaFuncion)
const miraQueCousas = asignaronmeUnhaFuncion(11,12)
console.log(miraQueCousas)