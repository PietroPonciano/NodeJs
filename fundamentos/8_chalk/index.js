import chalk from 'chalk'

const nota = 3


if(nota >= 7){
console.log(chalk.green('Parabens! Voce foi aprovado'))
}else{
    console.log(chalk.bgRed.black('Voce foi reprovado'))
}
