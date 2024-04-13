/* комент для работы */
function buttonMove(){
    let button = document.getElementById('move');
    button.addEventListener('mouseover', (e) => {
        button.style.transition = 'all 0.2s';
        button.style.right = Math.random() * e.clientX + 'px';
        button.style.bottom = Math.random() * e.clientY + 'px';
    })
}

buttonMove();
