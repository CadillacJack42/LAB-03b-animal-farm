// import functions

const paige = document.getElementById('paige');
const monkey = document.getElementById('monkey');
const lion = document.getElementById('lion');
const bark = document.getElementById('dog-bark');
const hoot = document.getElementById('monkey-sound');
const roar = document.getElementById('lions-roar');


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

paige.addEventListener('click', () => {
    bark.play()
});
monkey.addEventListener('click', () => {
    hoot.play()
});
lion.addEventListener('click', () => {
    roar.play()
});

