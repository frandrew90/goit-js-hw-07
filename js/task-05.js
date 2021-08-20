// Задание 5
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refsContainer = document.querySelector('body');

const refs = {
  input: refsContainer.querySelector('#name-input'),

  text: refsContainer.querySelector('#name-output'),
};

refs.input.addEventListener('input', inInputWriting);

function inInputWriting(e) {
  const inputText = refs.input.value;

  inputText === ''
    ? (refs.text.textContent = 'незнакомец')
    : (refs.text.textContent = inputText);
}
