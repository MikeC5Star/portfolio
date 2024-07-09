document.querySelector('form').addEventListener('submit', function(e){
    const name = document.querySelector('name').value;
    const email = document.querySelector('email').value;
    const message = document.querySelector('message').value;

    if(!name || !email || !message){
        alert('Please fill out all fields');
        e.preventDefault();
    }
});

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
});