function bgAnim(){
    function anim(){
        let bg = document.getElementById('main');
        bg.style.transition = 'all 0.2s'
        bg.style.background = 'rgb(' + Math.random() * 255 +', ' + Math.random() * 255 +', ' + Math.random() * 255 +')';
    }

    setInterval(anim, 200);
}

bgAnim();