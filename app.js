for (let i = 1; i <= 20; i++) {
  const mensagem = fizzbuzz(i);
  console.log(mensagem);
}

function fizzbuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return String(numero);
  }
}