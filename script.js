var amount = window.prompt()

var stringy = (_amount) =>{
    _amount = amount;
    string = 'auto ';
    for (let i = 0; i < _amount - 1; i++) {
        string = string + 'auto ';
    }
    return string;
}

const cont = document.createElement('div');
cont.className = 'container';
document.body.appendChild(cont);

cont.style.cssText = `grid-template-columns: ${stringy()};`;

for (let i = 0; i < Math.pow(amount, 2); i++) {
    const el = document.createElement('div');
    cont.appendChild(el);
    el.classList.add(`el`, `div-${i+1}`);
}

document.querySelectorAll('.el').forEach(item => 
    {
    item.addEventListener('mouseover', event => 
    {
        event.target.style.backgroundColor = 'black';

        //setTimeout(function() {
        //    event.target.style.backgroundColor = "";
        //  }, 200);
    })
    
})


  
