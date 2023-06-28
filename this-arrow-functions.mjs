function funcionNormal(){
    console.log(this)
}

const anonimaExterior = function(){
    console.log(this)
}

const cousa = {

    nome: "Ola, son o obxeto.",

    funcionNormal,

    funcionNormalInterior(){
        console.log(this)
    },

    funcionAnonima: function(){
        console.log(this)
    },

    anonimaExterior,

    funcionFlecha: ()=>{
        console.log(this)
    }

}

console.log("Normal", cousa.funcionNormal());
console.log("Normal interior", cousa.funcionNormalInterior());
console.log("Anonima", cousa.funcionAnonima());
console.log("Anonima exterio", cousa.anonimaExterior());
console.log("Flecha", cousa.funcionFlecha());