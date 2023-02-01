//Podemos usar funcionalidades de outros eventos com a função inherits
const {inherits} = require(`util`)

const {EventEmitter} = require(`events`)
function Character(name) {
    this.name = name
}
//Nesta alinha herdamos as funcionalidades do eventEmitter para o character atraves do inherits
inherits(Character, EventEmitter)

const chapolin = new Character (`Chapolin`)
chapolin.on(`help`, () => console.log (`Eu! o ${chapolin.name} colorado!`))

console.log(`oh! E agora, quem poderá me defender?`)
chapolin.emit(`help`)