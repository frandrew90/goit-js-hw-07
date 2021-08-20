// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inpRef = document.querySelector('#validation-input');

inpRef.addEventListener('blur', onOutOfFocus);

function upgradeClass(addClass, removeClass) {
  inpRef.classList.add(addClass);
  inpRef.classList.remove(removeClass);
}

function removeClasses(firstClassForRemove, secondClassForRemove) {
  inpRef.classList.remove(firstClassForRemove);
  inpRef.classList.remove(secondClassForRemove);
}

function onOutOfFocus(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    upgradeClass('valid', 'invalid');
    return;
  }

  if (e.target.value.length === 0) {
    removeClasses('invalid', 'valid');

    return;
  }

  upgradeClass('invalid', 'valid');
}

// ---------------------------------------------------------------------------------
// function addClass(classForAdd) {
//   inpRef.classList.add(classForAdd);
// }

// function removeClass(classForRemove) {
//   inpRef.classList.remove(classForRemove);
// }

// function onOutOfFocus(e) {
//   if (e.target.value.length === Number(e.target.dataset.length)) {
//     addClass('valid');
//     removeClass('invalid');
//     return;
//   }

//   if (e.target.value.length === 0) {
//     removeClass('invalid');
//     removeClass('valid');
//     return;
//   }

//   addClass('invalid');
//   removeClass('valid');
// }
// -----------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// function onOutOfFocus(e) {
//   if (e.target.value.length === Number(e.target.dataset.length)) {
//     e.target.classList.add('valid');
//     e.target.classList.remove('invalid');
//     return;
//   }

//   if (e.target.value.length === 0) {
//     e.target.classList.remove('valid');
//     e.target.classList.remove('invalid');
//     return;
//   }

//   e.target.classList.add('invalid');
//   e.target.classList.remove('valid');
// }

// ----------------------------------------------------------------------------------------
