const closedface=document.querySelector('.closed')
const openface=document.querySelector('.open')
const shutface=document.querySelector('.shut')

// add event listener
closedface.addEventListener('click',()=>{
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closedface.classList.remove('active');
        shutface.classList.remove('active');

    }
})

openface.addEventListener('click',()=>{
    if(shutface.classList.contains('shut')){
        shutface.classList.add('active');
        openface.classList.remove('active');
        closedface.classList.remove('active');


    }
})
shutface.addEventListener('click',()=>{
    if(closedface.classList.contains('closed')){
        closedface.classList.add('active');
        openface.classList.remove('active');
        shutface.classList.remove('active');


    }
})