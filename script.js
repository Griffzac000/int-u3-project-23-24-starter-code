
let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionOneEnd = document.querySelector('.option-one-end')
let opening = document.querySelector('.opening')
let optionTwoBtn = document.querySelector('.option-two')
let optionTwoScreen = document.querySelector('.option-two-screen')
let optionTwoEnd = document.querySelector('.option-two-end')
let body = document.querySelector('body')
let userBtn = document.querySelector('#user');
let userName = document.querySelector('#userName')
const inputElement = document.getElementById('myUsername')


userBtn.addEventListener('click', function(){
    const userData = inputElement.value;
    console.log(userData);
    optionOneScreen.style.display = 'block';
    opening.style.display = 'none';
    body.style.backgroundImage = "url('https://i.pinimg.com/originals/1a/7a/3c/1a7a3c32c2fd248ca4ac3b043e4cf786.gif')";
    document.getElementById('userName').textContent = userData;
});
optionOneBtn.addEventListener('click', function(){
    console.log("clicked");
    optionTwoScreen.style.display = 'none';
    optionOneScreen.style.display = 'block';
    body.style.backgroundImage = "url('https://www.worldanvil.com/uploads/images/91ef3b86a30d831e4a0409bdb1280af0.gif')";
});



optionTwoBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'block';
    optionOneScreen.style.display = 'none';
    body.style.backgroundImage = "url('https://www.worldanvil.com/uploads/images/91ef3b86a30d831e4a0409bdb1280af0.gif')";
});