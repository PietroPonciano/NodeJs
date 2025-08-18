let nome = "Pietro";
const hora = new Date().getHours();
let dia;

if (hora < 12) {
  dia = "manhã";   // 0h até 11h
} else if (hora < 18) {
  dia = "tarde";   // 12h até 17h
} else {
  dia = "noite";   // 18h até 23h
}

console.log(`Hello world! I'm ${nome}, agora são ${hora}h da ${dia}.`);
