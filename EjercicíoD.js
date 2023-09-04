newFunction();
function newFunction() {
  let array = [13, 55, 66, 48, 4, 888889, 45645, 1235, 756, 1235];
  let cociente = array.map((element) => {
    return element / 2;
  });
  let par = cociente.filter((element) => {
    return Number.isInteger(element);
  });
  console.log(array);
  console.log(cociente);
  console.log(par);
}

