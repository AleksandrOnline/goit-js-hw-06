const counterValue = 0;
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue + 1;
});

decrementBtn.addEventListener('click', () => {
  valueEl.textContent = counterValue - 1;
});
