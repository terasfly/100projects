const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

const copyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(input.value)
        .then(() => {
            btn.textContent = 'Copied!'
            setTimeout(() => {
                btn.textContent = 'Copy'
            }, 3000);

        })
        // input.select();
        // input.setSelectionRange(0, 99999);
        // document.execCommand('copy');



}

btn.addEventListener('click', copyText)