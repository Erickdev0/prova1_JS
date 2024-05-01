//prova js aula1
const n1 = parseFloat(prompt("Digite a nota 1:"));
const n2 = parseFloat(prompt("Digite a nota 2:"));
const n3 = parseFloat(prompt("Digite a nota 3:"));

const p1 = parseFloat(prompt("Digite o peso 1:"));
const p2 = parseFloat(prompt("Digite o peso 2:"));
const p3 = parseFloat(prompt("Digite o peso 3:"));

const media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

console.log(`A média ponderada é aproximadamente ${media.toFixed(2)}.`);
