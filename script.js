
let optionOneScreen = document.querySelector('.option-one-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let opening = document.querySelector('.opening');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionTwoEnd = document.querySelector('.option-two-end');
let body = document.querySelector('body');
let userBtn = document.querySelector('#user');
let userName = document.querySelector('#userName');
const inputElement = document.getElementById('myUsername');
let pathScreen = document.querySelector('.path-screen');
let optionOnePathBtn = document.querySelector('.option-one-path');
let optionTwoPathBtn = document.querySelector('.option-two-path');
let optionOneFinalBtn = document.querySelector('.option-one-final');
let optionTwoFinalBtn = document.querySelector('.option-two-final');
let optionOneFinBtn = document.querySelector('.option-one-fin');
let optionTwoFinBtn = document.querySelector('.option-two-fin');
let optionOneEn = document.querySelector('.option-one-en');
let optionTwoEn = document.querySelector('.option-two-en');
const thunder = document.getElementById('thunder');
const pathMusic = document.getElementById('path-music');
const actionMusic = document.getElementById('action-music');
const rewardMusic = document.getElementById('reward-music');
const deathMusic = document.getElementById('death-music');
const fearMusic = document.getElementById('fear-music');
const happyMusic = document.getElementById('happy-music');
let startOverBtns = document.querySelectorAll('.startOver');

document.querySelector('.opening').addEventListener('click', function(){
    if(event.target !== userBtn){
        thunder.play();
    }
});

userBtn.addEventListener('click', function(){
    const userData = inputElement.value;
    console.log(userData);
    pathScreen.style.display = 'block';
    opening.style.display = 'none';
    thunder.pause();
    thunder.currentTime = 0;
    body.style.backgroundImage = "url('https://www.worldanvil.com/uploads/images/91ef3b86a30d831e4a0409bdb1280af0.gif')";
    document.getElementById('userName').textContent = userData;
    pathMusic.play();
});

optionOnePathBtn.addEventListener('click', function(){
    pathScreen.style.display = 'none';
    optionOneScreen.style.display = 'block';
    body.style.backgroundImage = "url('https://media.istockphoto.com/id/1053856012/vector/legendary-creature-of-dark-forest.jpg?s=612x612&w=0&k=20&c=PIYnVfS4q-zMpEMLsbHQUk0SbpU5Xy_yjZuKrYAcMRU=')";
    pathMusic.pause();
    pathMusic.currentTime = 0;
    actionMusic.play()
});

optionTwoPathBtn.addEventListener('click', function(){
    pathScreen.style.display = 'none';
    optionTwoScreen.style.display = 'block';
    body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1213290.jpg')";
    pathMusic.pause();
    pathMusic.currentTime = 0;
    fearMusic.play();
});

optionOneFinalBtn.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    optionOneEnd.style.display = 'block';
    body.style.backgroundImage = "url('https://images8.alphacoders.com/139/thumb-1920-1396658.png')"
    actionMusic.pause();
    actionMusic.currentTime = 0;
    rewardMusic.play();
});

optionTwoFinalBtn.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    optionTwoEnd.style.display = 'block';
    body.style.backgroundImage = "url('data:image/png;base64,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')";
    deathMusic.play();
    actionMusic.pause();
    actionMusic.currentTime = 0;
});

optionOneFinBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    optionOneEn.style.display = 'block';
    fearMusic.pause();
    fearMusic.currentTime = 0;
    deathMusic.play();
    body.style.backgroundImage = "url('data:image/png;base64,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')";
});

optionTwoFinBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    optionTwoEn.style.display = 'block';
    body.style.backgroundImage = "url('https://wallpapers-clan.com/wp-content/uploads/2025/05/ghibli-cottage-in-flower-field-desktop-wallpaper-preview.jpg')";
    fearMusic.pause();
    fearMusic.currentTime = 0;
    happyMusic.play();
});

startOverBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        optionOneEn.style.display = 'none';
        optionOneEnd.style.display = 'none';
        optionTwoEn.style.display = 'none';
        optionTwoEnd.style.display = 'none';
        opening.style.display = 'block';
        userBtn.style.display = 'inline-block';
        location.reload();
    });
});