/**
 * As funcións flecha e as funcións anónimas son xeitos cortos de
 * expresar unha función. Teñen sentido cando temos que proporcionar
 * unha función como argumento  e non temos necesidade de reutilizar
 * esa función noutras partes do código.
 * As funcións anónimas (ou expresións de función) e as funcións flecha
 * son equivalentes, excepto no seu comportamento cando facemos referencia
 * á palabra reservada "this" no interior das mesmas.
 * Máis sobre funcións flecha e "this": https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/
 */

/* Esto é algo que estamos facendo constantemente
mentras traballamos con Express */
app.get("/usuarios/",(peticion, resposta)=>{
    const nome = peticion.nome
    resposta.send("Hola "+nome)
})
// app -> Object
// .get() -> Method -> Function
// "/usuarios/" -> String (primeiro parámetro de .get())
// (peticion,resposta)=>{...} -> Función flecha (segundo parámetro .get())

/* Esto é outra forma de facer o anterior, empregando unha función 
definida no canto dunha función flecha*/
function controlador(peticion, resposta){
    const nome = peticion.nome
    resposta.send("Hola "+nome)
}
app.get("/usuarios/",controlador)
// app -> Object
// .get() -> Method -> Function
// "/usuarios/" -> String (primeiro parámetro de .get())
// controlador -> Function (segundo parámetro .get())

/* Outra forma máis empregando unha función flecha almacenada nunha
constante. Non adoptes este xeito de expresar as funcións como alternativa
ás funcións declaradas. As funcións flecha teñen un comportamento peculiar
cando se emprega no seu corpo a palabra 'this' */
const controlador = (peticion, resposta)=>{
    const nome = peticion.nome
    resposta.send("Hola "+nome)
}
app.get("/usuarios/",controlador)
// app -> Object
// .get() -> Method -> Function
// "/usuarios/" -> String (primeiro parámetro de .get())
// controlador -> Funcion flecha (segundo parámetro .get())

/* Outra forma de facer o mesmo con funcións anónimas (expresións de función) */
app.get("/usuarios/", function (peticion, resposta) {
    const nome = peticion.nome
    resposta.send("Hola "+nome)
})
// app -> Object
// .get() -> Method -> Function
// "/usuarios/" -> String (primeiro parámetro de .get())
// function (peticion,resposta) {...} -> Función anónima (segundo parámetro .get())

/* Formas da función flecha - argumentos */
()=>{} // Sen argumentos
unArgumento => {} // Un só argumento, sen paréntesis
(unArgumento, outroArgumento) => {} // Varios argumentos
/* Formas da función flecha - bloque */
()=>2*3 // Unha única expresión. Sen chaves e con return implicito
()=>{return 2*3}
()=>{
    const valor = 2*3
    const medioValor = valor/2
    return medioValor
} // Multiples sentencias. Con chaves e sen return implicito.

const suma = (a,b)=>a+b

const converterAString = function (a) {
    return String(a)
}

function stringDoResultado(operacion, conversor, a, b) {
    const resultado = operacion(a,b)
    const string = conversor(resultado)
    return string
}

const b = stringDoResultado(suma, converterAString, 5, 9)

// Qué hai en b?