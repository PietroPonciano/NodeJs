import inquirer from "inquirer";
import chalk from "chalk";

inquirer.prompt([
  {
    name: 'nome',
    message: 'Qual seu nome?'
  },
  {
    name: 'idade',
    message: "Qual a sua idade?"
  }
]).then((answers) => {
  console.log(answers);

  console.log(
    chalk.bgYellow.black(`Seu nome é ${answers.nome} e sua idade é ${answers.idade}`)
  );
}).catch((err) => console.log(err));
