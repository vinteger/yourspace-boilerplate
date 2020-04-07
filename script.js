function welcomeMessage() {
    let input = prompt("Please enter your name:", name);
    alert("Hi " + input + "!");
}

// Bonus material
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    document.querySelector('body').style.backgroundColor = getRandomColor();
}