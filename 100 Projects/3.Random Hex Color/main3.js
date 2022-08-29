const hex = document.querySelector('.color');
const btn = document.querySelector('.generate')



const generateColor = () => {
    const randomColor = Math.random().toString().substring(2, 8)
    document.body.style.backgroundColor = '#' + randomColor;
    hex.textContent = '#' + randomColor;
}
btn.addEventListener('click', generateColor)