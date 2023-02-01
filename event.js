const {EventEmitter} = require(`events`)

const ev = new EventEmitter()

//O on emite varias vezes a função
ev.on(`say something`, (msg) => {
    console.log(`say something`, msg)
})



ev.emit(`say something`, `Laura Cardoso`)

ev.emit(`say something`, `Amor de mãe`)




//O once executa apenas uma vez
/*ev.once(`say something`, (message) => {
    console.log(`Eu ouvi voce!`, message)
})*/