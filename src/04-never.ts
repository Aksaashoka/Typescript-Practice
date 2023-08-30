// loop infinito
const withoutEnd = () => {
  while (true) {
    console.log("nunca para de aprender");
  }
};
// puede detener la ejecucion de tu programa
const fail = (messsage: string) => {
  throw new Error(messsage);
};
const example = (input: unknown) => {
  if (typeof input === "string") {
    return "esto es un string";
  } else if (Array.isArray(input)) {
    return "es un array";
  }
  return fail("not Match");
};

console.log(example("Hola"));
console.log(example([1, 1, 1, 1]));
console.log(example(121212)); // detiene la ejecucion;
console.log(example("Hola despues del fail"));
