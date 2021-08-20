// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refsContainer = document.querySelector('body');

const refs = {
  input: refsContainer.querySelector('#font-size-control'),

  text: refsContainer.querySelector('#text'),
};

refs.input.addEventListener('input', onChangeRange);

// function onChangeRange(e) {
//   console.log(e);
//   console.log(e.target.value);
//   refs.text.style.fontSize = '${Number(e.target.value)}px';
// }

function onChangeRange(e) {
  refs.text.style.fontSize = `${e.target.value}px`;
}
