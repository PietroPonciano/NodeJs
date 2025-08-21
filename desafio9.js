const fs = require("fs/promises");

async function main() {
  try {
    // Criar arquivo inicial
    await fs.writeFile("original.txt", "Olá Node!");

    // Ler o arquivo
    const texto = await fs.readFile("original.txt", "utf8");

    // Simular demora com setTimeout dentro de uma Promise
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Escrever novo arquivo com o dobro do conteúdo
    await fs.writeFile("dobrado.txt", texto.repeat(2));

    console.log("Arquivo dobrado criado com sucesso!");
  } catch (error) {
    console.error("❌ Ocorreu um erro durante o processo:");
    console.error(error.message);
  }
}

main();
