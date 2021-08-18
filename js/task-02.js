const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingListRef = document.querySelector('#ingredients');

// ingredients.forEach(element => {
//   const newLiRef = document.createElement('li');
//   newLiRef.textContent = element;
//   ingListRef.append(newLiRef);
// });

const ingListRef = document.querySelector('#ingredients');

const listArr = ingredients.map(element => {
  const newLiRef = document.createElement('li');
  newLiRef.textContent = element;
  return newLiRef;
});

ingListRef.append(...listArr);
