var button = document.querySelector(".ham");

var target = document.querySelector('nav ul');
button.addEventListener('click', function () {
    target.classList.toggle('toggle');
})