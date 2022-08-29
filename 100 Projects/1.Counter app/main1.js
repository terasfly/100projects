const count = document.querySelector('.count');
// const button = document.querySelectorAll('button');
const buttons = document.querySelectorAll('button')
let countNumber = 0;


buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {

        const type = (e.currentTarget.classList);
        if (type.contains('substract')) {
            countNumber--;
        } else if (type.contains('add')) {
            countNumber++;
        } else {
            countNumber = 0
        }
        count.textContent = countNumber;
    })
})

// const type = (e.currentTarget.classList);
// if (type.contains('substract')) {
//     countNumber--;
// }
// // count.textContent = countNumber;
// press.forEach(function(btn) {
//     btn.addEventListener('mouseover', function(e) {
//         const styles = (e.currentTarget.classList)
//         if (styles.contains('brown1')) {
//             count = '£98'
//             image.src = "sofa-5.avif"


//         } else if (styles.contains('brown2')) {
//             count = '£149'
//             image.src = "sofa-1.avif"
//         } else if (styles.contains('brown3')) {
//             count = '£250'
//             image.src = "sofa-2.avif"
//         } else if (styles.contains('brown4')) {
//             count = '£500'
//             image.src = "sofa-3.avif"
//         } else {
//             count = '£999'
//             image.src = "sofa-4.avif"
//         }
//         priceOfFurniture1.textContent = count

//     })
// });