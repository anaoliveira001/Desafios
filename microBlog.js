// DESAFIO
//O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. Conferir se um texto vai caber em um tuíte é sua tarefa.

// Entrada: A entrada é uma linha de texto T (1 ≤ |T| ≤ 500).

//Saida: A saída é dada em uma única linha. Ela deve ser "TWEET" (sem as aspas) se a linha de texto T tem até 140 caracteres. Se T tem mais de 140 caracteres, a saída deve ser "MUTE".

//Fallow the code bellow: 

let tweet = gets();

if (!tweet) {
  console.error("Error: No input received from gets()");
} else if (tweet.length > 140) {
  console.log("MUTE");
} else {
  console.log((gets().length <= 140) ?"TWEET":"MUTE");
}
