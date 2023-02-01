const question = [
    "who is her name?",
    "How old are her?",
    "where her was boarn?",
    "What is her profession",
    "what is her status",
    "what is her charch"
]

const ask = (aboutme = 0 )=> {
    process.stdout.write(question[aboutme] + "\n")

}