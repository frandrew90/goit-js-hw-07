// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const container = document.querySelector('#counter');

const refs = {
  decButton: container.querySelector('[data-action="decrement"]'),

  value: container.querySelector('#value'),

  incButton: container.querySelector('[data-action="increment"]'),
};

console.log(container);

console.log(refs);

let num = Number(refs.value.textContent);

refs.incButton.addEventListener('click', incFn);

function incFn() {
  num += 1;
  refs.value.textContent = num;
}

refs.decButton.addEventListener('click', decFn);

function decFn() {
  num -= 1;
  refs.value.textContent = num;
}
