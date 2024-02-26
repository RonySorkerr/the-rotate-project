const allbtns = document.querySelectorAll('.btn');
for(const btn of allbtns){
    btn.addEventListener('click', function(){
        console.log('clicked')
    })
}

