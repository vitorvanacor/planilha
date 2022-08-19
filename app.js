for (let i = 1; i <= 20; i++) {
  const mensagem = fizzbuzz(i);
  console.log(mensagem);
}

function fizzbuzz(numero) {
  let mensagem = "";
  if (numero % 3 === 0) {
    mensagem = mensagem + "Fizz";
  }
  if (numero % 5 === 0) {
    mensagem = mensagem + "Buzz";
  }
  if (mensagem.length === 0) {
    mensagem = String(numero);
  }
  return mensagem;
}