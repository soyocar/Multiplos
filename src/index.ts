import "./styles.css";

let btnEnv = document.getElementById("enviar");
let num: number = document.getElementById("dato1");
let mult: number = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let numero: number = Number(num.value);
  let multiplo: number = Number(mult.value);
  function EsMultiplo(numero: number, multiplo: number): boolean {
    return numero % multiplo === 0;
  }
  if (EsMultiplo(numero, multiplo)) {
    console.log(numero + " Es número multiplo de " + multiplo);
  } else {
    console.log(numero + " No es múltilplo de " + multiplo);
  }
});
//esta bien tu solucion
