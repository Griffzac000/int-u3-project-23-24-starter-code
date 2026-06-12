// Declare variables below to save the different divs of your story.






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');
let opening = document.querySelector('.story-opening')
let optionTwoBtn = document.querySelector('.option-two')
let optionTwoScreen = document.querySelector('.option-two-screen')
let body = document.querySelector('body')
let userBtn = document.querySelector('.user')


userBtn.addEventListener('click', function(){
     
})
optionOneBtn.addEventListener('click', function(){
    optionOneScreen.style.display = 'block';
    opening.style.display = 'none';
    body.style.backgroundImage = "url('')"
});
optionTwoBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'block';
    opening.style.display = 'none';
    body.style.backgroundImage = "url('')"
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });