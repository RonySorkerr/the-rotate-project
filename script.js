const allbtns = document.querySelectorAll('.btn');


// allbtns.forEach((btn, index) => {
//     btn.addEventListener('click', function() {
//         const degree = parseInt(btn.querySelector('span').innerText); // Extract degree from button
//         image.style.transform = `rotate(${degree}deg)`; // Rotate image
//     });

allbtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const degree = parseInt(btn.querySelector('span').innerText);
        image.style.transform = `rotate(${degree}deg)`;
    });