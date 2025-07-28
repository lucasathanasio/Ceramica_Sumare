var btn = document.querySelector('#mostrar-esconder');
var container = document.querySelector('.container');

btn.addEventListener('click', function(){
    if(container.style.display === 'block'){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
});

btn.addEventListener('mouseover', function(){
    btn.style.cursor = 'hand';
});