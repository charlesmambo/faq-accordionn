const minusIcon = document.querySelector('.minus-icon');
const helpPlus = document.querySelector('.help-plus-icon');
const hiddeContent = document.querySelector('.help-content');
const plusIconBtn = document.querySelectorAll('.plus-icon-btn');
const hiddenIcon = document.querySelectorAll('.hidden-icon');
const hiddenContentEl = document.querySelectorAll('.hidden-content');


minusIcon.addEventListener('click', () =>{
    hiddeContent.classList.add('hide');
    helpPlus.classList.toggle('show');
    minusIcon.style.display = 'none';
} );

helpPlus.addEventListener('click', () =>{
    hiddeContent.classList.remove('hide');
    minusIcon.style.display = 'block';
    helpPlus.classList.remove('show');
})

plusIconBtn.forEach((icon, index) => {
 icon.addEventListener('click', () =>{
    console.log('i got clicked');
    icon.classList.toggle('hide')
   hiddenContentEl[index].classList.add('show');
   hiddenIcon[index].classList.add('show');
 })
} );

hiddenIcon.forEach((icon2, index) => {
 icon2.addEventListener('click', () =>{
    console.log('i got clicked');

    plusIconBtn.forEach(icon => {
        icon.classList.remove('hide'); 
    });
   hiddenContentEl[index].classList.remove('show');
  hiddenIcon.forEach(icon => {
        icon.classList.remove('show'); 
    });
 })
} )