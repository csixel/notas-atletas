let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let nome = atletas[i].nome;
    let notas = atletas[i].notas;

    // Ordena notas menor para o maior
    notasOrdenadas = notas.slice().sort(function(a, b){
      return a - b;
    });
    
    // Elimina a maior e a menor nota
    let notasComputadas = notasOrdenadas.slice(1, 4);
    
    // Soma as notas válidas 
    let soma = notasComputadas.reduce(function(total, nota){
      return total + nota;
    }, 0);

    // Calcula a média válida
    let media = soma / notasComputadas.length;
    
    // O que será exibido no console
    console.log("Atleta: " + nome)
    console.log("Notas Obtidas: " + notas)
    console.log("Média Válida: " + media)
    console.log("");
  }
}

calcularMedia(atletas);