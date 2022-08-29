const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', palindrome)


function palindrome() {
    const word = document.querySelector('.input-text').value
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).
    toLowerCase();
    console.log(start)
    let end = word.substring(len - Math.floor(len / 2)).
    toLowerCase();
    console.log(end)
        // alert(start);
        //    let flip = end.split('').reverse().join('');
    let flip = [...end].reverse().join('')
    console.log(flip)
    if (start == flip) {
        result.textContent = `${word.toUpperCase()} is a palindrome`
    } else {
        result.textContent = `${word.toUpperCase()} is not a palindrome`
    }
}

// const result = document.querySelector('.result');
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', palindrome)

// function palindrome() {
//     const word = document.querySelector('.input-text').value
//     const length = word.length;
//     const start = word.substring(0, Math.floor(length / 2)).toLowerCase();
//     console.log(start)
//     const end = word.substring(length - Math.floor(length / 2))
//     console.log(end)
//     const flip = [...end].reverse().join('')
//     if (start === flip) {
//         result.textContent = `${word.toUpperCase()} is palindrome`
//     } else {
//         result.textContent = `${word.toUpperCase()} is not palindrome`
//     }

// }