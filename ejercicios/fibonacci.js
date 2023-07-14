//0, 1, 1, 2, 3, 5, 8, 13, 21
//a  b  r
//
//sumar el primer y segundo elemento y el resultado sumarle el siguiente elemento
// 0 1 1

function fibonacci() {
  let a = 0;
  let b = 1;
  let r = a + b;
  let contenedor = [a, b, r];
  while (r < 21) {
    a = b;
    b = r;
    r = a + b;
    contenedor.push(r);
  }
  console.log(contenedor);
}

fibonacci();
