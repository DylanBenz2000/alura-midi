
const buttons = document.querySelectorAll('.tecla');


buttons.forEach(button =>{

    button.addEventListener('click', function(){
        const soundId = button.getAttribute('data-sound');
        const sound = document.getElementById(soundId);
        if(sound){
            sound.currentTime = 0;
            sound.play();
        }
    })

    button.addEventListener('keydown', function(e){
        if(e.code === 'Enter' || e.code === 'Space'){
            button.classList.add('activa');
            // setTimeout(function(){
            //     button.classList.remove('activa')
            // }, 100)
        }
    })

    button.addEventListener('keyup', function(e){
        if(e.code === 'Enter' || e.code === 'Space'){
            button.classList.remove('activa')
        }
    })

})