// button selecting
const allbtns = document.querySelectorAll('.btn');
// selecting the reset button
const resetBtn = document.getElementById('reset');
// result display 
const resultView = document.getElementById('valueDisplay');
// rotation image
const rotateImage = document.getElementById('rotimg');

for(const btn of allbtns){
    btn.addEventListener('click', function(){
        resultView.classList.remove('hidden');
        const degree = parseInt(btn.querySelector('span').innerText);
        resultView.innerText= `The Rotation Of ${degree} Degree`;
        resultView.classList.add('bg-[#ffeded]')
        rotateImage.style.transform = `rotate(${degree}deg)`
    })
}
resetBtn.addEventListener('click', function(){
    resultView.classList.add('hidden')
    rotateImage.style.transform = 'rotate(0deg)'
})