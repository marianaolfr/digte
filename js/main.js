const languageButtons = document.querySelectorAll('.lang-img');

languageButtons.forEach((button) => {
   button.addEventListener('click', () => {
      const selectedButton = document.querySelector('.selected');

      selectedButton.classList.remove('selected');
      button.classList.add('selected');
   });
});

function changeImg(object, newImage) {
   document.getElementById('img__principal').src = './img/Comunicacao.webp';
}
