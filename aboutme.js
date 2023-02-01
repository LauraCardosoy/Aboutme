const question = [
    "who is her name?",
    "How old are her?",
    "where her was boarn?",
    "What is her profession",
    "what is her status",
    "what is her charch",
]

const ask = (aboutme = 0 )=> {
    process.stdout.write("\n\n" + question[aboutme] + " > ")

}
ask()

const answer = []

process.stdin.on("data", data => {
answer.push(data.toString().trim())

if(answer.length < question.length){
    ask(answer.length)
}else{
   console.log(answer)
    process.exit()
} 

})

process.on("exit", () =>{
    console.log( "Isso é sobre mim")
})

