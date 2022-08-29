const count = document.querySelector('.count');
const generate = document.querySelector('.generate')


generate.addEventListener('click', () => {
    random()
})

function random() {

    const randomNumber = Math.floor(Math.random() * 10 + 1);

    count.textContent = randomNumber;
}