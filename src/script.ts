function getValue(): void {
  const $formObject = document.getElementById('input-form') as HTMLFormElement;
  document.getElementById('output')!.innerHTML = $formObject.inputForm.value;
}
