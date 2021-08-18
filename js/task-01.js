'use strict';

const catItemsRef = document.querySelectorAll('#categories .item');

const categArr = [...catItemsRef];

console.log(`В списке ${categArr.length} категории.`);

categArr.forEach(item => {
  console.log(`Категоря: ${item.querySelector('h2').textContent}`);
  console.log(
    `Клдичество элементов: ${item.querySelector('ul').children.length}`
  );
});
