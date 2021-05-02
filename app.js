window.addEventListener('keydown', (e) => {
    console.log(e.key);
    let keyPressed = e.key;
    const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
    const key = document.querySelector(`.${keyPressed.toUpperCase()}`);
    key.classList.add("animate");


    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;

        this.classList.remove('animate');
    }



    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend',
            removeTransition));


    
})