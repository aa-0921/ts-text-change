// const message: string = 'Hello! TypeScript!';
// console.log(message);

function getValue() {
  // var $formObject = event.target.value;
  // document.getElementById("output").innerHTML = $formObject;


  const $formObject = document.getElementById('input-form');
  document.getElementById('output').innerHTML = $formObject.inputForm.value;
}
