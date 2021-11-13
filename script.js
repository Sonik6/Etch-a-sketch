var cont = document.createElement('div');
cont.className = 'container';
document.body.appendChild(cont);

for (let i = 0; i < 256; i++) {
    var el = document.createElement('div');
    cont.appendChild(el);
    el.classList.add(`el`, `div-${i+1}`);
}

document.querySelectorAll('.el').forEach(item => 
    {
    item.addEventListener('click', event => 
    {
        event.target.style.backgroundColor = 'blue';

        //setTimeout(function() {
        //    event.target.style.backgroundColor = "";
        //  }, 200);
    }, false)
    
})
  
