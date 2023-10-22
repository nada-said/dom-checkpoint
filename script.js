
const buttonsPlus = document.querySelectorAll('button:nth-of-type(1)');
const buttonsMinus = document.querySelectorAll('button:nth-of-type(2)');
const paragraphs = document.querySelectorAll('p');


function incrementValue(index) {
  const paragraph = paragraphs[index];
  let value = parseInt(paragraph.textContent);
  value += 1;
  paragraph.textContent = value;
}


function decrementValue(index) {
  const paragraph = paragraphs[index];
  let value = parseInt(paragraph.textContent);
  value -= 1;
  paragraph.textContent = value;
}


buttonsPlus.forEach((button, index) => {
  button.addEventListener('click', () => {
    incrementValue(index);
  });
});


buttonsMinus.forEach((button, index) => {
  button.addEventListener('click', () => {
    decrementValue(index);
  });
});
